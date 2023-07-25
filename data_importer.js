const fs = require('fs');


function data_importer() {
    // Classes
    const classes_path = './data/class';
    files = fs.readdirSync(classes_path);
    const classes = [];
    files.forEach(file => {
        const file_path = classes_path + "/" + file;
        const content = fs.readFileSync(file_path);
        classes.push(JSON.parse(content.toString('utf-8')));
    });
    return classes;
}

module.exports = data_importer;