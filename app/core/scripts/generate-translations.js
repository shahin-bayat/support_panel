/* eslint-disable */
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');

const log = console.log;
const sourcePath = path.join('app', 'translations', 'locales', 'fa');
const targetPath = path.join('app', 'translations', 'fa.json');

function generateTranslations() {
  let namespaces = [];
  fs.readdir(sourcePath, function (error, files) {
    log(chalk.yellow('reading translation files...'));
    if (error) {
      return log(chalk.red('Unable to read files'));
    }
    files.forEach((file) => {
      namespaces.push(file.split('.')[0]);
    });
    readFilesAndOutputTranslations(namespaces);
  });
}

function readFilesAndOutputTranslations(namespaces) {
  const translations = {};
  namespaces.forEach((namespace) => {
    fs.readFile(path.join(sourcePath, `${namespace}.json`), 'utf8', function (error, data) {
      if (error) {
        return log(chalk.red('Unable to read translation file'));
      }
      const transObj = JSON.parse(data);
      for (const [key, value] of Object.entries(transObj)) {
        translations[`${namespace}.${key}`] = value;
      }
      fs.writeFile(targetPath, JSON.stringify(translations), function (error) {
        if (error) {
          return log(chalk.red('Unable to write translation file'));
        }
      });
    });
  });
  log(chalk.green('Translation file generated successfully.'));
}

generateTranslations();
