const User = require('./User');

class Admin extends User {
  generateReport() {
    console.log('Generating report...');
  }

  respondToIncident() {
    console.log('Responding to incident...');
  }
}

module.exports = Admin;
