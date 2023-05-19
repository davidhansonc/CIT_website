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
    home, 
    route="/",
    title="The Church in Tucson",
    description="""A local church, the church in Tucson warmly welcomes you. 
    We are believers in the Lord Jesus Christ who have personally received Him as our Savior."""
)
app.add_page(
    faith, 
    route="/faith", 
    title="The church in Tucson | Beliefs", 
    description="We hold the faith which is common to all the believers (Titus 1:4, Jude 3)."
)
app.add_page(
    resources, 
    route="/resources", 
    title="The church in Tucson | Resources",
    description="Ministry links and other helpful resources."
)
app.add_page(
    contact, 
    route="/contact", 
    title="The church in Tucson | Contact Us",
    description="We warmly welcome you. Come meet with us, or reach out with any questions."
)
# app.add_page(media, route="/media")
# app.add_page(give, route="/calendar", title="Calendar")
app.add_page(
    give, 
    route="/give", 
    title="The church in Tucson | Give",
    description="If you feel to give to the church or the work of the ministry, here is some guidance."
)

app.compile()