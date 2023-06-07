const fs = require('fs')
const path = require('path');

const folder_path = '/home/ncerrone/code/open-sheet-data/example_characters/'

function load_characters() {
    return new Promise((resolve, reject) => {
        fs.readdir(folder_path, (err, files) => {
            if (err) {
                reject(err);
            }
    
            const characters = []
        
            files.forEach((file) => {
                const file_path = path.join(folder_path, file);
                const content = fs.readFileSync(file_path, 'utf-8');
                characters.push(JSON.parse(content))
            });
    
            resolve(characters);
        });
    })
}

module.exports = load_characters;