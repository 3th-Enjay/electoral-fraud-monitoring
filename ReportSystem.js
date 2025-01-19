class ReportSystem {
    static alertCount = 0; // Static property
  
    constructor() {
      this.alertsLog = [];
      this.incidentReports = [];
    }
  
    generateIncidentReport(report) {
      this.incidentReports.push(report);
      console.log('Incident report generated:', report);
    }
  
    static sendAlerts(message) {
      ReportSystem.alertCount += 1;
      console.log(`Alert sent: ${message}. Total alerts: ${ReportSystem.alertCount}`);
    }
  }
  
  module.exports = ReportSystem;
  