import React, { useState } from 'react'

const WordCheck = ({word}) => {
    const [isShow, setIsHow]=useState(false)
    const [isDone, setIsDone]=useState(word.isDone)

    const toggleShow = () => {setIsHow(!isShow)}
    const toggleIsDone = () =>{setIsDone(!isDone)}

return (
    
        <tr className={isDone ? 'off' : ''}>
            <td>
                <input type="checkbox" onChange={toggleIsDone} checked={isDone}/>
            </td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>

            <td>
                <button onClick={toggleShow}>뜻 {isShow ? '숨기기' : '보기'}</button>
                <button>삭제</button>
            </td>
        </tr>

)
}

export default WordCheck
