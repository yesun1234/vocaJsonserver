import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WordCheck from "./WordCheck";
const Word = () => {
  const { day } = useParams();
  const [words, setWords] = useState([]);


    useEffect(() => {
      fetch(`http://localhost:3001/words?day=${day}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setWords(data);
      });
    },[day]);
  return (
    <div className="word">
      <h2>Day {day}</h2>

      <table>
        <tbody>
          {words.map(word => (
           <WordCheck word={word} key={word.day}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Word;
