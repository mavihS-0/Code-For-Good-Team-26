import os
from twilio.rest import Client
import auth_tokens

# configuring the Twilio Client
account_sid = auth_tokens.account_sid
auth_token = auth_tokens.auth_token
client = Client(account_sid, auth_token)


# making a call
call = client.calls.create(
    twiml='''<?xml version="1.0" encoding="UTF-8"?>
    <Response>
        <Say language="hi-IN">नमस्ते</Say>
        <Gather input="speech dtmf" timeout="3" numDigits="1" action="https://hello-voice-8069-pkcoy6.twil.io/response-handle" method="GET">
            <Say language="hi-IN">अगर आपके घर आज पानी आया है तो एक दबाएँ। अगर आपके घर आज पानी नहीं आया है तो दो दबाएँ।</Say>
        </Gather>
    </Response>''',

    to='+918210511399',

    from_='+18149047008'
)
