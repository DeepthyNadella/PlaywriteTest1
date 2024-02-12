// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {  
    timeout: 5000
  },

  reporter: 'html',
  projects: [
    {
      name: 'chromium',
      use: {

        browserName : 'chromium',
        headless : false,
        screenshot : 'on',
        video: 'retain-on-failure',
        ignoreHttpsErrors:true,
        permissions:['geolocation'],        
        trace : 'on',
        // ...devices['iPhone 11'],  
         }
      },
  ]

});

