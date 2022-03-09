import React, {Component} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

class Subject extends Component {
    render(){ // 클래스 안에 소속되는 함수는 function 생략
      return( // 컴포넌트는 반드시 하나의 최상위 태그로 시작해야함 여기서는 hearder 태그
        <header className="header-wrap">
          <div className="logo">
            <a href="/" onClick={function(e){
                  e.preventDefault();
                  // props로 전달된 onChangePage()를 사용
                  this.props.onChangePage();
                }.bind(this)}>{this.props.title}</a>
          </div>
          <div className="writebtn">
            <a href="/create" onClick={function(e){
                  e.preventDefault();
                  this.props.onChangeMode("create");
              }.bind(this)}>
              <FontAwesomeIcon icon={faPenToSquare} className="pentosquare" />
              </a>
          </div>
          <div className="sub">
            {this.props.sub}
          </div>
          <div className="diary-list">
              <ul><li>여기에 일기리스트들 가져옴</li></ul>
          </div>
        </header>
      );
    }
}

export default Subject;