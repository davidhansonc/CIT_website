import pynecone as pc
from CIT import styles
# from CIT.components.message_sender import MessageSender


class TextareaState(pc.State):
    text: str


contact_form = pc.vstack(
		pc.box(
			# pc.text("Name:"),
			# pc.input(
			# 	placeholder="Your name...",
			# 	is_required=True,
			# 	on_blur=InputBlurState.set_text,
			# ),
			# pc.text("Email:"),
			# pc.input(
			# 	placeholder="Your email...",
			# 	is_required=True,
			# 	on_blur=ContactFormState.set_email,
			# ),
			pc.text("Message:"),
			pc.text_area(
				placeholder="Type here...",
				is_required=True,
				on_blur=TextareaState.set_text, 
			),
			width="100%",
		),
		pc.hstack(
			pc.button(
				"Submit",
				# on_click=ContactFormState.print_name
				),
			pc.button(
				"Clear",
				# on_click=InputBlurState.clear_name,
				),
		),
		width="100%",
	)