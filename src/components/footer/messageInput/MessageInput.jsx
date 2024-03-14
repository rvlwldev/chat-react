import "./Style.css";

import React from "react";

import attachment from "../../../assets/messages/show-attachment.png";
import image from "../../../assets/messages/send-image.png";
import video from "../../../assets/messages/send-video.png";
import file from "../../../assets/messages/send-file.png";
import send from "../../../assets/messages/send-message.png";

class MessageInput extends React.Component {
	render() {
		return (
			<div className="message-input">
				<div className="attachment-list">
					<img src={image} alt="" />
					<img src={video} alt="" />
					<img src={file} alt="" />
				</div>
				<img className="button" src={attachment} alt="" />

				<div className="text">
					<textarea></textarea>
				</div>

				<img className="button" src={send} alt="" />
			</div>
		);
	}
}

export default MessageInput;
