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
    title="Faith | The church in Tucson", 
    description="We hold the faith which is common to all the believers (Titus 1:4, Jude 3)."
)
app.add_page(
    resources, 
    route="/resources", 
    title="Resources | The church in Tucson",
    description="Ministry links and other helpful resources."
)
app.add_page(
    contact, 
    route="/contact", 
    title="Contact us | The church in Tucson",
    description="We warmly welcome you. Come meet with us, or reach out with any questions."
)
# app.add_page(media, route="/media")
app.add_page(
<<<<<<< HEAD
    calendar, 
    route="/announcements", 
    title="Announcements | The church in Tucson"
=======
    announcements, 
    route="/calendar", 
    title="Calendar | The church in Tucson"
>>>>>>> 05daea65a89047ebf6affc7cd96191f88dfc0af2
)

app.add_page(
    give, 
    route="/give", 
    title="Give | The church in Tucson",
    description="If you feel to give to the church or the work of the ministry, here is some guidance."
)

app.compile()