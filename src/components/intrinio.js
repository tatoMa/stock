//
// var https = require("https");
//
// var username = "9abe0f925790d738fa8b5309b848b921";
// var password = "5353dd541c69225b311ac17fd6a53bb1";
// var auth = "Basic " + new Buffer(username + ':' + password).toString('base64');
// var company =""
//
// var request = https.request({
//     method: "GET",
//     host: "api.intrinio.com",
//     path: "/companies?ticker=QCOM",
//     headers: {
//         "Authorization": auth
//     }
// }, function(response) {
//     var json = "";
//     response.on('data', function (chunk) {
//         json += chunk;
//     });
//     response.on('end', function() {
//         company = JSON.parse(json);
//         console.log(company);
//     });
// });
//
// request.end();
//
// export {company}
