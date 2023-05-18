"""The main church in Tucson website."""


from pcconfig import config
from CIT.pages import *
from CIT.styles import style

import pynecone as pc


class State(pc.State):
    """The app state."""
    pass


# Create the app.
app = pc.App(state=State, style=style)
app.add_page(
    home, route="/",
    title="The Church in Tucson",
    description="""A local church, the church in Tucson warmly welcomes you. 
    We are believers in the Lord Jesus Christ who have personally received Him as our Savior."""
)
app.add_page(faith, route="/faith", title="Our Faith")
app.add_page(resources, route="/resources", title="Resources")
app.add_page(contact, route="/contact", title="Contact Us")
# app.add_page(media, route="/media")
# app.add_page(give, route="/calendar", title="Calendar")
app.add_page(give, route="/give", title="Give")
app.compile()