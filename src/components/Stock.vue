<template>
    <v-app>
        <v-toolbar dark color="primary">
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title class="white--text">Stock Analysis</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>apps</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>refresh</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>more_vert</v-icon>
            </v-btn>
        </v-toolbar>
        <v-layout>
            <v-flex xs12 sm10 offset-sm1>
                <v-card>
                    <v-card-media id="container" style="width:100%; height:400px">
                    </v-card-media>
                    <v-card-title primary-title>
                        <v-flex>
                            <v-layout row wrap>
                                <v-flex xs12 sm4>
                                    <v-subheader v-text="'Select Identifier'"></v-subheader>
                                </v-flex>
                                <v-flex xs12 sm8>
                                    <v-select
                                            :items="identifiers"
                                            v-model="identifierSelected"
                                            label="Select"
                                            autocomplete
                                    ></v-select>
                                </v-flex>
                            </v-layout>
                            <div>
                                <h2 class="text-xs-center">find the maximum profit</h2>
                            </div>
                        </v-flex>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn flat color="orange">Share</v-btn>
                        <v-btn flat color="orange">Explore</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
        {{identifierSelected}}
    </v-app>
</template>

<script>
import Highcharts from 'highcharts/highstock'
var https = require("https")

export default {
    name: 'StockChart',
    // components: {
    // },
    data () {
        return {
            username : "9abe0f925790d738fa8b5309b848b921",
            password : "5353dd541c69225b311ac17fd6a53bb1",
            identifierSelected: 'QCOM',
            identifiers: ['QCOM','AAPL']
        }
    },
    methods: {
        // searchAppointment (text) {
        //     this.searchText = text
        // }
    },
    mounted () {
        // authorization of intrinio data
        var self = this
        var auth = "Basic " + new Buffer(this.username + ':' + this.password).toString('base64')

        var company =""
        var dataForChart =[]

        var request = https.request({
            method: "GET",
            host: "api.intrinio.com",
            path: `/historical_data?identifier=${self.identifierSelected}&item=close_price&start_date=2017-06-01&end_date=2018-06-01&sort_order=asc&page_size=999`,
            headers: {
                "Authorization": auth
            }
        }, (response) => {
            var json = ""
            response.on('data', function (chunk) {
                json += chunk
            })
            response.on('end', function() {
                company = JSON.parse(json)
                // console.log(company)

                // format data from history intrinio.com to the format using in HighCharts
                company.data.forEach(function (str) {
                    var singleData = []
                    singleData.push(Date.parse(str.date))
                    singleData.push(str.value)
                    dataForChart.push(singleData)
                })

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
    },
}


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
