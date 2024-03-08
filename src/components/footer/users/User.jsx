import React from "react";
import "./Style.css";

import noProfile from "assets/commons/no-profile.png";
import alarmOn from "assets/commons/alarm-on.png";
import alarmOff from "assets/commons/alarm-off.png";
import setting from "assets/commons/setting.png";

class User extends React.Component {
	render() {
		let alarm = false;

		return (
			<div className="user">
				<div className="tooltip-box">
					<p className="tooltip-message">내 정보 보기</p>
					<img src={noProfile} alt="" />
				</div>
				<p className="name">테스트(전산)</p>
				<div className="icons">
					{alarm ? (
						<div className="tooltip-box">
							<p className="tooltip-message">알림 꺼짐</p>
							<img src={alarmOff} alt="알림 설정" />
						</div>
					) : (
						<div className="tooltip-box">
							<p className="tooltip-message">알림 켜짐</p>
							<img src={alarmOn} alt="알림 설정" />
						</div>
					)}
					<div className="tooltip-box">
						<p className="tooltip-message">설정</p>
						<img src={setting} alt="설정" />
					</div>
				</div>
			</div>
		);
	}
}

export default User;
