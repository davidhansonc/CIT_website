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
			contact_link,
			giving_link,
		),
		pc.mobile_and_tablet(
			pc.menu(
				pc.menu_button(pc.text("Menu", color="#696969", as_="u"), padding_right="15px"),
				pc.menu_list(
					pc.menu_item(faith_link),
					pc.menu_item(resources_link),
					pc.menu_item(giving_link),
					pc.menu_divider(),
					pc.menu_item(contact_link),
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


footer = pc.box(
<<<<<<< HEAD
		"Copyright © 2023. The Church in Tucson. All Rights Reserved.", 
=======
		"Copyright © 2000-2023. The Church in Tucson. All Rights Reserved.", #Updated copyright
>>>>>>> 3e61169c301deecda2d2cc9483e4f3e4d2341027
		font_size="0.5em",
		padding="50px",
	)
