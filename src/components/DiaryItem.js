import React, {Component} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser, faPencil } from "@fortawesome/free-solid-svg-icons";
import styled, { css } from 'styled-components';

const Title = styled.div`
    font-size: 20px;
`
const DiaryDate = styled.div`
    font-size: 10px;
    color: #bda55d;
`
const DiaryContent = styled.div`
    font-size: 10px;
`
const RmorMd = styled.div`
    flex:2;
    text-align: center;
`

class DiaryItem extends Component{
    render(){
        return(
            <ul>
                <Title>제목</Title>
                <DiaryDate>날짜</DiaryDate>
                <DiaryContent>일기내용</DiaryContent>
                <RmorMd>
                    <a href="/update" onClick={function(e){
                        e.preventDefault();
                        this.props.onChangeMode("update");
                    }.bind(this)}>
                    <FontAwesomeIcon icon={faPencil} size="2x" className="pencil" />
                    </a>
                    <FontAwesomeIcon icon={faEraser} size="2x" className="eraser" />
                </RmorMd>
            </ul>
        );
    }
}
// function DiaryItem({title, content, date}){
    
// }

export default DiaryItem;