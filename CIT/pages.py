import pynecone as pc
from assets.website_text import * 
from CIT.components.header_footer import header, footer
from CIT.components.contact_form import contact_form
# from CIT.components.message_sender import MessageSender
from CIT import styles


def home() -> pc.Component:
    return pc.vstack(
        header,
        pc.desktop_only(
            pc.box(
                pc.image(src="/AZ_desert_scape2.png", width="100%", height="auto"),
            ),
            pc.box(
                pc.text(intro_paragraph, font_size="1.25em"),
                padding_top="75px",
                padding_bottom="75px",
                padding_right="150px",
                padding_left="150px",
                width="100%",
            ),
        ),
        pc.tablet_only(
            pc.box(
                pc.image(src="/AZ_desert_scape3.png", width="100%", height="auto"),
            ),
            pc.heading("Welcome.", font_size="3em", padding="15px"),
            pc.box(
                pc.text(intro_paragraph, font_size="1.25em"),
                padding_left="50px",
                padding_right="50px",
                width="100%",
            ),
        ),
        pc.mobile_only(
            pc.box(
                pc.image(src="/AZ_desert_scape4.png", width="100%", height="auto"),
            ),
            pc.heading("Welcome.", font_size="3em", padding="15px"),
            pc.box(
                pc.text(intro_paragraph, font_size="1.25em"),
                padding_left="25px",
                padding_right="25px",
                width="100%",
            ),
        ),
        footer,
    )


