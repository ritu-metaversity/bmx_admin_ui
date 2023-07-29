import React, { useState } from "react";

const ScoreCard = ({ mid }) => {
  const [showTv, setShowTv] = useState(false);
  const [scoreTv, setScoreTv] = useState(false);
  console.log(mid, "dsfsdf");

  return (
    <>
      <div className="sub_live_section">
        <div>
          <button onClick={()=>setScoreTv(!scoreTv)} className="fs blink_this">FS</button>
          <button onClick={() => setShowTv(!showTv)} className="fs fs_img">
            <img src="/Images/tv_icon.png" style={{ width: "20px" }} />
          </button>
        </div>
      </div>
      {showTv && (
        <div>
          <iframe
            // src={`https://stream.openhomepageforapi.live/YGapp/play.html?name=ttfour&amp;autoplay=true`}
            src={`http://43.205.116.130/tv.php?eventId=${mid}`}
            width="100%"
            className="score-card"
            title="scorecord"
            allowFullScreen={true}></iframe>
        </div>
      )}
{
    scoreTv &&    <div>
    <iframe
    src={`http://15.207.182.173:3050/event/${mid}?theme=crazy-diamond `}
    width="100%"
    className="score-card"
    title="scorecord"
    allowFullScreen={true}></iframe>
</div>
}
   
      <div>
        <iframe
          src={`https://internal-consumer-apis.jmk888.com/go-score/template/4/${mid}`}
          width="100%"
          className="score-card"
          title="scorecord"
          allowFullScreen={true}></iframe>
      </div>
    </>
  );
};

export default ScoreCard;
