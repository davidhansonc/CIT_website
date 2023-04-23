import pynecone as pc
from flask import Flask, render_template, request, redirect
import os


class MessageSender(pc.State):
    name: str
    email: str
    message: str


    def clear_message(self):
        self.message = ""


    def set_message(self):
	    pass


    def send_email(new_data):
        name = new_data["name"]
        inquiree_address = new_data["email"]
        subject = new_data["subject"]
        message = new_data["message"]

        api_key = os.environ["MAILGUN_API_KEY"]
        domain_name = os.environ["MAILGUN_DOMAIN"]

        return requests.post(
                f"https://api.mailgun.net/v3/{domain_name}/messages",
                auth=("api", api_key),
                data={"from": f"{name} <{inquiree_address}>",
                    "to": "davidhanson.c@gmail.com",
                    "subject": subject,
                    "text": message
                    })