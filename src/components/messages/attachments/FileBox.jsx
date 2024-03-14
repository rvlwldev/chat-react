import react from "react";

import downloadImage from "assets/messages/download.png";

export default class FileBox extends react.Component {
	render() {
		return (
			<div className="file-box">
				<div>
					<p className="file-name">파일 명 1.txt</p>
					<p className="file-size">2.65.MB</p>
				</div>
				<img src={downloadImage} alt="" />
			</div>
		);
	}
}
