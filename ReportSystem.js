class ReportSystem {
    constructor() {
      this.alertsLog = [];
      this.incidentReports = [];
    }
  
    generateIncidentReport(report) {
      this.incidentReports.push(report);
      console.log('Incident report generated:', report);
    }
  
    sendAlerts(message) {
      this.alertsLog.push(message);
      console.log('Alert sent:', message);
    }
  }
  
  module.exports = ReportSystem;
  