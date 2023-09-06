const { defineConfig } = require("cypress");
// const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
// const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

// async function setupNodeEvents(on, config) {
//   // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
//   await preprocessor.addCucumberPreprocessorPlugin(on, config);

//   on("file:preprocessor", browserify.default(config));

//   // Make sure to return the config object as it might have been modified by the plugin.
//   return config;

// }

//Adding this configuration for cypress dashboard 


module.exports = defineConfig({
  
  projectId: "eb6vmj",

  e2e: {
    setupNodeEvents(on, config) {
      // // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      // await preprocessor.addCucumberPreprocessorPlugin(on, config);
    
      // on("file:preprocessor", browserify.default(config));

      // config.db = {
      //   userName: "root",
      //   password: "Udit@@12",
      //   server: "Mysql@localhost:3306",
      //   options: {
      //       database: "mydb",
      //       encrypt: true,
      //       rowCollectionOnRequestCompletion : true
      //   }
      // }

      // tasks = sqlServer.loadDBPlugin(config.db);
      // on('task', tasks);
    },
    specPattern: 'cypress/integration/TDC_Test/*.js'
  },

});
