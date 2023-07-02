import pynecone as pc


faith_link = pc.link(
				pc.text("Our Faith", color="#696969", as_="b"),
				href="/faith",
				padding_right="15px"
			)
contact_link = pc.link(
				pc.text("Contact", color="#696969", as_="b"),
				href="/contact",
				padding_right="15px"
			)
resources_link = pc.link(
				pc.text("Resources", color="#696969", as_="b"),
				href="/resources",
				padding_right="15px"
			)
announcements_link = pc.link(
				pc.text("Calendar", color="#696969", as_="b"),
				href="/calendar",
				padding_right="15px"
			)
giving_link = pc.link(
				pc.text("Give", color="#696969", as_="b"),
				href="/give",
				padding_right="15px"
			)
testimony_link = pc.link(
			pc.text("Testimonies", color="#696969", as_="b"),
			href="/testimonies",
			padding_right="15px"
		)
media_link = pc.link(
			pc.text("Media", color="#696969", as_="b"),
			href="/media",
			padding_right="15px"
		)


header = pc.box(
	pc.hstack(
		pc.link(
			pc.heading("The Church in Tucson", padding="10px"),
			href="/",
		),
		pc.spacer(),
		pc.desktop_only(
			faith_link,
			resources_link,
			announcements_link,
			contact_link,
			giving_link,
		),
		pc.mobile_and_tablet(
			pc.menu(
				pc.menu_button(pc.text("Menu", color="#696969", as_="u"), padding_right="15px"),
				pc.menu_list(
					pc.link(
						pc.menu_item(pc.text("Our Faith", color="#696969", as_="b")),
						href="/faith",
					),
					pc.link(
						pc.menu_item(pc.text("Resources", color="#696969", as_="b")),
						href="/resources",
					),
					pc.link(
						pc.menu_item(pc.text("Announcements", color="#696969", as_="b")),
						href="/announcements",
					),
					pc.link(
						pc.menu_item(pc.text("Give", color="#696969", as_="b")),
						href="/give",
					),
					pc.menu_divider(),
					pc.link(
						pc.menu_item(pc.text("Contact Us", color="#696969", as_="b")),
						href="/contact",
					),
				),
			),
		),
	),
	bg="white",
	width="100%",
	position="fixed",
	top="0px",
	z_index="20",
	border_bottom="0.05em solid rgba(100, 116, 139, .2)",
)
faith_link = pc.link(
				pc.text("Our Faith", color="#696969", as_="b"),
				href="/faith",
				padding_right="15px"
			)


footer = pc.box(
		"Copyright © 2023. The Church in Tucson. All Rights Reserved.", 
		font_size="0.5em",
		padding="50px",
	)
