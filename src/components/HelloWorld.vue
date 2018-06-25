<template>
  <div id="container" style="width:100%; height:400px;">
    <h1>hello</h1>
  </div>
</template>

<script>
import Highcharts from 'highcharts'
import $ from "jquery"

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
$(function () {
    let myChart = Highcharts.chart('container', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }]
    });
});
// Highcharts.chart('container', { /*Highcharts options*/ });

// $.getJSON('https://www.highcharts.com/samples/data/aapl-c.json', function (data) {
//     // Create the chart
//     Highcharts.stockChart('container', {
//
//
//         rangeSelector: {
//             selected: 1
//         },
//
//         title: {
//             text: 'AAPL Stock Price'
//         },
//
//         series: [{
//             name: 'AAPL',
//             data: data,
//             tooltip: {
//                 valueDecimals: 2
//             }
//         }]
//     });
// });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
