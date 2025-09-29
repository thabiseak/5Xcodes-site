const fs = require('fs');
const path = require('path');

// Function to replace motion components with regular HTML elements
function replaceMotionComponents(content) {
  // Replace motion.div with div
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
  
  // Remove framer-motion imports
  content = content.replace(/import\s*{\s*motion[^}]*}\s*from\s*['"]framer-motion['"];?\s*/g, '');
  content = content.replace(/import\s*{\s*AnimatePresence[^}]*}\s*from\s*['"]framer-motion['"];?\s*/g, '');
  
  // Remove motion props
  content = content.replace(/\s*initial=\{[^}]*\}/g, '');
  content = content.replace(/\s*animate=\{[^}]*\}/g, '');
  content = content.replace(/\s*transition=\{[^}]*\}/g, '');
  content = content.replace(/\s*whileHover=\{[^}]*\}/g, '');
  content = content.replace(/\s*whileTap=\{[^}]*\}/g, '');
  content = content.replace(/\s*exit=\{[^}]*\}/g, '');
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const newContent = replaceMotionComponents(content);
    fs.writeFileSync(filePath, newContent);
    console.log(`Processed: ${filePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to recursively find all .tsx and .ts files
function findComponentFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Process all component files
const componentFiles = findComponentFiles('./components');
componentFiles.forEach(processFile);

console.log('Framer Motion components replaced successfully!');
