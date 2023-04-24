import pynecone as pc
from assets.website_text import * 
from CIT.components.header_footer import header, footer
from CIT.message_sender import MessageSender
from CIT import styles


def home() -> pc.Component:
    return pc.vstack(
        header,
        pc.box(
            pc.image(src="/AZ_desert_scape2.png", width="100%", height="auto"),
        ),
        pc.box(
            pc.text(intro_paragraph, font_size="1.25em"),
            padding_top="75px",
            width="75%",
        ),
        footer,
    )


def faith():
    return pc.vstack(
        header,
        pc.heading("Our Faith", padding_top="90px", padding_bottom="40px"),
        pc.heading(intro, font_size=styles.H4_FONT_SIZE),
        pc.box(
            pc.heading("The Bible", font_size=styles.H3_FONT_SIZE),
            pc.unordered_list(
                pc.list_item(Bible),
                padding_bottom="15px",
            ),
            pc.heading("The Triune God", font_size=styles.H3_FONT_SIZE),
            pc.unordered_list(
                pc.list_item(Truine_God),
                padding_bottom="15px",
            ),
            pc.heading("Jesus Christ", font_size=styles.H3_FONT_SIZE),
            pc.unordered_list(
                pc.list_item(Jesus_Christ),
                padding_bottom="15px",
            ),
            pc.heading("Christ's Crucifixion", font_size=styles.H3_FONT_SIZE),
            pc.unordered_list(
                pc.list_item(Crucifixion),
                padding_bottom="15px",
            ),
            pc.heading("Christ's Resurrection", font_size=styles.H3_FONT_SIZE),
            pc.unordered_list(
                pc.list_item(Resurrection),
                padding_bottom="15px",
            ),
            pc.heading("Christ's Ascension", font_size=styles.H3_FONT_SIZE),
            pc.unordered_list(
                pc.list_item(Ascension),
                padding_bottom="15px",
            ),
            pc.heading("Salvation", font_size=styles.H3_FONT_SIZE),
            pc.unordered_list(
                pc.list_item(Salvation),
                padding_bottom="15px",
            ),
            pc.heading("Christ's Return", font_size=styles.H3_FONT_SIZE),
            pc.unordered_list(
                pc.list_item(Christ_Return),
                padding_bottom="15px",
            ),
            width="55%",
        ),
        footer,
    )


def contact():
    return pc.vstack(
        header,
        pc.heading("Contact Us", padding_top="90px", padding_bottom="40px"),
        pc.vstack(
            pc.box(
                pc.text("Join us on Sunday's at 10:00 AM at:"),
                pc.text("3537 N. Craycroft Rd."),
                pc.text("Tucson, AZ 85718", padding_down="50px"),
                width="60%",
                padding_down="40px",
            ),
            pc.box(
                pc.text("Phone: 520-749-2460"),
                pc.text("Email: info@churchintucson.org"),
                width="60%",
                padding_down="40px",
            ),
            pc.text("Name:"),
            pc.input(
                placeholder="Your name...",
                is_required=True,
                # on_blur=InputState.set_text,
            ),
            pc.text("Email:"),
            pc.input(
                placeholder="Your email...",
                is_required=True,
                # on_blur=InputState.set_text,
            ),
            pc.text("Message:"),
            pc.text_area(
                placeholder="Type here...",
                is_required=True,
                # on_blur=TextareaState.set_text, 
            ),
            pc.hstack(
                pc.button("Submit"),
                pc.button(
                    "Clear",
                    on_click=MessageSender.clear_message,
                    ),
            ),
            width="60%",
            padding_bottom="75px",
        ),
        footer,
    )


def resources():
    return pc.vstack(
        header,
        pc.heading("Resources", padding_top="90px", padding_bottom="40px"),
        pc.link(
            pc.text("Living Stream Ministry", as_="b"),
            href="https://www.lsm.org",
            is_external=True,
        ),
        footer,

    )


def give():
    return pc.vstack(
        header,
        pc.heading("Give", padding_top="90px", padding_bottom="40px"),
        pc.box(
            pc.text("Coming soon...", font_size="1.25em"),
            padding="100px"
        ),
        footer,
    )


def ministry_portion():
    return pc.vstack(
        header,
        pc.heading("Ministry Portion"),
        pc.heading("Ministry on prayer", font_size=styles.H3_FONT_SIZE),
        pc.text(
            """In the New Testament the Greek word for service really means ministry. 
            To minister is to serve people with something. If I serve you without ministering something to you, 
            that is wrong. In the New Testament, the service, or the ministry, is the stewardship (1 Cor. 9:17; 
            Eph. 3:2; Col. 1:25). A steward is always serving people with something. A waiter in a restaurant 
            is a good illustration of one who serves people with something. To serve is not just to come to clean 
            the meeting hall. Service is ministry."""
        ),
        footer,
    )