import React from 'react'
import useFetch from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom'

const CreateDay = () => {
    const days = useFetch('http://localhost:3001/days')
    const history = useNavigate()
    const addDay = (e) => {
        fetch(`http://localhost:3001/days/`,{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                day : days.length + 1,
            })
        }).then(res=>{
            if(res.ok){
                alert("생성이 완료되었습니다."); 
                history(`/`);
            }
        })
    }
  return (
    <div>
      <button>현재 일 수: {days.length}일</button>
      <button onClick={addDay}>Day 추가</button>
    </div>
  )
}

export default CreateDay
