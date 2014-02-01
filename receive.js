var amqp = require('amqp');
var push = require('./push_apn').push;

var connection = amqp.createConnection({host: 'localhost'}, {reconnect: true});

connection.on('ready', function(){
    connection.queue('notification_ios_queue', {durable: true, autoDelete: false}, function(queue){

        console.log(' [*] Waiting for messages. To exit press CTRL+C')

        queue.subscribe({ack:true, prefetchCount:10 }, function(msg){
            var data = JSON.parse(msg.data);
            push(data);
            //ack
            queue.shift();
            console.log(" [x] Received %s", msg.data.toString('utf-8'));
        });
    });
});
