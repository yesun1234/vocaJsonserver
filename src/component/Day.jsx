import React, { /*useEffect, useState */} from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Day = () => {
  const days = useFetch('http://localhost:3001/days');
  
  // const [days, setDays]=useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:3001/days')
  //   .then(res => {
  //     return res.json();
  //   })
  //   .then(data => {
  //     setDays(data);
  //   });
  // },[]);
  return (
    <div className="day">
      <ul>
        {days.map((days) => (
          <li key={days.id}>
            <Link to={`/day/${days.day}`}>Day{days.day}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Day;
