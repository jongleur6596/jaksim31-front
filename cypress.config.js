const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "f7otw9",
  e2e: {
    experimentalStudio: true,
    baseUrl : "http://localhost:3000"
  },
  viewportHeight: 900,
  viewportWidth: 1440,
});
