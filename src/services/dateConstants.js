function getCurrentDate() {
    const currentDate = new Date().toISOString().split('T')[0];
    return currentDate;
  }
  
  function getDateTwoDaysAgo() {
    const today = new Date();
    const twoDaysAgo = new Date(today);
    twoDaysAgo.setDate(today.getDate() - 2);
  
    const year = twoDaysAgo.getFullYear();
    const month = String(twoDaysAgo.getMonth() + 1).padStart(2, '0');
    const day = String(twoDaysAgo.getDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  }
  
  module.exports = {
    getCurrentDate,
    getDateTwoDaysAgo
  };
  