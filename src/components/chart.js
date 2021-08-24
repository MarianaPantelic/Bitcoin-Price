import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const axios = require("axios").default;

const LineChart = (props) => {
  const [results, setResults] = useState({});

  useEffect(() => {
    getPrices();
  }, [props.inputValues]);

  const getPrices = async function () {
    try {
      await axios
        .get(
          `http://localhost:3001/prices?value1=${props.inputValues.value1}&value2=${props.inputValues.value2}`
        )
        .then((response) => {
          setResults(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  };
  let dateResults = [];
  let priceResults = [];
  if (results) {
    for (let i = 0; i < Object.keys(results).length; i++) {
      dateResults.push(Object.keys(results)[i]);
      priceResults.push(Object.values(results)[i]);
    }
  }

  const data = {
    labels: dateResults,
    datasets: [
      {
        label: "# Prices",
        data: priceResults,
        fill: false,
        backgroundColor: "darkblue",
        borderColor: "blue",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
