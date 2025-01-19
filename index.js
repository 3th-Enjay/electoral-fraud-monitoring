const User = require('./User');
const Admin = require('./Admin');
const DataAnalysis = require('./DataAnalysis');
const BiometricVerification = require('./BiometricVerification');
const ReportSystem = require('./ReportSystem');

// Create instances and test the system
const user = new User (1, 'Nelson', "labour party")
user.authenticate();
user.viewDashboard()


const admin = new Admin(1, 'Enjay', 'Administrator');
admin.authenticate();
admin.viewDashboard();
admin.generateReport();

const voterData = new DataAnalysis(5000, 3000);
voterData.analyzeVotePatterns();
voterData.detectFraudPatterns();

const biometric = new BiometricVerification();
biometric.verifyIdentity({ fingerprint: 'sampleData' }, { face: 'sampleData' });

const reportSystem = new ReportSystem();
reportSystem.generateIncidentReport('Suspicious activity detected in polling unit 5.');
reportSystem.sendAlerts('Anomaly detected in voter turnout.');
