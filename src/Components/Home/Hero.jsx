import React from "react";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="banner">
        <h1>Welcome to our Health Care Hospital</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          quisquam optio necessitatibus vero quasi excepturi ex ipsum nihil
          porro harum architecto hic, alias nam eius placeat perferendis
          consequuntur ratione. Ratione eaque quidem repellat in! Minus, ullam.
          Aliquid, ex enim impedit asperiores sed eum deleniti qui ea dolorum,
          minima molestias non!
        </p>
      </div>
      <div className="banner">
        <img src="hero.png" className="animated-image" alt="hero image" />
        <span>
          <img src="Vector.png" alt="vactor" />
        </span>
      </div>
    </div>
  );
};

export default Hero;
