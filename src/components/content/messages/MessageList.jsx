import "./Style.css";

import react from "react";

import DateLine from "./message/DateLine";
import Message from "./message/Message";

const test = [];
for (let i = 0; i < 45; i++) {
	test.push({ text: "테스트 텍스트 " + i });
}

export default class MessageList extends react.Component {
	render() {
		return (
			<div className="message-list">
				<DateLine />

				{test.map((c, i) => (
					<Message text={c.text} key={i} />
				))}
			</div>
		);
	}
}
