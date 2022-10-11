import React from "react";
import Waitres from "../../asset/waitress-6767345_1280 (1).jpg";

function CT() {
  return (
    <div className="content__bot">
      <div className="content__bot__l">
        <img src={Waitres} alt="waitres" />
      </div>
      <div className="content__bot__r">
        <h2>START YOUR DAY WITH LOVE</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores harum
          reiciendis voluptatibus exercitationem eius cum fuga fugit eveniet
          ipsam nulla.
        </p>
        <a href="#" className="btn btn-primary" target="_blank">
          Create your Order.
        </a>
      </div>
    </div>
  );
}

export default CT;
