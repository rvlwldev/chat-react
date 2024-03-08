import "./Style.css";

import react from "react";

import sample1 from "assets/test/screenshot1.png";

export default class Image extends react.Component {
	render() {
		return <img className="attachment" src={sample1} alt="" />;
	}
}
