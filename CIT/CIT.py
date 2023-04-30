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
app.add_page(home, route="/")
app.add_page(faith, route="/faith")
app.add_page(resources, route="/resources")
app.add_page(contact, route="/contact")
# app.add_page(testimonies, route="/testimonies")
# app.add_page(media, route="/media")
app.add_page(give, route="/give")
app.compile()