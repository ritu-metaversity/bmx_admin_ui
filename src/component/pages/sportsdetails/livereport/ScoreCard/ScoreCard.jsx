import React, { useState } from "react";

const ScoreCard = ({ mid }) => {
  const [showTv, setShowTv] = useState(false);
  const [scoreTv, setScoreTv] = useState(false);

  const handleShowTv = ()=>{
    if(setShowTv === true){
      setShowTv(false);
    }else{
      setShowTv(true);
      setScoreTv(false);
    }
  }
  const handleScorrTv = ()=>{
    if(scoreTv === true){
      setScoreTv(false);
    }else{
      setScoreTv(true);
      setShowTv(false);

    }
  }

  return (
    <>
      <div className="sub_live_section">
        <div>
          <button
            onClick={handleScorrTv}
            className="fs blink_this">
            FS
          </button>
          <button onClick={handleShowTv} className="fs fs_img">
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
      {scoreTv && (
        <div>
          <iframe
          src={`https://internal-consumer-apis.jmk888.com/go-score/template/4/${mid}`}
          width="100%"
          height="284px;"
          className="score-card"
          title="scorecord"
        
          allowFullScreen={true}></iframe>
        </div>
      )}

    </>
  );
};

export default ScoreCard;
