import '../css/App.cs';

function Info(){
    return (
        <div class="content__text">
            <h3>팀 소개(introduce)</h3>
            <img src="assets/mainleft.jpg" alt="Some image" />
            <p>
                블루슬리퍼즈(blueslippers)는 사회적 공동체 형성 및 통합이라는 비전을 기반으로 조직된 팀입니다.
            </p>
            <p>
                군에서 형성되었으며, 3군과 사회와의 연결을 목표로 짬타이거(JJAMTIGGER)라는 첫 서비스를 제작 중입니다.
                
                블루슬리퍼즈는 앱 기반의 서비스 뿐만 아니라 추후 게임 산업에도 참여하여 개개인의 이상을 펼치며 사회 구성원이 함께 동참하는 서비스를 제작할 예정입니다.
            </p>
            <br><h3>팀원 소개(Team members)</h3>
            <div class="wrapper">
                <ul class="team">
                    <li class="team-item">
                        <div class="profile">
                            <img src="assets/maincenter.jpg" alt="Some image" />
                            <div class="profile-contents">
                                <h2>김승우<span>email: pink_dumbbel@blueslippers.team</span></h2>
                                <p>반갑습니다! 클라이언트 및 back-end 개발을 담당하고 있는 김승우입니다.</p>
                            </div>
                        </div>
                    </li>
                    <li class="team-item"> 
                        <div class="profile">
                            <img src="assets/maincenter.jpg" alt="Some image" />
                            <div class="profile-contents">
                                <h2>이승주<span>email: grean_belt@blueslippers.team </span></h2>
                                <p>웹 back-end(서버) 개발 및 경영 마케팅을 담당하고 있는 이승주입니다.</p>
                            </div>
                        </div>
                    </li>
                    <li class="team-item">
                        <div class="profile">
                            <img src="assets/maincenter.jpg" alt="Some image" />
                            <div class="profile-contents">
                                <h2>임규진<span>email: khaki_pants@blueslippers.team  </span></h2>
                                <p>UI/UX 디자인 및 컨셉을 담당하는 임규진입니다.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Info;