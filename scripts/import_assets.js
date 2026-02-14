const fs = require('fs');
const path = require('path');

const sourceDir = '/Users/admin/Downloads/Aura chip animation /Aura.chip';
const targetDir = path.join(__dirname, '../assets/sequence');

// Ensure target directory exists
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

// Clear existing frames
console.log('Clearing existing frames...');
const existingFiles = fs.readdirSync(targetDir);
for (const file of existingFiles) {
    if (file.endsWith('.jpg')) {
        fs.unlinkSync(path.join(targetDir, file));
    }
}

// Read source files
console.log(`Reading source frames from ${sourceDir}...`);
const sourceFiles = fs.readdirSync(sourceDir).filter(f => f.startsWith('ezgif-frame-') && f.endsWith('.jpg'));

console.log(`Found ${sourceFiles.length} frames.`);

// Sort files to ensure correct order (though they should be, string sort works for fixed length padding)
sourceFiles.sort();

let count = 0;
for (const file of sourceFiles) {
    // Extract number: ezgif-frame-001.jpg -> 001
    const match = file.match(/ezgif-frame-(\d+)\.jpg/);
    if (match) {
        const num = match[1]; // Keeps the padding (e.g. "001")
        const targetFilename = `frame_${num}.jpg`;

        fs.copyFileSync(path.join(sourceDir, file), path.join(targetDir, targetFilename));
        count++;
    }
}

console.log(`Successfully imported ${count} frames.`);
