import '../css/Board.css';
import '../css/App.css';

function Board(){
    return (
        <section class="page--static">
            <div id="board-list">
                <div class="container">
                    <table class="board-table">
                        <thead>
                        <tr>
                            <th scope="col" class="th-num">번호</th>
                            <th scope="col" class="th-title">제목</th>
                            <th scope="col" class="th-date">등록일</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>3</td>
                            <th>
                            <a href="#!" class="sub-text">[공지사항] 개인정보 처리방침 변경안내처리방침</a>
                            <p>테스트</p>
                            </th>
                            <td>2017.07.13</td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </section>
        
    )
}

export default Board;