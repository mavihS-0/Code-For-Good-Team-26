# Call Handling System Architecture

This document describes the architecture of the call handling system. The system consists of several components and technologies working together.

## Components

### Outgoing Call Function (make_call.py)

- This component calls the function directly from the terminal.
- It initiates outgoing calls as required by the application.
- The function is responsible for making outbound calls and initiating call flows.

### Response Handler (response-handler.py)

- This component is running locally on the localhost.
- It is built using Flask, a Python web framework.
- The component handles the responses received from Twilio.
- It processes the responses and performs additional operations as necessary.

### Incoming Call Function (incoming-call.js)

- This component is running on the Twilio Console as a Service Function.
- It handles incoming calls and performs initial processing.
- The function is triggered when a call is received by Twilio.
- Further call handling and routing are done based on the requirements.

### IVR Data Storage (ivr.csv)

- This file temporarily stores data until it is pushed to the database.
- The file acts as a buffer for storing IVR-related data.
- Once the function is called to push data to the MongoDB database, the CSV file is automatically truncated.

### Push to Database Script (push-to-DB.py)

- This script is responsible for pushing the content of the `ivr.csv` file row by row to the MongoDB used by the website.
- The script ensures that data is not duplicated by automatically truncating the `ivr.csv` file after successful data insertion into the database.
