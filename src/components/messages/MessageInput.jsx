import "./Style.css";

import React from "react";

import attachment from "assets/messages/show-attachment.png";
import image from "assets/messages/send-image.png";
import video from "assets/messages/send-video.png";
import file from "assets/messages/send-file.png";
import send from "assets/messages/send-message.png";

const buttons = {
	attachment,
	image,
	video,
	file,
	send,
};

const MessageInput = () => {
	return (
		<div className="message-input">
			<div className="attachment-list">
				<img src={buttons.image} alt="" />
				<img src={buttons.video} alt="" />
				<img src={buttons.file} alt="" />
			</div>

			<img className="button" src={buttons.attachment} alt="" />
			<textarea></textarea>
			<img className="button" src={buttons.send} alt="" />
		</div>
	);
};

export default MessageInput;
