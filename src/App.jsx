import "./Style.css";

// header's children
import Service from "components/header/service/Service";

// content's children
import ChannelList from "components/content/channels/ChannelList";
import MessageList from "components/content/messages/MessageList";

// footer's children
import User from "components/footer/users/User";
import MessageInput from "components/footer/messageInput/MessageInput";

const App = () => (
	<div className="container">
		<div className="parent header">
			<Service />
		</div>

		<div className="parent content">
			<ChannelList />
			<MessageList />
		</div>

		<div className="parent footer">
			<User />
			<MessageInput />
		</div>
	</div>
);

export default App;
