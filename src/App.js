import React, {Component, useRef, useState} from 'react';
import './App.css';
import DiaryList from './components/DiaryList';
import DiaryTemplate from './components/DiaryTemplate';
import Form from './components/Form';

// state 설정
// const diaryList = [
//     {
//       id:1,
//       content: "hello",
//       emotion: "😢",
//       created_date:new Date().getTime(),
//     },
//     {
//       id:2,
//       content: "happy day",
//       emotion: "😀",
//       created_date:new Date().getTime(),
//     },
//     {
//       id:3,
//       content: "angry",
//       emotion: "😠",
//       created_date:new Date().getTime(),
//     },
// ];

function App() {
  const [data, setData] = useState([]);
  const dateId = useRef(0);
  // 일기 생성 기능 내용이랑 감정 받음
  const onCreate = (content, emotion) => {
    // 생성일 Date이용해서 받아옴
    const created_date = new Date().getTime();
    // 받아온 모든 데이터들로 newThings 배열 생성
    const newThings = {
      content,
      emotion,
      created_date,
      id:dateId.current,
    };
    dateId.current += 1;
    // 기존의 데이터는 date, 새로 추가된 데이터는 newThings
    setData([newThings, ...data]);
  }

  const onDelete = (targetedId) => {
    console.log(`${targetedId} 삭제`);
    // filter로 제거할 리스트의 targetedId외의 요소들로 리스트 새로 생성
    const newDiaryList = data.filter((it)=>it.id !== targetedId);
    console.log(newDiaryList);
    setData(newDiaryList);
  }

  return(
    <DiaryTemplate form={
      <Form onCreate={onCreate} />
    }>
      <DiaryList diarys={data} onDelete={onDelete}/>
    </DiaryTemplate>
  )
}

export default App;
