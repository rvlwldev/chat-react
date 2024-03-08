import "./Style.css";

import react from "react";

import DateLine from "./message/DateLine";
import Message from "./message/Message";

export default class MessageList extends react.Component {
	render() {
		return (
			<div className="message-list">
				<DateLine />

				<Message text="sjdflkasjdflksadjlksdaflksdafjkl" />
				<Message text={`sdjkglkasjdflksdfa`} />
				<Message />
			</div>
		);
	}
}
