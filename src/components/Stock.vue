<template>
  <div id="container" style="width:100% height:400px">
  </div>
</template>

<script>
// import Highcharts from 'highcharts'
import $ from "jquery"
import Highcharts from 'highcharts/highstock'
var https = require("https")
// import Intrinio from './intrinio'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}

// authorization of intrinio data
var username = "9abe0f925790d738fa8b5309b848b921"
var password = "5353dd541c69225b311ac17fd6a53bb1"
var auth = "Basic " + new Buffer(username + ':' + password).toString('base64')
var company =""
var dataForChart =[]

var request = https.request({
    method: "GET",
    host: "api.intrinio.com",
    path: "/historical_data?identifier=QCOM&item=close_price&start_date=2017-06-01&end_date=2018-06-01&sort_order=asc&page_size=999",
    headers: {
        "Authorization": auth
    }
}, function(response) {
    var json = ""
    response.on('data', function (chunk) {
        json += chunk
    })
    response.on('end', function() {
        company = JSON.parse(json)
        console.log(company)
        company.data.forEach(function (str) {
            // console.log(str)
            var singleData = []
            singleData.push(Date.parse(str.date))
            singleData.push(str.value)
            dataForChart.push(singleData)
        })
        console.log(dataForChart)
        // Create the chart
        Highcharts.stockChart('container', {

            rangeSelector: {
                selected: 1
            },

            title: {
                text: 'QUALCOMM'
            },

            series: [{
                name: 'QCOM',
                data: dataForChart,
                tooltip: {
                    valueDecimals: 2
                }
            }]
        })
    })
})

request.end()

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0
}
ul {
  list-style-type: none;
  padding: 0
}
li {
  display: inline-block;
  margin: 0 10px
}
a {
  color: #42b983
}
</style>
