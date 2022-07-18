import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser, faPencil } from "@fortawesome/free-solid-svg-icons";
import styled, { css } from "styled-components";

const DiaryItems = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center; /* 가운데 세로 정렬 */
  transition: all 0.15s;
  user-select: none; /* 드레그 금지 */
  &:hover {
    background: #fdefb2;
  }
  &:hover .DiaryRemove {
    opacity: 1;
  }
`;
const Info = styled.div`
  flex: 1;
  border: #e3c565 solid 1px;
  padding: 1rem;
`;
const Buttons = styled.div`
  text-align: center;
  display: inline-flex;
  width: 100%;
  justify-content: space-around;
`;
const DiaryRemove = styled.button`
  margin-right: 1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
const DiaryUpdate = styled.button`
  margin-right: 1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
const Text = styled.div`
  border-top: solid 1px #e3c565;
  word-break: break-all; /* 글자단위로 자름 */
`;
const InputArea = styled.textarea`
  width: 100%;
  font-size: 20px;
`;

const DiaryItem = ({
  onUpdate,
  onDelete,
  content,
  created_date,
  emotion,
  id,
}) => {
  const [updated, setUpdated] = useState(false);
  const toggle = () => setUpdated(!updated); // update 버튼 눌렀는지 아닌지 확인
  const [localContent, setLocalContent] = useState(content);
  const localContentInput = useRef();

  // 삭제 함수
  const handleRemove = () => {
    if (window.confirm(`${id + 1}번째 일기를 삭제하시겠습니까?`)) {
      onDelete(id);
    }
  };

  const handleQuitUpdated = () => {
    // 수정 취소하면 setUpdated를 false로하고 원래 값 그대로 넣어서 출력
    setUpdated(false);
    setLocalContent(content);
  };

  const handleUpdate = () => {
    // 수정확인 받고 내용 업데이트
    if (window.confirm(`${id + 1}번째 일기를 수정하겠습니까?`)) {
      onUpdate(id, localContent);
      toggle();
    }
  };

  return (
    <DiaryItems>
      <Info>
        <span>작성일 : {new Date(created_date).toLocaleString()}</span>
        <br />
        <span>기분 : {emotion}</span>
        <br />
        {updated ? (
          <Text>
            <InputArea
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
            ></InputArea>
          </Text>
        ) : (
          <Text>{content}</Text>
        )}
        <br />
        {updated ? (
          <Buttons>
            <button onClick={handleUpdate}>수정 완료👌</button>
            <button onClick={handleQuitUpdated}>수정 취소</button>
          </Buttons>
        ) : (
          <Buttons>
            <DiaryUpdate onClick={toggle}>
              수정
              <FontAwesomeIcon icon={faPencil} />
            </DiaryUpdate>
            <DiaryRemove onClick={handleRemove}>
              삭제
              <FontAwesomeIcon icon={faEraser} />
            </DiaryRemove>
          </Buttons>
        )}
      </Info>
    </DiaryItems>
  );
};

export default DiaryItem;
