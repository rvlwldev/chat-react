import react from "react";

import Image from "./attachments/Image";
import Video from "./attachments/Video";
import FileBox from "./attachments/FileBox";

import noProfile from "assets/commons/no-profile.png";

export default class Message extends react.Component {
	render() {
		return (
			<div className="message">
				<img className="picture" src={noProfile} alt="" />

				<div className="header">
					<div className="user">
						<div className="user-name">테스트(전산)</div>
						<div className="send-time">09:11</div>
					</div>
					{/* <Image />
					<Video /> */}

					<FileBox />

					<div className="text">{this.props.text}</div>
				</div>
			</div>
		);
	}
}
