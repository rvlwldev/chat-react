import react from "react";

import create from "../../../../assets/channels/create.png";

class ChannelType extends react.Component {
	render() {
		return (
			<div className="type">
				<img src={this.props.image} alt="" />
				<p>{this.props.type}</p>

				<div className="tooltip-box">
					<p className="tooltip-message">방 만들기</p>
					<img className="channel-create-image" src={create} alt="" />
				</div>
			</div>
		);
	}
}

export default ChannelType;
