import React, {Component} from 'react';

// firebase로 저장해둔 거 리스트 받아온거 여기서 사용
class DiaryList extends Component {
    render(){
      // 배열 lists에 새로운 data의 길이 만큼 반복하면서 값을 추가
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length){
        // 여러개의 elements를 자동 생성하면 오류 생김
        // 각각의 리스트 항목들은 key라는 props 항목이 필요함
        // key는 식별자여야함 그래서 여기서는 id 값을 사용
        lists.push(
          <li>
            <a 
              href={"/content/"+data[i].id}
              data-id = {data[i].id}
              onClick={function(e){
                e.preventDefault();
                this.props.onChangePage(e.target.dataset.id);
              }.bind(this)}
              >{data[i].title}
            </a>
          </li>);
        i = i + 1;
      }
      return(
        <nav>
              <ul>
                  {lists}
              </ul>
         </nav>
      );
    }
}

export default DiaryList;