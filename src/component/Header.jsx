import React from "react";
import { Link } from "react-router-dom";
import CreateWord from "./CreateWord";

const Header = () => {
  return (
    <div className="header">
      <div>
        <h2>
          <Link to="/">토익 영단어(고급)</Link>
        </h2>
      </div>
      <div>
        <button>
          <Link to="create_word">
            단어 추가
          </Link>
          </button>
        <button>
          <Link to="create_day">
            Day 추가
          </Link>
          </button>
      </div>
    </div>
  );
};

export default Header;
