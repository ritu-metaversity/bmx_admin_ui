import { Col, Empty, Row, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import SuperAgentProfitLoss from "./SuperAgentProfitLoss/SuperAgentProfitLoss";
import "./EventProfitLoss.scss";
import MasterProfitLoss from "./SuperAgentProfitLoss/MasterProfitLoss";
import DealerProfitLoss from "./SuperAgentProfitLoss/DealerProfitLoss";
import ClientProfitLoss from "./SuperAgentProfitLoss/ClientProfitLoss";

const EventProfitLoss = () => {
  const nav = useNavigate();

  const handleBackClick = () => {
    nav(-1);
  };

  const userType = 5;

  return (
    <>
      <Row>
        <Col
          className={`${userType != "5" ? "d-none" : ""}`}
          xs={24}
          md={24}
          xl={7}
          lg={7}>
          <SuperAgentProfitLoss data={[]} />
        </Col>
        <Col
          className={`${userType === "0" ? "" : "d-none"}`}
          xs={24}
          md={24}
          xl={7}
          lg={7}>
          <MasterProfitLoss data={[]} />
        </Col>
        <Col
          className={`${userType === "1" ? "" : "d-none"}`}
          xs={24}
          md={24}
          xl={7}
          lg={7}>
          <DealerProfitLoss data={[]} />
        </Col>
        <Col className="" xs={24} md={24} xl={7} lg={7}>
          <ClientProfitLoss data={[]} />
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
          <div
            className="sport_detail my_ledger main_match_ledger"
            style={{ padding: "0px", margin: "0px", width: "100%" }}>
            <div className="table_section statement_tabs_data ant-spin-nested-loading">
              <table className="live_table" style={{ marginBottom: "8px" }}>
                <tr>
                  <th>username</th>
                  <th>Date</th>
                  <th>Selection</th>
                  <th>Result</th>
                  <th>Back/Lay</th>
                  <th>Value</th>
                  <th>Volume</th>
                  <th>Stake</th>
                  <th>pnl</th>
                </tr>
              </table>
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventProfitLoss;
