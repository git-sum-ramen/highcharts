// document.addEventListener('DOMContentLoaded', function () {
  const chart = Highcharts.chart('container', {
      chart: {
          type: 'bar'
      },
      title: {
          text: 'My Favorite Pies'
      },
      xAxis: {
          categories: ['Apple', 'Lemon', 'Pumpkin']
      },
      yAxis: {
          title: {
              text: 'Fruit eaten'
          }
      },            
      // zAxis: {
      //     title: {
      //         text: 'the z axis'
      //     }
      // },
      series: [{
          name: 'Jane',
          data: [3, 0, 4]
      }, {
          name: 'James',
          data: [5, 7, 3]
      },{
          name: 'Nancy',
          data: [4, 5, 2]
      }]
  });
// });      