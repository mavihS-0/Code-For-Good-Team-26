
//Event handler for IVR to handle user input
exports.handler = function(context, event, callback) {
  console.log(event.To);
  console.log(event.Digits);
  
  //Twilio response object
	let twiml = new Twilio.twiml.VoiceResponse();
  if (event.Digits === "2"){
    twiml.say({ language: 'hi-IN' }, "आसुविधा के लिए खेद है");
  }
  else if(event.Digits === "1"){
    twiml.say({ language: 'hi-IN' }, "धन्यवाद");
  }
  //Return the TwiML
  return callback(null, twiml);
};