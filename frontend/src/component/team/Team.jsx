import React from "react";
import "./team.css";
import AVT1 from "../../asset/avatar1.jpg";
import AVT2 from "../../asset/avatar2.jpg";
import AVT3 from "../../asset/avatar3.jpg";
import AVT4 from "../../asset/avatar4.jpg";
import { FaRegStar } from "react-icons/fa";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVT1,
    name: "Tina Snow",
    job: "STAFF",
  },
  {
    avatar: AVT2,
    name: "Shatta Wale",
    job: "STAFF",
  },
  {
    avatar: AVT3,
    name: "Kwame Despite",
    job: "Barista",
  },
  {
    avatar: AVT4,
    name: "Nana Ama McBrown",
    job: "Barista",
  },
];

const Team = () => {
  return (
    <section id="teams">
      <h5>Meet our...</h5>
      <h2>
        <FaRegStar />
        ...Team...
        <FaRegStar />
      </h2>

      <Swiper
        className="container teams__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, job }, index) => {
          return (
            <SwiperSlide className="teams">
              <div className="team__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="avatar__name">{name}</h5>
              <small className="avatar__job">{job}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Team;
