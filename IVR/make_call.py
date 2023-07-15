import os
from twilio.rest import Client

# Find your Account SID and Auth Token at twilio.com/console
# and set the environment variables. See http://twil.io/secure
account_sid = "ACf3c81a0eae438f340bfab47d24684f07"
auth_token = "417806c1a80681062ce6c7468ffab81b"
client = Client(account_sid, auth_token)

# Read the contents of your local XML file
with open('./IVR/fetch.xml', 'r') as file:
    xml_content = file.read()

call = client.calls.create(
    twiml=xml_content,
    to='+918210511399',
    from_='+18149047008'
)
