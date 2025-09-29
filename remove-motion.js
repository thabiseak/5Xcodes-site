const fs = require('fs');
const path = require('path');

// Function to remove all Framer Motion usage
function removeMotionComponents(content) {
  // Remove motion imports
  content = content.replace(/import\s*{\s*motion[^}]*}\s*from\s*['"]framer-motion['"];?\s*/g, '');
  content = content.replace(/import\s*{\s*AnimatePresence[^}]*}\s*from\s*['"]framer-motion['"];?\s*/g, '');
  content = content.replace(/import\s*{\s*motion[^}]*}\s*from\s*['"]@\/lib\/motion-wrapper['"];?\s*/g, '');
  content = content.replace(/import\s*{\s*AnimatePresence[^}]*}\s*from\s*['"]@\/lib\/motion-wrapper['"];?\s*/g, '');
  
  // Replace motion components with regular HTML elements
  content = content.replace(/motion\.div/g, 'div');
  content = content.replace(/motion\.section/g, 'section');
  content = content.replace(/motion\.h1/g, 'h1');
  content = content.replace(/motion\.h2/g, 'h2');
  content = content.replace(/motion\.h3/g, 'h3');
  content = content.replace(/motion\.p/g, 'p');
  content = content.replace(/motion\.span/g, 'span');
  content = content.replace(/motion\.button/g, 'button');
  content = content.replace(/motion\.ul/g, 'ul');
  content = content.replace(/motion\.li/g, 'li');
  content = content.replace(/motion\.a/g, 'a');
  content = content.replace(/motion\.img/g, 'img');
  content = content.replace(/motion\.nav/g, 'nav');
  content = content.replace(/motion\.header/g, 'header');
  content = content.replace(/motion\.footer/g, 'footer');
  content = content.replace(/motion\.main/g, 'main');
  content = content.replace(/motion\.article/g, 'article');
  content = content.replace(/motion\.aside/g, 'aside');
  
  // Remove motion props
  content = content.replace(/\s*initial=\{[^}]*\}/g, '');
  content = content.replace(/\s*animate=\{[^}]*\}/g, '');
  content = content.replace(/\s*transition=\{[^}]*\}/g, '');
  content = content.replace(/\s*whileHover=\{[^}]*\}/g, '');
  content = content.replace(/\s*whileTap=\{[^}]*\}/g, '');
  content = content.replace(/\s*exit=\{[^}]*\}/g, '');
  content = content.replace(/\s*variants=\{[^}]*\}/g, '');
  content = content.replace(/\s*layoutId=\{[^}]*\}/g, '');
  content = content.replace(/\s*viewport=\{[^}]*\}/g, '');
  
  // Replace AnimatePresence with regular div
  content = content.replace(/<AnimatePresence[^>]*>/g, '<div>');
  content = content.replace(/<\/AnimatePresence>/g, '</div>');
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file uses motion components
    if (content.includes('motion.') || content.includes('AnimatePresence') || content.includes('framer-motion')) {
      const newContent = removeMotionComponents(content);
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
console.log('Motion components removed successfully!');
