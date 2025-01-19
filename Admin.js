const User = require('./User');

class Admin extends User {
  static reportCount = 0; // Static property

  generateReport() {
    Admin.reportCount += 1;
    console.log(`Generating report... Total reports generated: ${Admin.reportCount}`);
  }

  respondToIncident() {
    console.log('Responding to incident now...');
  }
}

module.exports = Admin;
