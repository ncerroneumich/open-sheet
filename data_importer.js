const fs = require('fs');


function data_importer() {
    const data_path = "./data/";
    // Classes
    // const classes_path = data_path + "class";
    // const classes_files = fs.readdirSync(classes_path);
    // const classes = [];
    // classes_files.forEach(cls => {
    //     const file_path = classes_path + "/" + cls;
    //     const content = fs.readFileSync(file_path);
    //     classes.push(JSON.parse(content.toString('utf-8')));
    // });
    // Races
    const races = [];
    const races_buffer = fs.readFileSync(data_path + "races.json");
    const races_content = JSON.parse(races_buffer.toString('utf-8'));
    races_content["races"].forEach(race => {
        races.push(race);
    });
    // Backgrounds 
    const backgrounds = [];
    const backgrounds_buffer = fs.readFileSync(data_path + "backgrounds.json");
    const backgrounds_content = JSON.parse(backgrounds_buffer.toString('utf-8'));
    backgrounds_content["backgrounds"].forEach(bg => {
        backgrounds.push(bg);
    });
    return {
        "classes": [],
        "races": races,
        "backgrounds": backgrounds
    };
}

module.exports = data_importer;