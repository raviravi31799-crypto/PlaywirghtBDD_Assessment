const report = require("multiple-cucumber-html-reporter");
report.generate({
  jsonDir: "reports",
  reportPath: "reports/html",
  reportName: "Playwright BDD Report",
  pageTitle: "webshop",
  displayDuration: false,
  metadata: {
    browser: {
      name: "chrome",
      version: "118",
    },
device: "Jothika- Machine",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
  customData: {
    title: "Test info",
    data: [
      { label: "Project", value: "Demo webshop Project" },
          ],    },  });

