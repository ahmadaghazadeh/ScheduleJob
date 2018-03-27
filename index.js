var schedule = require('node-schedule');

var msg="Hello world";
console.log(msg);

var j = schedule.scheduleJob('2 * * * * *',  function(fireDate){
    console.log('This job was supposed to run at ' + fireDate + ', but actually ran at ' + new Date());
});