import React, {Component} from 'react';
import DiaryItem from './DiaryItem';
import styled, { css } from 'styled-components';

const DiaryLists = styled.div`
  padding: 1rem;
`
// App.js에서 props 전달 받음(onDelete, diarys, onUpdate)
const DiaryList = ({onDelete, diarys, onUpdate}) => {
  return(
    <DiaryLists>
      <h4>{diarys.length}개의 일기가 있습니다.</h4>
      <div>
        {diarys.map((it)=>(
          // DiaryItem으로 props 전달(onDelete, onUpdate)
          <DiaryItem key = {it.id} {...it} onDelete={onDelete} onUpdate={onUpdate} />
        ))}
      </div>
    </DiaryLists>
  );
}

DiaryList.defaultProps = {
  diarys: [],
};

export default DiaryList;