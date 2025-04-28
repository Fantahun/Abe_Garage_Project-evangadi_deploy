const fs = require('fs');
const path = require('path');

const projectDir = './';
const envUsageFiles = [];

function searchFiles(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            searchFiles(fullPath);
        } else if (stat.isFile() && (file.endsWith('.js') || file.endsWith('.ts'))) {
            const content = fs.readFileSync(fullPath, 'utf-8');
            if (content.includes('process.env')) {
                envUsageFiles.push(fullPath);
            }
        }
    });
}

searchFiles(projectDir);

fs.writeFileSync(path.join(projectDir, '.env_usage_files.txt'), envUsageFiles.join('\n'), 'utf-8');
console.log('Files using .env variables have been listed in .env_usage_files.txt');