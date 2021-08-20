import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = (props) => {
  console.log(props.results);

  let dateResults = [];
  let priceResults = [];
  if (props.results) {
    for (let i = 0; i < Object.keys(props.results).length; i++) {
      dateResults.push(props.results[Object.keys(props.results)[i][0]]);
      priceResults.push(props.results[Object.keys(props.results)[i][1]]);
    }
  }
  console.log(dateResults, priceResults);
  const data = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
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
      <div className="header">
        <h1 className="title">Line Chart</h1>
        <div className="links"></div>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
