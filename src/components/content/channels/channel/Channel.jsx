import icon from "assets/channels/private-chat.png";
import invite from "assets/channels/add-people.png";
import setting from "assets/commons/setting.png";

const Channel = (props) => {
	return (
		<div className="channel">
			<img className="icon" src={icon} alt="" />
			<p className="name">{props.name}</p>

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
};

export default Channel;
