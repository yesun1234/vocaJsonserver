import React, { useEffect, useState } from "react";
import dummy from "../db/data.json";
import { Link } from "react-router-dom";

const Day = () => {
  const [days, setDays]=useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/days')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setDays(data);
    });
  },[]);
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
