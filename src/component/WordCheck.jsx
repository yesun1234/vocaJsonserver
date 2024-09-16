import React, { useState } from 'react'

const WordCheck = ({word}) => {
    const [isShow, setIsHow]=useState(false)
    const [isDone, setIsDone]=useState(word.isDone)

    const toggleShow = () => {setIsHow(!isShow)}
    const toggleIsDone = () =>{
        fetch(`http://localhost:3001/words/${word.id}`,{
            method : "PUT",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                ...word,
                isDone : !isDone
            })
        }).then(res=>{
            if(res.ok){
                setIsDone(!isDone)
            }
        })
    }
   // 단어 삭제
   const del = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          setIsDone(null); // 삭제된 단어는 화면에서 제거
        }
      });
    }
  };

  // 단어가 삭제되었을 경우 화면에서 렌더링하지 않음
  if (isDone === null) {
    return null;
  }

return (
    
        <tr className={isDone ? 'off' : ''}>
            <td>
                <input type="checkbox" onChange={toggleIsDone} checked={isDone}/>
            </td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>

            <td>
                <button onClick={toggleShow}>뜻 {isShow ? '숨기기' : '보기'}</button>
                <button onClick={del}>삭제</button>
            </td>
        </tr>

)
}

export default WordCheck
