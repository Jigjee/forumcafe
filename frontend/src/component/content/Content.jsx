import React from "react";
import "./content.css";
import Cof from "../../asset/coffee-2179028_1280.jpg";
import CT from "./CT";

const Content = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="content__top">
          <h5>Forum Cafe</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur itaque dolore ipsa aliquam libero eum vel nostrum aut
            quia quae.
          </p>
        </div>

        <div className="cover">
          <img src={Cof} alt="coffee" />
        </div>

        <CT />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Content;
