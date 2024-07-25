/* eslint-disable react/prop-types */
import { Link, useNavigate, useParams } from "react-router-dom";
import { BiTimeFive } from "react-icons/bi";


const data = [
  {
      "matchName": "Ireland v Zimbabwe",
      "matchId": 33435984,
      "marketId": "1.230971480",
      "openDate": "2024-07-25 15:30:00",
      "maxBet": 1,
      "minBet": 100,
      "maxBetRate": 100,
      "minBetRate": 0,
      "inPlay": false,
      "team1Back": 1.93,
      "team1Lay": 1.94,
      "team2Back": 3.7,
      "team2Lay": 3.75,
      "drawBack": 4.6,
      "drawLay": 4.7,
      "bm": true,
      "F": true,
      "GM": false,
      "SM": false,
      "channelId": null
  },
  {
      "matchName": "Surrey v Yorkshire",
      "matchId": 33438617,
      "marketId": "1.231003510",
      "openDate": "2024-07-25 15:30:00",
      "maxBet": 1,
      "minBet": 100,
      "maxBetRate": 100,
      "minBetRate": 0,
      "inPlay": false,
      "team1Back": 2.18,
      "team1Lay": 2.22,
      "team2Back": 1.81,
      "team2Lay": 1.84,
      "drawBack": 0,
      "drawLay": 0,
      "bm": true,
      "F": true,
      "GM": false,
      "SM": false,
      "channelId": null
  },
  {
      "matchName": "Glamorgan v Gloucestershire",
      "matchId": 33438620,
      "marketId": "1.231003444",
      "openDate": "2024-07-25 15:30:00",
      "maxBet": 1,
      "minBet": 100,
      "maxBetRate": 100,
      "minBetRate": 0,
      "inPlay": false,
      "team1Back": 2.06,
      "team1Lay": 2.24,
      "team2Back": 1.81,
      "team2Lay": 1.93,
      "drawBack": 0,
      "drawLay": 0,
      "bm": true,
      "F": true,
      "GM": false,
      "SM": false,
      "channelId": null
  },
  {
      "matchName": "Manchester Originals Women v Welsh Fire Women",
      "matchId": 33422448,
      "marketId": "1.230782275",
      "openDate": "2024-07-25 19:30:00",
      "maxBet": 1,
      "minBet": 100,
      "maxBetRate": 100,
      "minBetRate": 0,
      "inPlay": false,
      "team1Back": 1.7,
      "team1Lay": 1.71,
      "team2Back": 2.4,
      "team2Lay": 2.42,
      "drawBack": 0,
      "drawLay": 0,
      "bm": true,
      "F": true,
      "GM": false,
      "SM": false,
      "channelId": null
  },
  {
      "matchName": "Manchester Originals v Welsh Fire",
      "matchId": 33422277,
      "marketId": "1.230780984",
      "openDate": "2024-07-25 23:00:00",
      "maxBet": 1,
      "minBet": 100,
      "maxBetRate": 100,
      "minBetRate": 0,
      "inPlay": false,
      "team1Back": 1.96,
      "team1Lay": 1.97,
      "team2Back": 2.02,
      "team2Lay": 2.06,
      "drawBack": 0,
      "drawLay": 0,
      "bm": true,
      "F": true,
      "GM": false,
      "SM": false,
      "channelId": null
  },
  {
      "matchName": "San Francisco Unicorns v Washington Freedom",
      "matchId": 33435882,
      "marketId": "1.230967277",
      "openDate": "2024-07-26 07:00:00",
      "maxBet": 1,
      "minBet": 100,
      "maxBetRate": 100,
      "minBetRate": 0,
      "inPlay": false,
      "team1Back": 2.1,
      "team1Lay": 2.22,
      "team2Back": 1.81,
      "team2Lay": 1.91,
      "drawBack": 0,
      "drawLay": 0,
      "bm": true,
      "F": true,
      "GM": false,
      "SM": false,
      "channelId": null
  },
  {
      "matchName": "India Women v Bangladesh Women",
      "matchId": 33441294,
      "marketId": "1.231034383",
      "openDate": "2024-07-26 14:00:00",
      "maxBet": 1,
      "minBet": 100,
      "maxBetRate": 100,
      "minBetRate": 0,
      "inPlay": false,
      "team1Back": 1.05,
      "team1Lay": 1.08,
      "team2Back": 13.5,
      "team2Lay": 21,
      "drawBack": 0,
      "drawLay": 0,
      "bm": true,
      "F": true,
      "GM": false,
      "SM": false,
      "channelId": null
  },
  {
      "matchName": "England v West Indies",
      "matchId": 33434631,
      "marketId": "1.230945291",
      "openDate": "2024-07-26 15:30:00",
      "maxBet": 1,
      "minBet": 100,
      "maxBetRate": 100,
      "minBetRate": 0,
      "inPlay": false,
      "team1Back": 1.16,
      "team1Lay": 1.17,
      "team2Back": 12.5,
      "team2Lay": 13,
      "drawBack": 16,
      "drawLay": 16.5,
      "bm": true,
      "F": true,
      "GM": false,
      "SM": false,
      "channelId": null
  },
  {
      "matchName": "Sri Lanka Women v Pakistan Women",
      "matchId": 33441464,
      "marketId": "1.231034453",
      "openDate": "2024-07-26 19:00:00",
      "maxBet": 1,
      "minBet": 100,
      "maxBetRate": 100,
      "minBetRate": 0,
      "inPlay": false,
      "team1Back": 1.62,
      "team1Lay": 1.97,
      "team2Back": 2.04,
      "team2Lay": 2.62,
      "drawBack": 0,
      "drawLay": 0,
      "bm": true,
      "F": true,
      "GM": false,
      "SM": false,
      "channelId": null
  },
  {
      "matchName": "Dindigul Dragons v Madurai Panthers",
      "matchId": 33438154,
      "marketId": "1.230993696",
      "openDate": "2024-07-26 19:15:00",
      "maxBet": 1,
      "minBet": 100,
      "maxBetRate": 100,
      "minBetRate": 0,
      "inPlay": false,
      "team1Back": 1.25,
      "team1Lay": 4.6,
      "team2Back": 1.28,
      "team2Lay": 5,
      "drawBack": 0,
      "drawLay": 0,
      "bm": true,
      "F": true,
      "GM": false,
      "SM": false,
      "channelId": null
  },
  {
      "matchName": "Northern Superchargers Women v Trent Rockets Women",
      "matchId": 33422357,
      "marketId": "1.230781797",
      "openDate": "2024-07-26 19:30:00",
      "maxBet": 1,
      "minBet": 100,
      "maxBetRate": 100,
      "minBetRate": 0,
      "inPlay": false,
      "team1Back": 1.86,
      "team1Lay": 2.32,
      "team2Back": 1.76,
      "team2Lay": 2.18,
      "drawBack": 0,
      "drawLay": 0,
      "bm": true,
      "F": true,
      "GM": false,
      "SM": false,
      "channelId": null
  },
  {
      "matchName": "Northern Superchargers v Trent Rockets",
      "matchId": 33422359,
      "marketId": "1.230781725",
      "openDate": "2024-07-26 23:05:00",
      "maxBet": 1,
      "minBet": 100,
      "maxBetRate": 100,
      "minBetRate": 0,
      "inPlay": false,
      "team1Back": 2.14,
      "team1Lay": 2.42,
      "team2Back": 1.71,
      "team2Lay": 1.87,
      "drawBack": 0,
      "drawLay": 0,
      "bm": true,
      "F": true,
      "GM": false,
      "SM": false,
      "channelId": null
  },
  {
      "matchName": "Salem Spartans v Lyca Kovai Kings",
      "matchId": 33438155,
      "marketId": "1.230993791",
      "openDate": "2024-07-27 15:15:00",
      "maxBet": 1,
      "minBet": 100,
      "maxBetRate": 100,
      "minBetRate": 0,
      "inPlay": false,
      "team1Back": 4.3,
      "team1Lay": 10,
      "team2Back": 1.11,
      "team2Lay": 1.3,
      "drawBack": 0,
      "drawLay": 0,
      "bm": true,
      "F": true,
      "GM": false,
      "SM": false,
      "channelId": null
  },
  {
      "matchName": "Sri Lanka v India",
      "matchId": 33438707,
      "marketId": "1.231003824",
      "openDate": "2024-07-27 19:00:00",
      "maxBet": 1,
      "minBet": 100,
      "maxBetRate": 100,
      "minBetRate": 0,
      "inPlay": false,
      "team1Back": 3.25,
      "team1Lay": 3.8,
      "team2Back": 1.36,
      "team2Lay": 1.43,
      "drawBack": 0,
      "drawLay": 0,
      "bm": true,
      "F": true,
      "GM": false,
      "SM": false,
      "channelId": null
  },
  {
      "matchName": "Tiruppur Tamizhans v Ruby Trichy Warriors",
      "matchId": 33438724,
      "marketId": "1.231004036",
      "openDate": "2024-07-27 19:15:00",
      "maxBet": 1,
      "minBet": 100,
      "maxBetRate": 100,
      "minBetRate": 0,
      "inPlay": false,
      "team1Back": 1.63,
      "team1Lay": 2.6,
      "team2Back": 1.63,
      "team2Lay": 2.6,
      "drawBack": 0,
      "drawLay": 0,
      "bm": true,
      "F": true,
      "GM": false,
      "SM": false,
      "channelId": null
  }
]

const MoreEvent = ({id1}) => {

  const nav = useNavigate()

  const handleDetails = (id)=>{
    nav(`/Events/${id}/${id1}/live-report`)
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
            {(data)?.slice(0,6).map((res, id) => {
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
