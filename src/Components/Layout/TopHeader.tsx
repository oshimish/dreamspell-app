import React from "react";
import { Link } from "react-router-dom";

import "./TopHeader.css";

export const TopHeader = () => {
  return (
    <div className="top-header">
      <div className="left-menu">
        <ul className="menu">
          <li>
            <Link to="/">Кин</Link>
          </li>
          <li>
            <Link to="/tone">Тон</Link>
          </li>
          <li>
            <Link to="/sign">Печать</Link>
          </li>
          <li>
            <Link to="/plasma">Плазма</Link>
          </li>
          <li>
            <Link to="/oracle">Оракул</Link>
          </li>
          <li>
            <Link to="/zolkin">Цолькин</Link>
          </li>
          <li>
            <Link to="/moon">Луна</Link>
          </li>
          <li>
            <Link to="/wavespell">Волновой модуль</Link>
          </li>
          {/* <li>
            <Link to="/journey">Путешествие</Link>
          </li> */}
          <li>
            <Link to="/year">Год</Link>
          </li>
        </ul>
      </div>
      {/* <div className="right-menu">
        <ul className="menu">
          <li>
              <Link to="/">&lt;&lt;</Link>
            </li>
          <li>
          </li>
          <li>
              <Link to="/sign">&gt;&gt;</Link>
            </li>
        </ul>
      </div> */}
    </div>
  );
};

export default TopHeader;
