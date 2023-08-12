import { useNavigate, useParams } from "react-router-dom";
import "./SuperAgentLimitDetails.scss";
import React from "react";
import { Tabs } from "antd";
import AddSuperLimites from "./AddSuperLimites";
import MinusLimit from "./MinusLimit";
import { useDepositAndWithdrawQuery } from "../../../../store/service/userlistService";

const SuperAgentLimitDetails = () => {
  const nav = useNavigate();

  const handleBackClick = () => {
    nav("/client/list-super");
  };

  const {id} = useParams()

  const { data } = useDepositAndWithdrawQuery({
    userId: id,
  });

  console.log(data?.data, "dsdsdsd");

  const items = [
    {
      key: "1",
      label: `Add`,
      children: <AddSuperLimites data={data?.data}/>,
    },
    {
      key: "2",
      label: `Minus`,
      children: <MinusLimit  data={data?.data}/>,
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };



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
              Super Agent Limit Details
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
