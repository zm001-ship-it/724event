# 724event
    se positionner sur le repertoire du projet '724event' => ouvrir un nouveau terminal
    cd 724event
# Pour initier le projet de test :
    npm init -y
# install Cypress : 
    npm install cypress --save-dev
# lancer Cypress : 
    npx cypress open
    une interface s'ouvre, apres le choix du navigateur on choisi le fichier de test cypress

# Générer un rapport de test avec plagin cypress-mochawesome-reporter 

> 1. install cypress-mochawesome-reporter
    <pre> bash # npm i --save-dev cypress-mochawesome-reporter ``` ```</pre>
 2. Change cypress reporter & setup hooks
    Edit config file (cypress.config.js by default)

   `const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});`

3. Add to cypress/support/e2e.js
    `import 'cypress-mochawesome-reporter/register';`

4. run cypress
   













