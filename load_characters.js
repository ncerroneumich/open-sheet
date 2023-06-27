const fs = require('fs')
const path = require('path');
const Ajv = require("ajv")
const addFormats = require("ajv-formats")

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

            // Validate characters
            const schemasFolder = "./schemas";
            const schemas = [];

            fs.readdirSync(schemasFolder).forEach((file) => {
                const schemaPath = path.join(schemasFolder, file);
                const schema = fs.readFileSync(schemaPath, "utf-8");
                schemas.push(JSON.parse(schema));
            });

            // Set up a new ajv instance  
            const ajv = new Ajv({
                schemas: schemas,
                allowUnionTypes: true,
                strict: false
            });
            // addFormats(ajv, ["uri"]);

            const validate = ajv.getSchema("Character.schema.json");
            
            characters.forEach((c) => {
                const valid = validate(c);
                if (valid) {
                    console.log(`${c.name} is valid!`);
                } else {
                    console.log("Invalid character:");
                    reject(validate.errors);
                }
            });

            resolve(characters);
        });
    })
}

module.exports = load_characters;