import React from "react";
import Marquee from "react-fast-marquee";
import { Outlet } from "react-router-dom";
import "./MarqueeTag.scss";
import { useUserMessageQuery } from "../../../store/service/supermasteAccountStatementServices";

const MarqueeTag = () => {
  const {data} = useUserMessageQuery()

  return (
    <>
      <div className="marque_section">
        <Marquee style={{textTransform:"capitalize"}}>{data?.message}.</Marquee>
      </div>
    </>
  );
};

export default MarqueeTag;
