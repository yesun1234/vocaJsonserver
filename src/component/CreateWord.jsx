import React, { useRef } from 'react'
import useFetch from '../hooks/useFetch'
import { useNavigate } from 'react-router-dom';

const CreateWord = () => {
    const days = useFetch('http://localhost:3001/days');
    const history = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(dayRef.current.value);
        console.log(korRef.current.value);
        console.log(engRef.current.value);
    
            fetch(`http://localhost:3001/words/`,{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    day : dayRef.current.value,
                    eng : engRef.current.value,
                    kor : korRef.current.value,
                    isDone : false
                })
            }).then(res=>{
                if(res.ok){
                    alert("생성이 완료되었습니다."); 
                    history(`/day/${dayRef.current.value}`)
                }
            })
        }
    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);
  return (
   <form onSubmit={onSubmit}>
    <div className='input_area'>
        <label>Eng</label>
        <input type="text" placeholder='computer' ref={engRef}/>
    </div>
    <div className='input_area'>
        <label>Kor</label>
        <input type='text' placeholder='컴퓨터' ref={korRef}/>
    </div>
    <label>Day</label>
    <div className='input_area'>
        <select ref={dayRef}>
            {days.map(day =>(
                <option key={day.id} value={day.day}>{day.day}</option>
            ))}
        </select>
    </div>
    <div className='input_area'></div>
    <button>저장</button>
   </form>
  )
}

export default CreateWord
