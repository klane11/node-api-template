const fs = require('fs');
const files = fs.readdirSync(__dirname);

files.forEach(function(file) {
  if (!file.includes('index.js')) {
    var moduleName = file.split('.')[0];
    moduleName = moduleName.charAt(0).toUpperCase() + moduleName.slice(1);
    module.exports[moduleName] = require('./' + file);
  }
});
