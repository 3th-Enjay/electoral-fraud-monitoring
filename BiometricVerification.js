class BiometricVerification {
    static verificationAttempts = 0; // Static property
  
    verifyIdentity(fingerprintData, facialData) {
      BiometricVerification.verificationAttempts += 1;
      console.log('Verifying biometric identity...');
      return true;
    }
  
    static preventDuplicateVote() {
      console.log('Duplicate vote prevention triggered.');
    }
  }
  
  module.exports = BiometricVerification;
  