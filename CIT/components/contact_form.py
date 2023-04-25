import pynecone as pc
from CIT import styles
# from CIT.components.message_sender import MessageSender


contact_form = pc.vstack(
		pc.box(
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
			width="100%",
		),
		pc.hstack(
			pc.button(
				"Submit"
				),
			pc.button(
				"Clear",
				# on_click=MessageSender.clear_message,
				),
		),
		width="100%",
	)