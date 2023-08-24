import React from "react";
import Marquee from "react-fast-marquee";
import { Outlet } from "react-router-dom";
import "./MarqueeTag.scss";

const MarqueeTag = () => {
  const host = window.location.hostname.split(".")[1];

  return (
    <>
      <div className="marque_section">
        <Marquee>Welcome to {host}</Marquee>
      </div>
    </>
  );
};

export default MarqueeTag;
