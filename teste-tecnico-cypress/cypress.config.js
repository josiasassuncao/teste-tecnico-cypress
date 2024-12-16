const { defineConfig } = require("cypress");

// Determinar tipo de teste antes de exportar
const envType = process.env.CYPRESS_TYPE || 'e2e'; // Padrão para 'e2e'

// Definir baseUrl e specPattern com base no tipo
const baseUrl = envType === 'api'
  ? 'https://serverest.dev/'
  : 'https://front.serverest.dev/';

const specPattern = envType === 'api'
  ? 'cypress/tests/api/**/*.cy.js'
  : 'cypress/tests/e2e/**/*.cy.js';

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    specPattern: specPattern, 
    baseUrl: baseUrl,         

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    apiUrl: 'https://serverest.dev/'
  }
});
