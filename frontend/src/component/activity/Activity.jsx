import React from "react";
import "./activity.css";
import ACT1 from "../../asset/shelf-3290109_1280 (1).jpg";
import ACT2 from "../../asset/student-849825_1280 (1).jpg";
import ACT3 from "../../asset/laptop-1478822_1280.jpg";
import { FaRegStar } from "react-icons/fa";

const data = [
  {
    id: 1,
    title: "Learning space",
    image: ACT1,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime dolor sit amet consectetur adipisicing elit. repellendus veritatis, impedit ut architecto voluptatibus fuga autem labore qui aperiam!",
  },
  {
    id: 2,
    title: "Playground",
    image: ACT2,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime repellendus veritatis, impedit ut architecto voluptatibus fuga autem labore qui aperiam!",
  },
  {
    id: 3,
    title: "Working space",
    image: ACT3,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit.dolor sit amet consectetur adipisicing dolor sit amet consectetur adipisicing elit.elit. Maxime repellendus veritatis, impedit ut architecto voluptatibus fuga autem labore qui aperiam!",
  },
];

const Activity = () => {
  return (
    <section id="activity">
      <h5>Enjoy with..</h5>
      <h2>
        <FaRegStar />
        ...Activity...
        <FaRegStar />
      </h2>
      <div className="container activity__container">
        {data.map(({ id, image, title, description }) => {
          return (
            <article className="activity__item">
              <div className="activity__item-image">
                <img src={image} alt={title} />
              </div>
              <div className="sub__item">
                <h3>{title}</h3>
                <h4>{description}</h4>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Activity;
