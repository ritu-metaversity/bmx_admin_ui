import { Card, Empty } from "antd";
import { useState } from "react";
import "./ActiveMatch.scss";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const data =[
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
      "team2Back": 3.75,
      "team2Lay": 3.8,
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
      "team1Back": 2.24,
      "team1Lay": 2.36,
      "team2Back": 1.76,
      "team2Lay": 1.81,
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
      "team1Back": 2.16,
      "team1Lay": 2.18,
      "team2Back": 1.85,
      "team2Lay": 1.86,
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
      "team1Back": 1.71,
      "team1Lay": 1.72,
      "team2Back": 2.38,
      "team2Lay": 2.4,
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
      "team1Lay": 1.99,
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
      "team1Lay": 1.06,
      "team2Back": 14,
      "team2Lay": 26,
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
      "team1Back": 1.68,
      "team1Lay": 1.7,
      "team2Back": 2.42,
      "team2Lay": 2.48,
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
      "team1Back": 1.3,
      "team1Lay": 4.4,
      "team2Back": 1.3,
      "team2Lay": 4.4,
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
      "team1Lay": 2.1,
      "team2Back": 1.9,
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
      "team1Back": 2.16,
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
      "team1Lay": 10.5,
      "team2Back": 1.25,
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

const activeSportList = [
  {
      "sportId": 4,
      "sportName": "Cricket",
      "sportImage": "https://admin-new-apiis.s3.ap-south-1.amazonaws.com/"
  },
  {
      "sportId": 2,
      "sportName": "Tennis",
      "sportImage": "https://admin-new-apiis.s3.ap-south-1.amazonaws.com/"
  },
  {
      "sportId": 1,
      "sportName": "Football",
      "sportImage": "https://admin-new-apiis.s3.ap-south-1.amazonaws.com/"
  },
  {
      "sportId": 77,
      "sportName": "Horse racing",
      "sportImage": "https://admin-new-apiis.s3.ap-south-1.amazonaws.com/"
  },
  {
      "sportId": 14,
      "sportName": "Kabaddi",
      "sportImage": "https://admin-new-apiis.s3.ap-south-1.amazonaws.com/"
  },
  {
      "sportId": 6,
      "sportName": "Election",
      "sportImage": "https://admin-new-apiis.s3.ap-south-1.amazonaws.com/"
  }
]

const ActiveMatch = () => {
  const [activeTabData, setActtiveTabData] = useState(4);

  const nav = useNavigate();

  const handleDetails = (id) => {
    nav(`/Events/${id}/${activeTabData}/live-report`);
  };

  const handleSportId = (id) => {
    setActtiveTabData(id);
  };
  

  return (
    <div className="active_slip login_report" style={{ marginBottom: "12px" }}>
      <Card
        style={{
          margin: "0px",
          width: "100%",
        }}
        className="sport_detail active_match_name"
        title="Active Matches">
        <div className="active_sport_list">
          <div className="sub_list_sport_list">
            {activeSportList?.map((item, id) => {
              return (
                <div
                  key={id}
                  onClick={() => handleSportId(item?.sportId)}
                  className={`tab_section_active_sport ${
                    activeTabData == item?.sportId ? "activeList" : ""
                  }`}>
                  <p>{item?.sportName}</p>
                </div>
              );
            })}
          </div>
        </div>

       
          <div className="table_section statement_tabs_data active_match_table">
            <table className="">
              <tr>
                <th>S/N</th>
                <th>Name</th>
                <th>Open Date</th>
                {/* <th>Competition</th> */}
                <th>Inplay</th>
                <th>Details</th>
              </tr>
              {data?.map((res, id) => {
                return (
                  <tr
                    key={id}
                    onClick={() => handleDetails(res?.matchId)}
                    style={{ cursor: "pointer" }}>
                    <td>{id + 1}</td>
                    <td>{res?.matchName}</td>
                    <td>
                      {moment(res?.openDate).format("YYYY-MM-DD, h:mm A")}
                    </td>
                    {/* <td>??</td> */}
                    <td>
                      {res?.inPlay && (
                        <button className="inplay">INPLAY</button>
                      )}
                    </td>
                    <td>
                      <p style={{ cursor: "pointer" }}>Details</p>
                    </td>
                  </tr>
                );
              })}
            </table>
            {data?.length == 0 ? (
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            ) : (
              ""
            )}
          </div>
        
      </Card>
    </div>
  );
};

export default ActiveMatch;
