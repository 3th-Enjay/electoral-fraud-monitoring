const User = require('./User');
const Admin = require('./Admin');
const DataAnalysis = require('./DataAnalysis');
const BiometricVerification = require('./BiometricVerification');
const ReportSystem = require('./ReportSystem');

const user1 = new User(1, 'Enjay', 'Voter');
const admin = new Admin(2, 'Nelson', 'Administrator');

user1.authenticate();
admin.viewDashboard();

Admin.getUserCount();
admin.generateReport();

const biometric = new BiometricVerification();
biometric.verifyIdentity({ fingerprint: 'sample' }, { face: 'sample' });

BiometricVerification.preventDuplicateVote();

DataAnalysis.detectFraudPatterns();

ReportSystem.sendAlerts('Suspicious activity detected.');
