var apn = require('apn');
var apnconn = new apn.connection({ gateway:'gateway.sandbox.push.apple.com' });
exports.apnconn = apnconn;
//console.log(apnconn);

apnconn.on('connected', function() {
    console.log("Connected");
});

apnconn.on('transmitted', function(notification, device) {
    console.log("Notification transmitted to:" + device.token.toString('hex'));
});

apnconn.on('transmissionError', function(errCode, notification, device) {
    console.error("Notification caused error: " + errCode + " for device ", device, notification);
});

apnconn.on('timeout', function () {
    console.log("Connection Timeout");
});

apnconn.on('disconnected', function() {
    console.log("Disconnected from APNS");
});

apnconn.on('socketError', console.error);


//message = {'udid':'my device token','content':'pushtest', 'count':1, 'data':{}}
function push(message) {
    var note = new apn.notification();
    var device = new apn.Device(message.udid);
    note.setAlertText(message.content);
    note.badge = message.count;
    note.payload = message.data;
    note.sound = 'ping.aiff';

    apnconn.pushNotification(note, device);
    //console.log(note);
    //console.log(message.udid);
}
exports.push = push;
