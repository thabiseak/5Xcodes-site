const fs = require('fs');
const path = require('path');

// Function to add 'use client' directive if not present
function addClientDirective(content) {
  if (!content.includes("'use client'")) {
    content = "'use client';\n\n" + content;
  }
  return content;
}

// Function to fix motion imports
function fixMotionImports(content) {
  // Replace framer-motion imports with our wrapper
  content = content.replace(
    /import\s*{\s*motion[^}]*}\s*from\s*['"]framer-motion['"];?/g,
    "import { motion } from '@/lib/motion-wrapper';"
  );
  
  content = content.replace(
    /import\s*{\s*AnimatePresence[^}]*}\s*from\s*['"]framer-motion['"];?/g,
    "import { AnimatePresence } from '@/lib/motion-wrapper';"
  );
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file uses motion components
    if (content.includes('motion.') || content.includes('from "framer-motion"')) {
      let newContent = addClientDirective(content);
      newContent = fixMotionImports(newContent);
      
      fs.writeFileSync(filePath, newContent);
      console.log(`Processed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to recursively process directory
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      processDirectory(fullPath);
    } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
      processFile(fullPath);
    }
  }
}

// Process components directory
processDirectory('./components');
console.log('Motion components fixed successfully!');
