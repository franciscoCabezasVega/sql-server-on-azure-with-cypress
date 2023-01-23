const { defineConfig } = require("cypress");
const sqlServer = require('cypress-sql-server');
const dbConfig = require('./cypress.env.json');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      tasks = sqlServer.loadDBPlugin(dbConfig.db);
      on('task', tasks);
    },
  },
});
