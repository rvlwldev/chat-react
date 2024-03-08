import "./Style.css";
import react from "react";

import publicChat from "assets/channels/public-chat.png";
import privateChat from "assets/channels/private-chat.png";

import ChannelType from "./channel/ChannelType";
import Channel from "./channel/Channel";

const test = [];

for (let i = 0; i < 15; i++) {
	test.push({ name: "개인 채널 " + i });
}

class ChannelList extends react.Component {
	render() {
		return (
			<div className="channel-list">
				<ChannelType image={publicChat} type="공개채널" />
				<Channel name={"테스트공개채널01"} />
				<Channel name={"테스트공개채널02"} />

				<ChannelType image={privateChat} type="개인채널" />
				{test.map((c, i) => (
					<Channel name={c.name} key={i} />
				))}
			</div>
		);
	}
}

export default ChannelList;
