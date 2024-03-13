import "./Style.css";

import react from "react";

import DateLine from "./DateLine";
import Message from "./Message";

export default class MessageList extends react.Component {
	render() {
		return (
			<div className="message-list">
				<DateLine />

				<Message text={"rkfrkf"} key={1} />

				{/* {test.map((c, i) => (
					<Message text={c.text} key={i} />
				))} */}
			</div>
		);
	}
}
