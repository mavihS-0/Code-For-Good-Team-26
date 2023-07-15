import os
from twilio.rest import Client

# Find your Account SID and Auth Token at twilio.com/console
# and set the environment variables. See http://twil.io/secure
account_sid = "ACf3c81a0eae438f340bfab47d24684f07"
auth_token = "417806c1a80681062ce6c7468ffab81b"
client = Client(account_sid, auth_token)

# Read the contents of your local XML file
# with open('./IVR/fetch.xml', 'r') as file:
#     xml_content = file.read()

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
