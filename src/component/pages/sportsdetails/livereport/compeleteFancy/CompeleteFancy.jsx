import { Card } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setData } from "../../../../../store/global/slice";

const CompeleteFancy = ({completeFancy, id}) => {
  const [marketId, setMarketId] = useState('')
  const dispatch = useDispatch()
  const nav = useNavigate();

  const handleShowBets = (val)=>{
    setMarketId(val)
    dispatch(setData(val))
    nav(`/Events/${id}/pl/live-report`)
  }

  return (
    <>
      <Card
        style={{
          margin: "0px",
          width: "100%",
        }}
        className="sport_detail completed_fancy"
        title="Completed fancy"
        extra={<button>Refresh</button>}>
        <div className="table_section">
          <table className="">
            <tr>
              <th>Title</th>
              <th>P&L</th>
              <th>Won By</th>
              <th>Net P&L</th>
              <th>Action</th>
            </tr>
            {completeFancy?.map((res) => {
              return (
                <tr key={res?.key}>
                  <td>{res?.selectionname}</td>
                  <td className={`${res?.pnl < 0 ? "text_danger":"text_success"}`}>{res?.pnl}</td>
                  <td>{res?.result}</td>
                  <td className={`${res?.pnl < 0 ? "text_danger":"text_success"}`}>{res?.netpnl}</td>
                  <td><button className="show_bets" onClick={()=>handleShowBets(res?._id)}>Show Bets</button></td>
                </tr>
              );
            })}
          </table>
        </div>
      </Card>
    </>
  );
};

export default CompeleteFancy;
