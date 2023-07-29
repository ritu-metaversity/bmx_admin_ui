import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BiTimeFive } from "react-icons/bi";
import { useActiveMatchQuery } from "../../../../../store/service/ActiveMatcheService";

const MoreEvent = () => {
  const { data } = useActiveMatchQuery();

  console.log(data?.data, "sdasdsa");
  const nav = useNavigate()

  const handleDetails = (id)=>{
    nav(`/Events/${id}/live-report`)
  }
  const {id: matchId} = useParams()
  return (
    <>
      <div>
        <div className="sub_live_section" style={{ marginTop: "35px" }}>
          <div style={{ padding: "5px 8px", fontSize: "16px" }}>
            More Events
          </div>
        </div>
        <div className="event_section">
          <table className="">
            {(data?.data)?.slice(0,6).map((res, id) => {
              if(res?.matchId == matchId) return <></>;
              return (
                <tr
                  onClick={()=>handleDetails(res?.matchId)}
                  key={id}>
                  <td className="sportName">
                    <Link>
                      <p className="sport_title">{res?.matchName}</p>
                      <p className="date_section">
                        <BiTimeFive /> {res?.openDate}
                      </p>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};

export default MoreEvent;
