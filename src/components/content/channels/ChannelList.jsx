import "./Style.css";

import publicChat from "assets/channels/public-chat.png";
import privateChat from "assets/channels/private-chat.png";

import ChannelType from "./channel/ChannelType";
import Channel from "./channel/Channel";

const ChannelList = () => {
	return (
		<div className="channel-list">
			<ChannelType image={publicChat} type="공개채널" />
			<Channel name={"테스트공개채널01"} />
			<Channel name={"테스트공개채널02"} />

			<ChannelType image={privateChat} type="개인채널" />
		</div>
	);
};

export default ChannelList;
