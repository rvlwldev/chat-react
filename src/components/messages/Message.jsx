import Image from "./attachments/Image";
import Video from "./attachments/Video";
import FileBox from "./attachments/FileBox";

import noProfile from "assets/commons/no-profile.png";

const Message = (props) => {
	const message = props.message;

	return (
		<div className="message">
			<img className="picture" src={noProfile} alt="" />

			{message.type === "image" && <Image />}
			{message.type === "video" && <Video />}
			{message.type === "file" && <FileBox />}

			<div className="header">
				<div className="user-name">{message.userId}</div>
				<div className="send-time">{message.createdAt}</div>
				<div className="text">{message.text}</div>
			</div>
		</div>
	);
};

export default Message;
