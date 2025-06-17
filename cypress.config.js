const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
  baseUrl: 'https://www.saucedemo.com',  // I am usign baseUrl since all tests are run against the same URL
  chromeWebSecurity: false,  //This is required due to sauce demo site having cross-origin iframes
  experimentalWebKitSupport: true, // This is required to run tests on Firefox browser
  specPattern: 'cypress/e2e/*.{js,jsx,ts,tsx}',
  viewportWidth: 1280,   // The viewport configurations are set to match the default size of the Sauce Labs browser
  viewportHeight: 900,   //Otherwise you can not fullfill the requirements for Add the top-right product to the cart. 
}

})