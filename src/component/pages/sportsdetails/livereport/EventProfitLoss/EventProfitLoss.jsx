import { Col, Divider, Empty, Pagination, Row, Spin, Table } from "antd";
import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import SuperAgentProfitLoss from "./SuperAgentProfitLoss/SuperAgentProfitLoss";
import { useProfitLossQuery } from "../../../../../store/service/ProfitLossServices";
import './EventProfitLoss.scss'
import moment from "moment";

// const columns = [
//   {
//     title: "username",
//     dataIndex: "userid",
//     key: "userid",
//   },
//   {
//     title: "Date",
//     dataIndex: "date",
//     key: "date",
//   },
//   {
//     title: "Selection",
//     dataIndex: "selectionname",
//     key: "selectionname",
//   },
//   {
//     title: "Result",
//     dataIndex: "result",
//     key: "result",
//   },

//   {
//     title: "Back/Lay",
//     dataIndex: "Back/Lay",
//     key: "Back/Lay",
//   },
//   {
//     title: "Value",
//     dataIndex: "pricevalue",
//     key: "pricevalue",
//   },
//   {
//     title: "Stake",
//     dataIndex: "netpnl",
//     key: "netpnl",
//   },
//   {
//     title: "pnl",
//     dataIndex: "netpnl",
//     key: "netpnl",
//   },
// ];

const EventProfitLoss = () => {
  const nav = useNavigate();

  const { id } = useParams();

  const handleBackClick = () => {
    nav("/");
  };

  const { state } = useLocation();

  console.log(state?.id, "dsfsadfsd");


  const { data: profitLoss, isFetching, isLoading } = useProfitLossQuery({
    matchid: Number(id),
    marketid: state?.id,
  });

  console.log(profitLoss?.data, "SDfsdfsd");



  return (
    <>
      <Row>
        <Col xs={24} md={24} xl={7} lg={7}>
          <SuperAgentProfitLoss
            data={profitLoss?.data?.showBetsdata}
            name={"Super Agent P&L"}
          />
        </Col>
        <Col xs={24} md={24} xl={7} lg={7}>
          <SuperAgentProfitLoss name={"Agent P&L"} />
        </Col>
        <Col xs={24} md={24} xl={7} lg={7}>
          <SuperAgentProfitLoss name={"Client P&L"} />
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
          <div className="table_section sport_detail main_pl" style={{padding:"0px", margin:"0px", width:"100%"}}>
            {/* <Table
              className="live_table limit_update"
              bordered
              columns={columns}
              dataSource={profitLoss?.data?.data}></Table> */}
            <div className="table_section statement_tabs_data ant-spin-nested-loading">
              <table className="live_table" style={{marginBottom:"8px"}}>
                <tr>
                  <th>username</th>
                  <th>Date</th>
                  <th>Selection</th>
                  <th>Result</th>
                  <th>Back/Lay</th>
                  <th>Value</th>
                  <th>Stake</th>
                  <th>pnl</th>
                </tr>
                {isLoading || isFetching ? (
                <div className="spin_icon comp_spin">
                  <Spin size="large" />
                </div>
              ) : (
                ""
              )}
                {profitLoss?.data?.data?.map((res, id) => {
                return (
                  <tr className="bg_green" style={{color:"#fff"}} key={id}>
                    <td>{res?.userid}</td>
                    <td>{moment(res?.date).format("DD-MM-YYYY, h:mm a")}</td>
                    <td>{res?.selectionname}</td>
                    <td>{res?.result}</td>
                    <td>{res?.isback === true?"Yes":"No"}</td>
                    <td>{res?.pricevalue}</td>
                    <td>{res?.pricevalue}</td>
                    <td>{res?.netpnl}</td>
                  </tr>
                );
              })}
              </table>
              {profitLoss?.data?.data?.length === 0 && (
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventProfitLoss;
