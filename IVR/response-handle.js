
// This function is the webhook for the Twilio Function
exports.handler = function(context, event, callback) {
  //check if the call is incoming or outgoing
  if (event.Direction === "inbound") {
    console.log(event.From);
  }
  else{
    console.log(event.To);
  }
  //get the digits pressed by the user
  console.log(event.Digits);

  //generate the response
  let twiml = new Twilio.twiml.VoiceResponse();
  if (event.Digits === "2"){
    twiml.say({ language: 'hi-IN' }, "आसुविधा के लिए खेद है");
  }
  else if(event.Digits === "1"){
    twiml.say({ language: 'hi-IN' }, "धन्यवाद");
  }

  //return the response
  return callback(null, twiml);
};