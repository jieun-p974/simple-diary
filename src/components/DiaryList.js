import React, {Component} from 'react';
import styled, { css } from 'styled-components';
import DiaryItem from './DiaryItem';

const DiaryListBlock = styled.div`
  flex: 1;
  background-color: green;
  over-flow-x: auto;
  padding-right:50px;
`;

// firebase로 저장해둔 거 리스트 받아온거 여기서 사용
class DiaryList extends Component {
    render(){
      return(
        <DiaryListBlock>
          <DiaryItem></DiaryItem>
        </DiaryListBlock>
      );
    }
}

export default DiaryList;