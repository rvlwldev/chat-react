import "./Style.css";

import Service from "components/header/service/Service";
import ChannelList from "components/content/channels/ChannelList";
import MessageList from "components/content/messages/MessageList";
import User from "components/footer/users/User";
import MessageInput from "components/footer/messageInput/MessageInput";

const App = () => {
	return (
		<div className="container">
			<User />
			<Service />
			<ChannelList />
			<MessageList />
			<MessageInput />
		</div>
	);
};

export default App;
