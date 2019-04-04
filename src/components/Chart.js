import React from 'react';
import { Bar } from 'react-chartjs-2';

const options = {
  maintainAspectRatio: false,
  scales: {
    yAxes: [
      {
        ticks: {
          min: 0,
          max: 5,
          maxTicksLimit: 1,
          fontSize: 18,
          maxRotation: 0.00001,
          padding: 10,
          labelOffset: 10,
        },
        beginAtZero: true,
        gridLines: {
          drawTicks: false,
        },
      },
    ],
  },
};

export default ({ votes }) => {
  const chartData = {
    labels: ['0', '1 / 2', '3', '5', '8', '13'],
    datasets: [
      {
        label: 'Votes on story',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [],
      },
    ],
  };
  // arrange the data accordning to the labels
  const votesArr = votes.map(vote => vote.value);
  const voteData = { '0': 0, '0.5': 0, '3': 0, '5': 0, '8': 0, '13': 0 };
  votesArr.reduce((prev, cur) => {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
  }, voteData);

  const ordered = Object.values(voteData);

  // some magic to get 1/2 at correct index
  ordered.splice(1, 0, ordered.pop());

  chartData.datasets[0].data = ordered;

  return (
    <div>
      <Bar data={chartData} width={450} height={320} options={options} />
    </div>
  );
};
