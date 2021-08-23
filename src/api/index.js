const getPrices = (value1, value2) => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.coindesk.com/v1/bpi/historical/close.json?start=${value1}&end=${value2}`,
      {
        crossdomain: true,
      }
    ).then((response) => response.json().then((response) => resolve(response)));
  });
};
export default getPrices;
