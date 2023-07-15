
// This Function answers the call, and then uses the <Gather> verb to collect user input.
exports.handler = function(context, event, callback) {
	let twiml = new Twilio.twiml.VoiceResponse();
  twiml.say({ language: 'hi-IN' }, "नमस्ते");

  // Use <Gather> to collect user input
  let gather = twiml.gather({
    input: 'speech dtmf',
    timeout: 3,
    numDigits: 1,
    action: 'https://hello-voice-8069-pkcoy6.twil.io/response-handle',
    method: 'GET'
  });

  // Prompt user to press a key to choose an option
  gather.say({ language: 'hi-IN' }, "अगर आपके घर आज पानी आया है तो एक दबाएँ। अगर आपके घर आज पानी नहीं आया है तो दो दबाएँ।");

  // If the user doesn't enter input, loop
  return callback(null, twiml);
};