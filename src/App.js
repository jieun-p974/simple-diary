import React, {Component} from 'react';
import './App.css';
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import Subject from './components/Subject';
import Control from './components/Control';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import { FirebaseApp } from '@firebase/app';

/*
function App() {
  return (
    <div className="App">
      Hello, React!!!
    </div>
  );
}
*/

class App extends Component {
  // render 보다 먼저 실행되면서 컴포넌트를 초기화 시켜주고 싶은 코드는 constructor안에다가 코드 작성
  constructor(props){
    // state값 초기화하고 초기 값으로 Subject 태그 값 세팅
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode:"welcome",
      selected_content_id:2,
      subject : {title:"{Daily Diary}", sub:"오늘은 어떤 일이 있었나요?"},
      welcome : {title:"welcome", desc:"리스트 아무것도 없으면 이거 출력"},
      contents: [ // 내용이 많아서 배열 활용[]
        {id:1, title:"HTML", desc:"HTML is for information"},
        {id:2, title:"CSS", desc:"CSS is for design"},
        {id:3, title:"JavaScript", desc:"JavaScript is for interaction"}
      ]
    }
  }
  getReadContent(){
    var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          return data;
          break;
        }
        i = i+1;
      }
  }

  // 코드가 너무 복잡해서 새로운 함수를 생성해서 랜더 코드를 가볍게
  getContent(){
    var _title,_desc, _article = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } 
    else if(this.state.mode === 'read'){
      var _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
    } 
    else if(this.state.mode =="create"){
      _article = <CreateContent onSubmit={function(_title,_desc){
        // this.state.contents 를 통해서 새로운 컨텐트 값을 추가
        this.max_content_id = this.max_content_id + 1;
        var _contents = Array.from(this.state.contents);
        _contents.push({id:this.max_content_id, title:_title, desc:_desc});
        // setState를 통해 알려줘야함
        this.setState({
          contents:_contents,
          mode:"read",
          selected_content_id:this.max_content_id
        });
      }.bind(this)}></CreateContent>
    } else if(this.state.mode =="update"){
      _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={
        function(_id,_title,_desc){
          // original contents를 바꾸지 않고 Arry.from으로 복제해서 수정
          var _contents = Array.from(this.state.contents);
          var i = 0;
          while(i < _contents.length){
            if(_contents[i].id === _id){
              _contents[i] = {id:_id, title:_title, desc:_desc};
              break;
            }
            i = i + 1;
          }
          this.setState({
            contents:_contents,
            // 모드를 변경해서 변경한 것을 바로 보여줌
            mode:"read"
          });
          console.log(_title,_desc);  
        }.bind(this)}></UpdateContent>
    }
    return _article;
  }

  // props나 state가 바뀌면 해당되는 render함수가 호출됨(화면 재호출)
  render() {
    console.log("App render");
    return(
      <div className='App'>
        <div className='contents'>
          <Subject 
            title={this.state.subject.title} 
            sub={this.state.subject.sub}
            // 이벤트 생성
            onChangePage={function(){
              this.setState({mode:"welcome"});
            }.bind(this)}
            onChangeMode={function(_mode){
              this.setState({
                mode:_mode
              });
            }.bind(this)}
          >
          </Subject>
          {this.getContent()}
        </div>
        {/* <Control 
          onChangeMode={function(_mode){
          if(_mode === "delete"){
            // 확인을 누르면 true가 됨
            if(window.confirm("really??")){
              var _contents = Array.from(this.state.contents)
              var i = 0;
              while(i < _contents.length){
                if(_contents[i].id === this.state.selected_content_id){
                  // splice 어디서 부터 어디까지 지울 것인지 설정
                  _contents.splice(i,1);
                  break;
                }
                i = i + 1;
              }
              this.setState({
                mode:'welcome',
                contents:_contents
              });
              alert("deleted!!");
            }
          }else{
            this.setState({
              mode:_mode
            });
          }
        }.bind(this)}>
        </Control> */}
        <TOC 
          onChangePage={function(id){
            this.setState({
              mode:"read",
              selected_content_id:Number(id)
            });
          }.bind(this)}
          data={this.state.contents}
        ></TOC>
        ↑파이어베이스에서 불러온 메모 리스트
      </div>
    );
  }
}

export default App;
