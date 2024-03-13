import "./Style.css";

import { useEffect } from "react";

import publicChat from "assets/channels/public-chat.png";
import privateChat from "assets/channels/private-chat.png";

import ChannelType from "./ChannelType";
import Channel from "./Channel";

import channelStore from "stores/Channel";

const ChannelList = () => {
	const {
		publicChannels,
		addPublicChannel,
		privateChannels,
		addPrivateChannel,
		fetchChannels,
	} = channelStore();

	useEffect(() => {
		(async () => {
			const channels = (await fetchChannels()) || [];
			let pubs = channels.filter((channel) => channel.type.code == 50);
			let pris = channels.filter((channel) => channel.type.code == 10);

			addPublicChannel(pubs);
			addPrivateChannel(pris);
		})();
	}, []);

	return (
		<div className="channel-list">
			<ChannelType image={publicChat} type="공개채널" />
			{publicChannels.map((channel) => (
				<Channel channel={channel} key={channel.id} />
			))}

			<ChannelType image={privateChat} type="개인채널" />
			{privateChannels.map((channel) => (
				<Channel channel={channel} key={channel.id} />
			))}
		</div>
	);
};

export default ChannelList;
