import "./Style.css";

import { useEffect } from "react";

// components
import Service from "components/navbars/Service";
import ChannelList from "components/channels/ChannelList";
import User from "components/users/User";

import Title from "components/navbars/Title";
import MessageList from "components/messages/MessageList";
import MessageInput from "components/messages/MessageInput";

// stores
import userStore from "stores/User";

// services
import Request from "services/Request";

const App = () => {
	const {
		fetchAuthenticate,
		setUserAuthentication,
		isAuthenticated,
		invalidToken,
		user,
	} = userStore();

	useEffect(() => {
		(async () =>
			await fetchAuthenticate()
				.then((result) => {
					setUserAuthentication(true);
					Request.setToken(result.token);
				})
				.catch(() => setUserAuthentication(false)))(); // TODO : Redirect
	}, []);

	return (
		<div className="container">
			{isAuthenticated ? (
				<>
					<User user={user} />
					<Service />
					<ChannelList />
					<Title />
					<MessageList />
					<MessageInput />
				</>
			) : (
				<h1>접속중 ... </h1>
			)}
		</div>
	);
};

export default App;
