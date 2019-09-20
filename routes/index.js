var express = require('express');
var router = express.Router();
var Pusher = require('pusher');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Join command
router.post('/join' , function(req, res){

  // Get the Pusher credentials
  let appID = req.body.appid;
  let appKey = req.body.appkey;
  let appSecret = req.body.appsecret;
  let appChannel = req.body.appchn;
  let nickName = req.body.nickname;

  // Init the pusher library
  var channels_client = new Pusher({
    appId: appID ,
    key:appKey,
    secret:  appSecret,
    cluster: 'ap1',
    encrypted: true
  });

  channels_client.trigger(appChannel, 'joinevent', {
    "message": "* " + nickName + " has joined the channel " + appChannel
  });

  res.send('ok');
});



// Leave command
router.post('/leave' , function(req, res){

  // Get the Pusher credentials
  let appID = req.body.appid;
  let appKey = req.body.appkey;
  let appSecret = req.body.appsecret;
  let appChannel = req.body.appchn;
  let nickName = req.body.nickname;

  // Init the pusher library
  var channels_client = new Pusher({
    appId: appID ,
    key:appKey,
    secret:  appSecret,
    cluster: 'ap1',
    encrypted: true
  });

  channels_client.trigger(appChannel, 'leaveevent', {
    "message": "* " + nickName + " has left the channel " + appChannel
  });

  res.send('ok');
});


// List command
router.post('/list' , function(req, res){

  // Get the Pusher credentials
  let appID = req.body.appid;
  let appKey = req.body.appkey;
  let appSecret = req.body.appsecret;
  let appChannel = req.body.appchn;
  let nickName = req.body.nickname;

  // Init the pusher library
  var channels_client = new Pusher({
    appId: appID ,
    key:appKey,
    secret:  appSecret,
    cluster: 'ap1',
    encrypted: true
  });

  channels_client.trigger(appChannel, 'list', {
    "message": "Client perform list"
  });

  res.send('ok');
});



// Chat message command
router.post('/chat' , function(req, res){

  // Get the Pusher credentials
  let appID = req.body.appid;
  let appKey = req.body.appkey;
  let appSecret = req.body.appsecret;
  let appChannel = req.body.appchn;
  let nickName = req.body.nickname;
  let chatmessage = req.body.chatmessage;

  // Init the pusher library
  var channels_client = new Pusher({
    appId: appID ,
    key:appKey,
    secret:  appSecret,
    cluster: 'ap1',
    encrypted: true
  });

  channels_client.trigger(appChannel, 'chat', {
    "message": nickName + " said: " + chatmessage
  });

  res.send('ok');
});



// DM command
router.post('/msg' , function(req, res){

  // Get the Pusher credentials
  let appID = req.body.appid;
  let appKey = req.body.appkey;
  let appSecret = req.body.appsecret;
  let appChannel = req.body.appchn;
  let nickName = req.body.nickname;
  let destNickName = req.body.recipient;
  let chatmessage = req.body.chatmessage;

  // Init the pusher library
  var channels_client = new Pusher({
    appId: appID ,
    key:appKey,
    secret:  appSecret,
    cluster: 'ap1',
    encrypted: true
  });

  channels_client.trigger(appChannel, 'chat', {
    "message": nickName + " said to you: " + chatmessage
  });

  res.send('ok');
});




module.exports = router;
