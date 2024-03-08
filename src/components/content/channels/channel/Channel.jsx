import react from "react";

import icon from "../../../../assets/channels/private-chat.png";
import invite from "../../../../assets/channels/add-people.png";
import setting from "../../../../assets/commons/setting.png";

class Channel extends react.Component {
	render() {
		return (
			<div className="channel">
				<img className="icon" src={icon} alt="" />
				<p className="name">{this.props.name}</p>

				<div className="channel-option">
					<div className="tooltip-box">
						<img className="hidden-icon" src={invite} alt="" />
						<div className="tooltip-message">초대</div>
					</div>

					<div className="tooltip-box">
						<img className="hidden-icon" src={setting} alt="" />
						<div className="tooltip-message">설정</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Channel;
