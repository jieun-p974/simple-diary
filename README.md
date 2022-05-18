# 이모티콘을 활용한 간단한 일기장
이모티콘과 텍스트를 입력받아 간단한 일기를 작성합니다.  
드롭박스에서 이모티콘을 선택하고 텍스트를 입력하면 입력한 시간과 함께 일기가 저장됩니다.  
입력한 일기를 수정, 삭제가 가능합니다.  

![이모티콘 일기장](https://user-images.githubusercontent.com/84063843/159217536-ff281c63-20d7-4b3c-be39-14107f3188f3.gif)  

## 사용기술
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/> <img src="https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=CSS&logoColor=white"/> <img src="https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=HTML&logoColor=white"/> <img src="https://img.shields.io/badge/Font Awesome-528DD7?style=flat-square&logo=Font Awesome&logoColor=white"/>

## 사용툴
<img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat-square&logo=Visual Studio Code&logoColor=white"/> <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/>
  
## 주요 코드
- 일기를 입력하면 글자수가 3글자 이상인지 확인한 다음에 일기를 생성을 호출
```js
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
            emotion: "😀",
        });
}
```
- 일기 생성 코드
```js
const onCreate = (content, emotion) => {
    // 생성일 Date이용해서 받아옴
    const created_date = new Date().getTime();
    // 받아온 모든 데이터들로 newThings 배열 생성
    const newThings = {
      emotion,
      content,
      created_date,
      id:dateId.current,
    };
    dateId.current += 1;
    // 기존의 데이터는 date, 새로 추가된 데이터는 newThings
    setData([newThings, ...data]);
}
```
- 일기 수정 코드
```js
const onUpdate = (targetedId, newContent) => {
    setData(
      // 선택된 id의 content를 새로 입력받은 newContent로 수정
      data.map((it)=>
        it.id === targetedId ? {...it, content: newContent} : it
      )
    );
};
```
- 일기 삭제 코드
```js
const onDelete = (targetedId) => {
    //선택된 id 값의 해당 일기를 삭제
    console.log(`${targetedId}번째 삭제`);
    // filter로 제거할 리스트의 targetedId외의 요소들로 리스트 새로 생성
    const newDiaryList = data.filter((it)=>it.id !== targetedId);
    setData(newDiaryList);
}
```

## 어려웠던 부분
- 수정 기능
> 실패: content의 타입이 맞지 않아 수정한 값을 입력할 수 없다는 오류가 뜸  
> 성공: filter로 새로 리스트를 생성하고 새로 생성한 값을 저장함으로써 오류 해결
- 삭제 기능
> 실패: 일기를 저정하는 객체 content에 감정, 일기, 생성일만 담아서 선택한 일기를 찾을 수 없었음  
> 성공: id 값도 content에 넣음으로써 id를 찾아가서 해당하는 일기만 삭제할 수 있게 됨
