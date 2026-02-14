const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '../assets/sequence');
const frameCount = 100;

// Ensure source directory exists
if (!fs.existsSync(sourceDir)) {
    console.error(`Source directory not found: ${sourceDir}`);
    process.exit(1);
}

// Get existing frames (assuming frame_001.jpg to frame_005.jpg exist)
const existingFrames = fs.readdirSync(sourceDir).filter(f => f.startsWith('frame_') && f.endsWith('.jpg'));

if (existingFrames.length === 0) {
    console.error('No existing frames found to duplicate.');
    process.exit(1);
}

console.log(`Found ${existingFrames.length} existing frames. Generating up to ${frameCount}...`);

for (let i = 1; i <= frameCount; i++) {
    const targetNum = String(i).padStart(3, '0');
    const targetFile = `frame_${targetNum}.jpg`;
    const targetPath = path.join(sourceDir, targetFile);

    if (!fs.existsSync(targetPath)) {
        // Pick a random source frame to copy from
        const sourceFrame = existingFrames[Math.floor(Math.random() * existingFrames.length)];
        const sourcePath = path.join(sourceDir, sourceFrame);
        
        fs.copyFileSync(sourcePath, targetPath);
        console.log(`Created ${targetFile} from ${sourceFrame}`);
    }
}

console.log('Placeholder generation complete.');
