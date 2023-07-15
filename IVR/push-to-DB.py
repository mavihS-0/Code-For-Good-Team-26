import pandas as pd
import csv
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import auth_tokens

# Create a new client and connect to the server
client = MongoClient(auth_tokens.uri, server_api=ServerApi('1'))

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)


# Convert DataFrame to a list of dictionaries
db = client['dhulikonaDB']
collection = db['feedback']

# Insert data into MongoDB collection
csv_file = 'ivr.csv'
with open(csv_file, 'r') as file:
    reader = csv.reader(file)

    for row in reader:
        document = {
            'mob_no': row[0],
            'problem': row[2],
            'call_type': row[1],
        }
        collection.insert_one(document)

# Clear the contents of the CSV file
with open(csv_file, 'w', newline='') as file:
    file.truncate()

# Close MongoDB connection
client.close()
