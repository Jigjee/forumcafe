import React from "react";
import IMG1 from "../../asset/bisquit-3314552_1280.jpg";
import IMG2 from "../../asset/cake-1971556_1280.jpg";
import IMG3 from "../../asset/brownie-548591_1280.jpg";
import IMG4 from "../../asset/cake-2001781_1280.jpg";
import IMG5 from "../../asset/cheesecake-2867614_1280.jpg";
import IMG6 from "../../asset/coffee-2179028_1280.jpg";
import { FaRegStar } from "react-icons/fa";

import "./menu.css";

const data = [
  {
    id: 1,
    image: IMG1,
    name: "A bisquit cake.",
  },
  {
    id: 2,
    image: IMG2,
    name: "A milk cake.",
  },
  {
    id: 3,
    image: IMG3,
    name: "A brownie.",
  },
  {
    id: 4,
    image: IMG4,
    name: "A chocolate cake.",
  },
  {
    id: 5,
    image: IMG5,
    name: "A cheese cake.",
  },
  {
    id: 6,
    image: IMG6,
    name: "A black coffee.",
  },
];

const Menu = () => {
  return (
    <section id="menu">
      <h5>Popular</h5>
      <h2>
        <FaRegStar />
        ...Menu...
        <FaRegStar />
      </h2>

      <div className="container menu__container">
        {data.map(({ id, image, name }) => {
          return (
            <article className="menu__item">
              <div className="menu__item-image">
                <img src={image} alt={name} />
              </div>
              <h3>{name}</h3>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Menu;
