import React, {Component} from 'react';

class UpdateContent extends Component {
    constructor(props){
      super(props);
      this.state={
        id: this.props.data.id,
        title:this.props.data.title,
        desc:this.props.data.desc
      }
      this.inputFormHandler = this.inputFormHandler.bind(this);
    }
    // 코드 중복 제거를 위해 함수 생성
    inputFormHandler(e){
      this.setState({[e.target.name]:e.target.value});
    }
    render(){
      console.log(this.props.data);
      console.log("UpdateContent render");
      return(
        <article>
          <h2>Update</h2>
          <form 
            action="/create_process" method="post"
            onSubmit={function(e){
              // submit을 해도 페이지가 바뀌지 않게
              e.preventDefault();
              // debugger;
              this.props.onSubmit(
                this.state.id,
                this.state.title, 
                this.state.desc
              );
            }.bind(this)}
          >
            <input type="hidden" name="id" value={this.state.id}></input>
            <p>
              <input 
                type="text" 
                name="title" 
                placeholder="title"
                // props의 데이터는 readOnly라서 value로 바로 넣을 수 없어서 state화 해줘야함
                value={this.state.title}
                // state화 하고 onChange도 적어야함
                onChange={this.inputFormHandler}>
              </input>
            </p>
            <p>
              <textarea 
                name="desc" 
                placeholder="description"
                value={this.state.desc}
                onChange={this.inputFormHandler}
              >
              </textarea>
            </p>
            <p><input type="submit"></input></p>
          </form>
        </article>
      );
    }
}

export default UpdateContent;