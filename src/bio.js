/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import BioText from "./BioText";
import VideoDsply from "./VideoLinks";
import "./App.css";

const Bio = () => {
  return (
    <div
      style={{
        backgroundColor: "rgb(97, 11, 11, 0.2)",
        margin: "0 5% 0 5%",
      }}
    >
      <div id="main">
        <h1 id="title">Jascha Heifetz</h1>
        <h3 id="img-caption">
          <em>
            Jascha Heifetz (February 2, 1901 - December 10, 1987), is
            universally acclaimed <br /> the greatest violinist that ever lived.
          </em>
        </h3>
        <p style={{ marginBottom: "50px" }}>
          <a
            href="#HeifetzClip"
            style={{
              padding: "1%",
              fontFamily: "Verdana, Helvetica, Tahoma, sans-serif",
            }}
          >
            Hear Heifetz play!
          </a>
          <BioText />
          <a
            href="https://en.wikipedia.org/wiki/Jascha_Heifetz"
            target="_blank"
            style={{ textAlign: "left" }}
          >
            {" "}
            Discover more about Heifetz here{" "}
          </a>
        </p>

        <h3>Example of Heifetz's Remarkable Violin Playing</h3>
        <div>
          <div id="HeifetzClip">
            <VideoDsply />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
