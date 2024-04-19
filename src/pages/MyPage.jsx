import React from "react";
import Button from "../components/Button";
import "./MyPage.scss";

const MyPage = () => {
	const modal = document.querySelector(".confirm-modal");

	const handleClick = () => {
		modal.style.display = "block";
	};

	const handleClickOff = () => {
		modal.style.display = "none";
	};

	return (
		<div>
			<div className="main-wrapper">
				<div className="top-bar">
					<div className="badge-wrapper">
						<span>OOO님</span>
						<img
							src="src/assets/images/Group 454.svg"
							alt="이미지"
						/>
					</div>
				</div>
				<div className="main-content">
					<div className="left-page">
						<div className="left-page__image">
							<div className="image-wrapper">
								<div>
									<img
										src="src/assets/images/Group 454.svg"
										alt="이미지"
									/>
									<br />
									<button>이미지 수정</button>
								</div>
							</div>
						</div>
						<div className="left-page__data">
							<div className="data-wrapper">
								<div className="email-content">
									이메일(아이디)
									<br />
									<input
										type="text"
										name="email"
										id="email"
										placeholder="이메일을 입력하세요"
										className="input"
									/>
								</div>
								<div className="name-content">
									이름
									<br />
									<input
										type="text"
										name="name"
										id="name"
										placeholder="이름을 입력하세요"
										className="input"
									/>
								</div>
								<div className="phone-num-content">
									전화번호
									<br />
									<input
										type="text"
										name="phone-num"
										id="phone-num"
										placeholder="전화번호를 입력하세요"
										className="input"
									/>
								</div>
							</div>
						</div>

						<div className="left-page__modi-btn">
							<div className="modi-btn-wrapper">
								<Button
									className="profile-modi-btn"
									onClick={handleClick}>
									프로필 수정
								</Button>
							</div>
						</div>
					</div>
					<div className="right-page">
						<div className="right-page-top__data">
							<div className="status-data-wrapper">
								<div className="current-className">
									<div className="text-data">
										<img
											src="src/assets/images/icon_user_graduate.svg"
											alt=""
										/>{" "}
										현재 수강중인 클래스
									</div>
									프론트엔드 부트캠프 8기
								</div>
							</div>
							<div className="status-data-wrapper">
								<div className="check-in-time">
									<div className="text-data">
										<img
											src="src/assets/images/icon_clock_border.svg"
											alt=""
										/>{" "}
										오늘 입실 시간
									</div>
									10:00
								</div>
							</div>
							<div className="status-data-wrapper">
								<div className="check-out-time">
									<div className="text-data">
										<img
											src="src/assets/images/icon_clock.svg"
											alt=""
										/>{" "}
										오늘 퇴실 시간
									</div>
									19:00
								</div>
							</div>
							<div className="status-data-wrapper">
								<div className="vacation-status">
									<div className="text-data">
										<img
											src="src/assets/images/icon_umbrella_beach.svg"
											alt=""
										/>{" "}
										4월 휴가 신청 상태
									</div>
									<div className="status--btn">
										<span>신청 완료</span>
										<Button>휴가 신청하기</Button>
									</div>
								</div>
							</div>
						</div>
						<div className="right-page-bottom__data">
							<div className="attendance-status">
								<img
									src="src/assets/images/icon_clipboard_check.svg"
									alt=""
								/>{" "}
								출결 현황
								<br />
								<div className="status-num">
									<div className="num-wrapper">
										<span>출석</span>
										<div className="circle">100</div>
									</div>
									<div className="num-wrapper">
										<span>지각</span>
										<div className="circle">2</div>
									</div>
									<div className="num-wrapper">
										<span>조퇴</span>
										<div className="circle">0</div>
									</div>
									<div className="num-wrapper">
										<span>외출</span>
										<div className="circle">1</div>
									</div>
									<div className="num-wrapper">
										<span>결석</span>
										<div className="circle">0</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="confirm-modal">
				<div className="modal__body">
					<div className="confirm-text">프로필을 수정하시겠습니까?</div>
					<div className="modal__btn-wrapper">
						<Button
							className="confirm-btn"
							onClick={handleClickOff}>
							확인
						</Button>
						<Button
							className="confirm-btn"
							onClick={handleClickOff}>
							취소
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyPage;
