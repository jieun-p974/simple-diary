import React, {Component} from "react";

class Subject extends Component {
    render(){ // 클래스 안에 소속되는 함수는 function 생략
      return( // 컴포넌트는 반드시 하나의 최상위 태그로 시작해야함 여기서는 hearder 태그
        <header>
              <h1><a href="/" onClick={function(e){
                e.preventDefault();
                // props로 전달된 onChangePage()를 사용
                this.props.onChangePage();
              }.bind(this)}>{this.props.title}</a></h1>
              {this.props.sub}
         </header>
      );
    }
}

export default Subject;