"use strict";

const fs = require("fs");
const path = require("path");

// UTILS
/**
 * @param {string} camel
 * @returns string
 */
const caseChange = (camel) =>
  camel[0].toLowerCase() +
  camel.substring(1).replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());

// Generate the scripts part of the package.json file based on the folders in the root directory

// Get the package.json file
const packageJson = require("./package.json");

const rootDir = __dirname;

console.log("Generating scripts in package.json file...");

// Get all the folders with the name that matches the regex \d+(\.\d+)*_.*
const regex = /^\d+(\.\d+)*_(.*)/;
const folders = fs
  .readdirSync(rootDir)
  .filter((file) => fs.statSync(path.join(rootDir, file)).isDirectory())
  .filter((file) => regex.test(file));

// Get the scripts part of the package.json file
const scripts = packageJson.scripts ?? {};

// Add the scripts to the package.json file
folders.forEach((folder) => {
  // Check if the folder already has a script.js file
  const scriptPath = path.join(rootDir, folder, "script.js");
  if (fs.existsSync(scriptPath)) {
    // Script.js exists, so directly add the script to the package.json file

    // Script name is the of second capture group of the regex
    const scriptName = caseChange(regex.exec(folder)[2]);
    scripts[scriptName] = `node ${folder}/script.js`;
    console.log(`Added script: ${scriptName}`);
  } else {
    // Script.js does not exist, so add a script for every .js file in the folder

    // Get all the .js files in the folder
    const files = fs
      .readdirSync(path.join(rootDir, folder))
      .filter((file) => file.endsWith(".js"));

    // Add a script for every .js file
    files.forEach((file) => {
      // Script name is the file name without the extension
      const scriptName = caseChange(path.parse(file).name);
      scripts[scriptName] = `node ${folder}/${file}`;
      console.log(`Added script: ${scriptName}`);
    });
  }
});

// Add the scripts to the package.json file
packageJson.scripts = scripts;

// Write the package.json file
fs.writeFileSync(
  path.join(rootDir, "package.json"),
  JSON.stringify(packageJson, null, 2)
);
