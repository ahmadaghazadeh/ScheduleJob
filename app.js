var express = require('express');
var schedule = require('node-schedule');
const https = require("http");

console.log("Start");

var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
  console.log('Fire');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


const url =
"http://tele.maxdroid.ir";

function callTest(){
  https.get(url, res => {
    console.log('Call URL');
  });
}
callTest();

var j = schedule.scheduleJob('2 * * * * *',  function(fireDate){
    console.log('This job was supposed to run at ' + fireDate + ', but actually ran at ' + new Date());
    callTest();
});