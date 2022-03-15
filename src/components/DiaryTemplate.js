// diary의 기본적인 형태 component
import React from "react";
import styled, { css } from 'styled-components';

const Diary_Template = styled.div`
    background : #fdefb2;
    width:512px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    margin: 0 auto;
    margin-top: 4rem
`
const Title = styled.div`
    padding: 2rem;
    font-size: 2rem;
    text-align: ceter;
    background: #e3c565;
    color: white;
`
const FontWrap = styled.section`
    padding: 1rem;
    border-bottom: 1px solid #e3c565;
`
const DiaryWrap = styled.section`
    min-height: 5rem;
`

// (props)=>{}를 비구조화 할당하여 ({form, children}) => {}로 작성
const DiaryTemplate = ({form, children}) => {
    return(
        <Diary_Template>
            <Title>
                오늘은 어떤 일이 있었나요?
            </Title>    
            <FontWrap>
                {form}
            </FontWrap>
            <DiaryWrap>
                {children}
            </DiaryWrap>
        </Diary_Template>
    );
};

export default DiaryTemplate;