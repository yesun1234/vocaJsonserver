import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div>
        <h2>
          <Link to="/">토익 영단어(고급)</Link>
        </h2>
      </div>
      <div>
        <button>단어 추가</button>
        <button>Day 추가</button>
      </div>
    </div>
  );
};

export default Header;
