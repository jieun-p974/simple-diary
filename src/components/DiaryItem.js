import React, {Component} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser,faPencil } from "@fortawesome/free-solid-svg-icons";
import styled, { css } from 'styled-components';

const DiaryItems = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center; /* 가운데 세로 정렬 */
    transition: all 0.15s;
    user-select: none; /* 드레그 금지 */
    &:hover{
        background: #fdefb2;
    }
    &:hover .DiaryRemove{
        opacity: 1;
    }
`
const Info = styled.div`
    flex:1;
    border: #e3c565 solid 1px;
    padding: 1rem;
`
const Buttons = styled.div`
    text-align:center;
    display: inline-flex;
    width: 100%;
    justify-content:space-around;
`
const DiaryRemove = styled.button`
    margin-right: 1rem;
    color: #e3c565;
    background-color:transparent;
    border: none;
    cursor: pointer;

`
const DiaryUpdate = styled.button`
    margin-right: 1rem;
    color: #e3c565;
    background-color:transparent;
    border: none;
    cursor: pointer;

`
const Text = styled.div`
    border-top: solid 1px #e3c565;
    word-break: break-all; /* 글자단위로 자름 */
`
const DiaryItem = ({onDelete, content, created_date, emotion, id}) =>{
    return(
        <DiaryItems>
            <Info>
                <span>
                    작성일 : {new Date(created_date).toLocaleString()}
                </span>
                <br/>
                <span>
                    기분 : {emotion}
                </span>
                <br/>
                <Text>{content}</Text>
                <br/>
                <Buttons>
                    <DiaryRemove onClick={()=>{
                        if(window.confirm(`${id+1}번째 일기를 삭제하시겠습니까?`)){
                            onDelete(id);
                        }
                    }}
                    >
                        <FontAwesomeIcon icon={faEraser} size="2x" />
                    </DiaryRemove>
                    <DiaryUpdate>
                        < FontAwesomeIcon icon={faPencil} size="2x" />
                    </DiaryUpdate>
                </Buttons>
            </Info>
        </DiaryItems>
    )
}

// class DiaryItem extends Component{
//     render(){
//         // text: 일기내용
//         // id : 일기 고유 아이디
//         // onRemove : 아이템을 삭제시키는 함수
//         const { text, chekced, onTaggle, id, onRemove } = this.props;
//         return(
//             <DiaryItems onClick={()=> onTaggle(id)}>
//                 <Text>{text}</Text>
//                 <DiaryRemove onClick={(e)=>{
//                     //해당 이벤트가 부모 이벤트까지 전달되지 않도록 해줌
//                     e.stopPropagation(); 
//                     onRemove(id)
//                 }}>
//                     <FontAwesomeIcon icon={faEraser} size="2x" className="eraser" />
//                 </DiaryRemove>
//             </DiaryItems>
//         );
//     }
// }

export default DiaryItem;