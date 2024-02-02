import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const ScoreCard = ({ mid }) => {
  const [showTv, setShowTv] = useState(false);
  const [scoreTv, setScoreTv] = useState(false);
  const nav = useNavigate()

  const ref = useRef(null)
  const scale = (ref.current?.clientWidth || 300) / 280
  
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
        <div className="show_btn">
          <button onClick={()=>nav(-1)}>Back</button>
        </div>
      </div>
      {showTv && (
        <div className="tv-score-container">
          <iframe
          ref={ref}
            // src={`https://stream.openhomepageforapi.live/YGapp/play.html?name=ttfour&amp;autoplay=true`}
            // src={`http://43.205.116.130/tv.php?eventId=${mid}`}
            src={`https://100tun.online/web/${mid}.html`}
            width="100%"
            style={{
              aspectRatio: "16/9",
              transform: `scale(${scale})`,
            }}
            className="score-card tv-iframe"
            title="scorecord"
            allowFullScreen={true}></iframe>
        </div>
      )}
      {scoreTv && (
        <div>
          <iframe
          // src={`https://internal-consumer-apis.jmk888.com/go-score/template/4/${mid}`}
          // src={`https://score.247idhub.com/go-score/template/4/${mid}`}
          src={`https://score.247idhub.com/index.html/event/${mid}?theme=crazy-diamond`}
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
