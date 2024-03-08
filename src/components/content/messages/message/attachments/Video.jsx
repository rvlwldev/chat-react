import "./Style.css";

import react from "react";

import sample1 from "assets/test/video1.mp4";

export default class Video extends react.Component {
	render() {
		return (
			<video class="attachment" controls>
				<source src={sample1} />
			</video>
		);
	}
}
