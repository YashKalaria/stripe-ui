import React from "react";
import { useGlobalContext } from "./context";
import phoneImg from "./images/phone.svg";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quo.
            Placeat aspernatur cum, aperiam in deserunt sequi eius vitae
            repellat delectus! Assumenda enim aut cumque recusandae quia ut
            dolores nisi.
          </p>
          <button className="btn">Start Now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className="img" alt="phonee" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
