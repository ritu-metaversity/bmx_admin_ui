import Marquee from "react-fast-marquee";
import "./MarqueeTag.scss";

const MarqueeTag = () => {


  const data = "Welcome"

  return (
    <>
      <div className="marque_section">
        <Marquee style={{textTransform:"capitalize"}}>{data}</Marquee>
      </div>
    </>
  );
};

export default MarqueeTag;
