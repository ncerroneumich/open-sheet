const fs = require('fs');


function importer() {
    // Classes
    const classes_path = './data/class';
    files = fs.readdirSync(classes_path)
    files.forEach(file => {
        const file_path = classes_path + "/" + file
        const content = fs.readFileSync(file_path);
        console.log(content.toString('utf-8'));
    });
}

importer();