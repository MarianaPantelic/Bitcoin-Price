import axios from "axios";

const getBitcoinPrices = (value1, value2) => {
  let results = [];
  axios
    .get(
      `https://api.coindesk.com/v1/bpi/historical/close.json?start=${value1}&end=${value2}`
    )
    .then((response) => results.push(response));
  console.log(results);
  return results;
};

export default getBitcoinPrices;
