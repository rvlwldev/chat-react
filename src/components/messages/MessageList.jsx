import "./Style.css";

import { useEffect } from "react";

import DateLine from "./DateLine";
import Message from "./Message";

import channelStore from "stores/Channel";
import messageStore from "stores/Message";

const MessageList = () => {
	const { activeChannel } = channelStore();
	const {
		/** @type Array */ messageList,
		/** @type Function */ setMessageList,
		/** @type Function */ fetchMessages,
	} = messageStore();

	useEffect(() => {
		const params = {};

		if (messageList.length > 0)
			params.lastMessageId = messageList[messageList.length - 1].id;

		(async () => {
			if (activeChannel.id)
				setMessageList(await fetchMessages(activeChannel.id, params));
		})();
	}, [activeChannel]);

	return (
		<div className="message-list">
			<DateLine />
			{messageList.map((message) => (
				<Message message={message} key={message.id} />
			))}
		</div>
	);
};

export default MessageList;
