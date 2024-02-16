# Download the helper library from https://www.twilio.com/docs/python/install
import os
from twilio.rest import Client


# Find your Account SID and Auth Token at twilio.com/console
# and set the environment variables. See http://twil.io/secure
account_sid = 'ACf8ccd164ab96b9ba138f68c1a4ab7b91'
auth_token = 'a8e7e68dd35e643e331f3d8d9d0afbad'
client = Client(account_sid, auth_token)

message = client.messages \
                .create(
                     body="And thank you for helping! Can you send a response to this message for a test?",
                     from_='+12363019250', #(236) 301-9250
                    #  to='+14038360075'
                     to='+16043468192'
                 )

print(message.sid)