import React, {Component} from 'react';
import DiaryItem from './DiaryItem';
import styled, { css } from 'styled-components';

const DiaryLists = styled.div`
  padding: 1rem;
`

const DiaryList = ({onDelete, diarys}) => {
  return(
    <DiaryLists>
      <h4>{diarys.length}개의 일기가 있습니다.</h4>
      <div>
        {diarys.map((it)=>(
          <DiaryItem key = {it.id} {...it} onDelete={onDelete} />
        ))}
      </div>
    </DiaryLists>
  );
}

DiaryList.defaultProps = {
  diarys: [],
};

export default DiaryList;