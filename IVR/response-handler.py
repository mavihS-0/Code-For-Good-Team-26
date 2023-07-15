from flask import Flask
from flask import request
from twilio.twiml.voice_response import VoiceResponse, Gather
import csv

app = Flask(__name__)


def append_to_csv(file_path, data):
    with open(file_path, 'a', newline='') as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(data)


@app.route("/voice", methods=['GET', 'POST'])
def voice():
    # Start our TwiML response
    resp = VoiceResponse()
    data = []

    # check if call is incoming or outgoing
    if request.values['Direction'] == 'inbound':
        data.append(request.values['From'])
        data.append('incoming')
    else:
        data.append(request.values['To'])
        data.append('outgoing')

    # If Twilio's request to our app included already gathered digits,
    # process them
    if 'Digits' in request.values:
        # Get which digit the caller chose
        choice = request.values['Digits']

        # <Say> a different message depending on the caller's choice
        if choice == '1':
            data.append('no problem')
            append_to_csv('ivr.csv', data)
            resp.say("धन्यवाद", language='hi-IN')
            return str(resp)
        elif choice == '2':
            data.append('water problem')
            append_to_csv('ivr.csv', data)
            resp.say("आसुविधा के लिए खेद है", language='hi-IN')
            return str(resp)

    # If the user didn't choose an option, re-prompt them
    resp.say("कृपया अपना विकल्प चुनें", language='hi-IN')
    resp.redirect('/voice')

    return str(resp)


if __name__ == "__main__":
    app.run(debug=True)
