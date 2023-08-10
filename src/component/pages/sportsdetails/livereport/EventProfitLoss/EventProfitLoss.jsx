import { Col, Row, Table } from "antd";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import SuperAgentProfitLoss from "./SuperAgentProfitLoss/SuperAgentProfitLoss";
import { useSelector } from "react-redux";
import { globalSelector } from "../../../../../store/global/slice";
import { useProfitLossQuery } from "../../../../../store/service/ProfitLossServices";

const columns = [
  {
    title: "username",
    dataIndex: "userid",
    key: "userid",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Selection",
    dataIndex: "selectionname",
    key: "selectionname",
  },
  {
    title: "Result",
    dataIndex: "result",
    key: "result",
  },

  {
    title: "Back/Lay",
    dataIndex: "Back/Lay",
    key: "Back/Lay",
  },
  {
    title: "Value",
    dataIndex: "pricevalue",
    key: "pricevalue",
  },
  {
    title: "Stake",
    dataIndex: "netpnl",
    key: "netpnl",
  },
  {
    title: "pnl",
    dataIndex: "netpnl",
    key: "netpnl",
  },
];

const EventProfitLoss = () => {
  const nav = useNavigate();

  const { id } = useParams();

  const handleBackClick = () => {
    nav("/");
  };


  const data = useSelector(globalSelector)

  const {data:profitLoss} = useProfitLossQuery({
    matchid:Number(id),
     marketid:data?.data
  })


  
  return (
    <>
      <Row>
        <Col xs={24} md={24} xl={7} lg={7}>
          <SuperAgentProfitLoss name={"Super Agent P&L"}/>
        </Col>
        <Col xs={24} md={24} xl={7} lg={7}>
          <SuperAgentProfitLoss name={"Agent P&L"}/>
        </Col>
        <Col xs={24} md={24} xl={7} lg={7}>
          <SuperAgentProfitLoss name={"Client P&L"}/>
        </Col>
      </Row>

      <div className="main_live_section">
        <div className="_match">
          <div
            className="sub_live_section live_report"
            style={{ borderRadius: "2px 2px 0 0", fontSize: "16px" }}>
            <div style={{ padding: "9px 8px" }} className="team_name">
              Event Profit and Loss
            </div>
            <div className="show_btn">
              <button onClick={handleBackClick}>Back</button>
            </div>
          </div>
        </div>
        <div>
          <div className="table_section">
            <Table
              className="live_table limit_update"
              bordered
              columns={columns}
              dataSource={profitLoss?.data?.data}
            ></Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventProfitLoss;
