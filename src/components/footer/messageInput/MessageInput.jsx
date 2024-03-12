import "./Style.css";

import React from "react";
import { create } from "zustand";

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

const layoutStore = create((set) => ({
	showAttachment: false,
	toggleAttachment: () => {
		set((state) => ({ showAttachment: !state.showAttachment }));
	},
}));

const MessageInput = () => {
	const { showAttachment, toggleAttachment } = layoutStore();

	return (
		<div className="message-input">
			{showAttachment && (
				<div className="attachment-list">
					<img src={buttons.image} alt="" />
					<img src={buttons.video} alt="" />
					<img src={buttons.file} alt="" />
				</div>
			)}

			<img
				className="button"
				src={buttons.attachment}
				onClick={toggleAttachment}
				alt=""
			/>

			<div className="text">
				<textarea></textarea>
			</div>

			<img className="button" src={buttons.send} alt="" />
		</div>
	);
};

export default MessageInput;
