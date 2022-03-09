import React, {Component} from 'react';

// 리스트에서 선택한 일기 자세한 내용 보여주는 컴포넌트
class DetailDiary extends Component {
    render(){
      return(
        <div className='diary'>
            <ul>
                <li>일기 제목</li>
                <li>내용</li>
                <li>작성일시</li>
            </ul>
        </div>
      );
    }
}

export default DetailDiary;