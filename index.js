var schedule = require('node-schedule');
var request = require('request');

console.log("Start");

var j = schedule.scheduleJob('2 * * * * *',  function(fireDate){
    console.log('This job was supposed to run at ' + fireDate + ', but actually ran at ' + new Date());
    request('http://tele.maxdroid.ir/', function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    });
});