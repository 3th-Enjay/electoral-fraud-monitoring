class DataAnalysis {
    static fraudDetectionCount = 0; // Static property
  
    constructor(voteData, historicalData) {
      this.voteData = voteData;
      this.historicalData = historicalData;
    }
  
    analyzeVotePatterns() {
      console.log('Analyzing vote patterns...');
    }
  
    static detectFraudPatterns() {
      DataAnalysis.fraudDetectionCount += 1;
      console.log(`Fraud patterns detected. Count: ${DataAnalysis.fraudDetectionCount}`);
    }
  }
  
  module.exports = DataAnalysis;
  