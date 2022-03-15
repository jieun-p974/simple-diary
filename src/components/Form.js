// input 버튼이 있는 component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';

const DiaryForm = styled.div`
    display: flex;
`
const EmotionSelect = styled.select`
    font-size: 1.25rem;
    margin-right: 1rem;
    border-radius: 5px;
    &:focus {
        border-color: red;
    }
`
const InputeField = styled.input`
    flex: 1;
    font-size: 1.25rem;
    outline: none;
    border: none;
    border-bottom: 1px solid #e3c565;
`
const CreateButton =styled.button`
    padding: 0.5rem 1rem;
    margin-left: 1rem;
    background: #e3c565;
    border-radius: 5px;
    color: white;
    font-weight: 600;
    cursor: pointer;
    &:hover{
        background: #dfc98a;
    }
`

const Form = ({onCreate}) => {
    const contentInput = useRef();
    const [state, setState] = useState({
        content:"",
        emotion: "😀",
    });
    const handleChangeState = (e)=>{
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = () =>{
        console.log(state);
        // 2글자 미만이면 내용입력칸에 focus
        if(state.content.length < 2){
            contentInput.current.focus();
            alert("내용을 3글자 이상 입력해주세요!")
            return;
        }
        onCreate(state.content, state.emotion);
        alert("저장성공");
        setState({
            content: "",
            emotion: "😀"
        });
    }
    return(
        <DiaryForm>
            <EmotionSelect 
                name='emotion'
                value={state.emotion}
                onChange={handleChangeState}
            >
                <option value={"happy"}>😀</option>
                <option value={"smile"}>🙂</option>
                <option value={"fine"}>😐</option>
                <option value={"sad"}>😢</option>
                <option value={"angry"}>😠</option>
            </EmotionSelect>
            <InputeField 
                ref = {contentInput}
                name='content'
                value={state.content} 
                onChange={handleChangeState}
            />
            <CreateButton onClick={handleSubmit}>
                <FontAwesomeIcon icon={faPencil} />
            </CreateButton>
        </DiaryForm>
    );
}

export default Form;