import { useNavigate, useParams } from "react-router-dom";
import "./SuperAgentLimitDetails.scss";
import React from "react";
import { Tabs } from "antd";
import AddSuperLimites from "./AddSuperLimites";
import MinusLimit from "./MinusLimit";


const SuperAgentLimitDetails = () => {
  const nav = useNavigate();

  const handleBackClick = () => {
    nav(-1);
  };

  const items = [
    {
      key: "1",
      label: `Add`,
      children: <AddSuperLimites />,
    },
    {
      key: "2",
      label: `Minus`,
      children: <MinusLimit  />,
      color:"red"
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };


  const uType = localStorage.getItem("userType")


  return (
    <>
      <div className="main_live_section">
        <div className="_match">
          <div
            className="sub_live_section live_report"
            style={{ borderRadius: "2px 2px 0 0" }}>
            <div
              style={{ padding: "9px 8px", fontSize: "22px" }}
              className="team_name">
              {uType == 5? "Super Master Limit Details": uType == 0?"Master Limit Details ":uType == 1?"Agent Limit Details": uType == 2?"Client Limit Details":""}
            </div>
            <div className="show_btn">
              <button onClick={handleBackClick}>Back</button>
            </div>
          </div>
        </div>

        <div>
          <Tabs
            defaultActiveKey="1"
            className="add_minus"
            items={items}
            onChange={onChange}
          />
        </div>
      </div>
    </>
  );
};

export default SuperAgentLimitDetails;