def faith():
    return pc.vstack(
        header,
        pc.desktop_only(
            pc.vstack(
                pc.heading("Our Faith", padding_top="90px", padding_bottom="40px"),
                pc.box(
                    pc.heading(intro, padding_bottom="15px", font_size=styles.H4_FONT_SIZE),
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
            ),
        ),
        pc.mobile_and_tablet(
            pc.vstack(
                pc.heading("Our Faith", 
                    padding_top="90px", 
                    padding_bottom="40px",
                ),
                pc.box(
                    pc.heading(intro, padding_bottom="15px", font_size=styles.H4_FONT_SIZE),
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
                    width="85%",
                ),
            ),
        ),
        footer,
    )


def contact():
    return pc.vstack(
        header,
        pc.desktop_only(
            pc.vstack(
                pc.heading("Contact Us", padding_top="90px", padding_bottom="40px"),
                pc.box(
                    element="iframe",
                    src=map_url,
                    width="600px",
                    height="450px",
                    padding_bottom="15px",
                ),
                pc.box(
                    pc.heading("Meeting Information", font_size=styles.H3_FONT_SIZE),
                    pc.unordered_list(
                        pc.list_item(pc.text("""Every Sunday at 10 AM we gather for 
                        the Lord's Table and mutual fellowship 
                        from the Bible at:""")),
                        pc.unordered_list(
                            pc.list_item(address_link),
                            list_style_type="none",
                        ),
                        pc.list_item(pc.text("""Every Tuesday at 7:30 PM we gather in groups 
                        to pray for the Lord’s interests on the earth.""")),
                        pc.list_item(pc.text("""Most other evenings we gather in various homes 
                        for small group Bible studies and fellowship.""")),
                        padding_bottom="10px",
                    ),
                    pc.heading("Contact Us", font_size=styles.H3_FONT_SIZE),
                    pc.unordered_list(
                        pc.list_item(pc.link(pc.text("info@churchintucson.org"), href="mailto: info@churchintucson.org", \
                            color="rgb(107,99,246)")),
                        pc.list_item(pc.link(pc.text("520-548-7514"), href="tel: 5205487514", color="rgb(107,99,246)")),
                        pc.list_item(pc.text(f"Our mailing address is 6091 E Grant Rd, Tucson, AZ 85712")
                        ),
                    ),
                    width="75%",
                ),
            ),
        ),
        pc.mobile_and_tablet(
            pc.vstack(
                pc.heading("Contact Us", 
                    padding_top="90px", 
                    padding_bottom="40px",
                ),
                pc.box(
                    element="iframe",
                    src=map_url,
                    width="85%",
                    padding_bottom="15px",
                ),
                pc.box(
                    pc.heading("Meeting Information", font_size=styles.H3_FONT_SIZE),
                    pc.unordered_list(
                        pc.list_item(pc.text("""Every Sunday at 10 AM we gather for 
                        the Lord's Table and mutual fellowship 
                        from the Bible at:""")),
                        pc.unordered_list(
                            pc.list_item(address_link),
                            list_style_type="none",
                        ),
                        pc.list_item(pc.text("""Every Tuesday at 7:30 PM we gather 
                        to pray for the Lord’s interests on the earth.""")),
                        pc.list_item(pc.text("""Most other evenings we gather in various homes 
                        for small group Bible studies and fellowship.""")),
                        padding_bottom="10px",
                    ),
                    pc.heading("Contact Us", font_size=styles.H3_FONT_SIZE),
                    pc.unordered_list(
                        pc.list_item(pc.link(pc.text("info@churchintucson.org"), href="mailto: info@churchintucson.org", \
                            color="rgb(107,99,246)")),
                        pc.list_item(pc.link(pc.text("520-548-7514"), href="tel: 5205487514", color="rgb(107,99,246)")),
                        pc.list_item(pc.text("Our mailing address is 6091 E Grant Rd, Tucson, AZ 85712")),
                    ),
                    # contact_form,
                width="85%",
                ),
            ),
        ),
        footer,
    )


def resources():
    return pc.vstack(
        header,
        pc.heading("Resources", padding_top="90px", padding_bottom="40px"),
        pc.unordered_list(
            pc.list_item(
                pc.link(
                    pc.text("Living Stream Ministry", as_="b"),
                    href="https://www.lsm.org",
                    color="rgb(107,99,246)",
                    # is_external=True,
                ),
                padding_bottom="15px",
            ),
            pc.list_item(
                pc.link(
                    pc.text("LSM Online Publications", as_="b"),
                    href="https://www.ministrybooks.org/",
                    color="rgb(107,99,246)",
                    # is_external=True,
                ),
                padding_bottom="15px",
            ),
            pc.list_item(
                pc.link(
                    pc.text("LSM Webcast", as_="b"),
                    href="https://www.lsmwebcast.com/",
                    color="rgb(107,99,246)",
                    # is_external=True,
                ),
                padding_bottom="15px",
            ),
            pc.list_item(
                pc.link(
                    pc.text("LSM Bookstore", as_="b"),
                    href="https://www.livingstream.com/en/",
                    color="rgb(107,99,246)",
                    # is_external=True,
                ),
                padding_bottom="15px",
            ),
            pc.list_item(
                pc.link(
                    pc.text("Hymnal.net", as_="b"),
                    href="https://www.hymnal.net/en/home",
                    color="rgb(107,99,246)",
                    # is_external=True,
                ),
                padding_bottom="15px",
            ),
            pc.list_item(
                pc.link(
                    pc.text("Shepherding Words", as_="b"),
                    href="https://shepherdingwords.com/",
                    color="rgb(107,99,246)",
                    # is_external=True,
                ),
                padding_bottom="15px",
            ),
            pc.list_item(
                pc.link(
                    pc.text("Affirmation & Critique", as_="b"),
                    href="https://www.affcrit.com/",
                    color="rgb(107,99,246)",
                    # is_external=True,
                ),
                padding_bottom="15px",
            ),
        ),
        footer,

    )


def give():
    return pc.vstack(
        header,
        pc.desktop_only(
            pc.vstack(
                pc.heading("Give", padding_top="90px", padding_bottom="40px"),
                pc.box(
                    pc.heading("Local Needs", font_size=styles.H3_FONT_SIZE),
                    pc.unordered_list(
                        pc.list_item(pc.text('''Please send any cash or checks to our mailing address: 
                        6091 E Grant Rd Tucson, AZ 85712. Checks should be made out to "The Church in Tucson".''')),
                        pc.list_item(pc.text("There is also a donation box in our meeting hall.")),
                        padding_bottom="20px",
                    ),
                    pc.heading("The Work of the Ministry", font_size=styles.H3_FONT_SIZE),
                    pc.unordered_list(
                        pc.list_item(pc.link(pc.text("Living Stream Ministry"), href="https://www.lsm.org/donations/index.php", \
                            color="rgb(107,99,246)")),
                        pc.list_item(pc.link(pc.text("The Lord's Move to Europe"), href="https://www.lordsmove.org/", \
                            color="rgb(107,99,246)")),
                    ),
                    width="60%",
                ),
            ),
        ),
        pc.mobile_and_tablet(
            pc.vstack(
                pc.heading("Give", 
                    padding_top="90px", 
                    padding_bottom="40px",
                ),
                pc.box(
                    pc.heading("Local Needs", font_size=styles.H3_FONT_SIZE),
                    pc.unordered_list(
                        pc.list_item(pc.text('''Please send any cash or checks to our mailing address: 
                        6091 E Grant Rd Tucson, AZ 85712. Checks should be made out to "The Church in Tucson".''')),
                        pc.list_item(pc.text("There is also a donation box in our meeting hall.")),
                        padding_bottom="20px",
                    ),
                    pc.heading("The Work of the Ministry", font_size=styles.H3_FONT_SIZE),
                    pc.unordered_list(
                        pc.list_item(pc.link(pc.text("Living Stream Ministry"), href="https://www.lsm.org/donations/index.php", \
                            color="rgb(107,99,246)")),
                        pc.list_item(pc.link(pc.text("The Lord's Move to Europe"), href="https://www.lordsmove.org/", \
                            color="rgb(107,99,246)")),
                    ),
                    width="85%",
                ),
            ),
        ),
        footer,
    )


'''
def media():
    return pc.vstack(
        header,
        pc.heading("Media", padding_top="90px", padding_bottom="40px"),
        pc.box(
            element="iframe",
            src="https://www.youtube.com/embed/KfRLt4bi_aA",
            width="70%",
        ),
        footer,
    )
'''


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