import React, {useRef, useState} from "react";
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
    background-color:transparent;
    border: none;
    cursor: pointer;

`
const DiaryUpdate = styled.button`
    margin-right: 1rem;
    background-color:transparent;
    border: none;
    cursor: pointer;

`
const Text = styled.div`
    border-top: solid 1px #e3c565;
    word-break: break-all; /* 글자단위로 자름 */
`
const DiaryItem = ({onUpdate, onDelete, content, created_date, emotion, id}) =>{
    const [isUpdate, setIsUpdate] = useState(false); //초기값 false
    const toggle = () => setIsUpdate(!isUpdate);
    const [localContent, setLocalContent] = useState(content); // 기존의 content 값을 초기값으로
    const localContentInput = useRef();
    // 삭제 함수
    const handleRemove = () => {
        if(window.confirm(`${id+1}번째 일기를 삭제하시겠습니까?`)){
            onDelete(id);
        }
    }
    // 수정함수
    const handleUpdate = () => {
        if (localContent.length < 2){
            // 수정하는 글 길이가 짧으면 다시 포커스
            localContentInput.current.focuse();
            alert("일기 내용이 너무 짧아요!");
            return;
        }
        if (window.confirm(`{id + 1}번째 일기를 수정하시겠습니까?`)){
            onUpdate(id, localContent);
            toggle();
        }
    };
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
                <Text>
                    {/* 수정 모드인지 아닌지 */}
                    {isUpdate?(
                        // 수정모드
                        <textarea>
                            ref={localContentInput}
                            value={localContent}
                            onChange={(e)=>setLocalContent(e.target.value)}
                        </textarea>
                    ):(
                        // 읽기모드
                        {content}
                    )}
                    
                </Text>
                <br/>
                <>
                    {isUpdate?(
                                <Buttons>
                                    <button onClick={handleUpdate}>
                                        수정완료<FontAwesomeIcon icon={faPencil} />
                                    </button>
                                </Buttons>
                            ):(
                                // 수정/삭제 버튼 보이게
                                <Buttons>
                                    <DiaryUpdate onClick={toggle}>
                                        수정<FontAwesomeIcon icon={faPencil} />
                                    </DiaryUpdate>
                                    <DiaryRemove onClick={handleRemove}>
                                        삭제<FontAwesomeIcon icon={faEraser} />
                                    </DiaryRemove>
                                </Buttons>
                        )}
                </>
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