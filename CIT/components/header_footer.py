import pynecone as pc


header = pc.box(
	pc.hstack(
		pc.link(
			pc.heading("The Church in Tucson", padding="10px"),
			href="/",
		),
		pc.spacer(),
		pc.link(
			pc.text("Our Faith", color="#696969", as_="b"),
			href="/faith",
			padding_right="15px"
		),
		pc.link(
			pc.text("Contact", color="#696969", as_="b"),
			href="/contact",
			padding_right="15px"
		),
		pc.link(
			pc.text("Resources", color="#696969", as_="b"),
			href="/resources",
			padding_right="15px"
		),
		pc.link(
			pc.text("Testimonies", color="#696969", as_="b"),
			# href="/testimonies",
			padding_right="15px"
		),
		# pc.link(
		# 	pc.text("Media", color="#696969", as_="b"),
		# 	href="/media",
		# 	padding_right="15px"
		# ),
		pc.link(
			pc.text("Give", color="#696969", as_="b"),
			href="/give",
			padding_right="15px"
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
		"Copyright © 2000, 2003. The Church in Tucson. All Rights Reserved.", 
		font_size="0.5em",
		padding="50px",
	)