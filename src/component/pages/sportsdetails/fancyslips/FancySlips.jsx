import React from "react";
import { Card, Space, Select, Row, Col, Table } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useSessionFancyBetDetailQuery } from "../../../../store/service/SportDetailServices";

// import "./MatchSlips.scss";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const columns = [
  {
    title: "Rate",
    dataIndex: "stake",
    key: "stake",
  },
  {
    title: "Amount",
    dataIndex: "stake",
    key: "stake",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Team",
    dataIndex: "matchname",
    key: "matchname",
  },
  {
    title: "Client",
    dataIndex: "userid",
    key: "userid",
  },
  {
    title: "Agent",
    dataIndex: "dealerid",
    key: "dealerid",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Profit/Loss",
    dataIndex: "netpnl",
    key: "netpnl",
  },
  // {
  //   title: "Profit",
  //   dataIndex: "profit",
  //   key: "profit",
  // },
  {
    title: "Volume",
    dataIndex: "volume",
    key: "volume",
  },
];

const FancySlips = () => {
  const nav = useNavigate();
  const handleBackClick = () => {
    nav("/Events/sports-details");
  };

  const {id} = useParams()

  const {data, isFetching, isLoading} = useSessionFancyBetDetailQuery({
    matchId:id
  })

  return (
    <>
      <div className="match_slip">
        <div>
          <Card
            style={{
              margin: "0px",
              width: "100%",
            }}
            className="sport_detail"
            title="Session Bet"
            extra={<button onClick={handleBackClick}>Back</button>}>
            <Row className="rejected_row" style={{ margin: "2px 0px 25px 28px" }}>
              <Col xs={24} md={24} lg={5} xl={5}>
                <Select
                  defaultValue="Select Super"
                  onChange={handleChange}
                  options={[
                    {
                      value: "All Supers",
                      label: "Jack",
                    },
                  ]}
                />
              </Col>
              <Col xs={24} md={24} lg={5} xl={5}>
                <Select
                  defaultValue="Select Agent"
                  onChange={handleChange}
                  options={[
                    {
                      value: "All Agents",
                      label: "All Agents",
                    },
                  ]}
                />
              </Col>
              <Col xs={24} md={24} lg={5} xl={5}>
                <Select
                  defaultValue="Select Client"
                  onChange={handleChange}
                  options={[
                    {
                      value: "All Users",
                      label: "All Users",
                    },
                  ]}
                />
              </Col>
            </Row>

            <div className="table_section" style={{ marginBottom: "100px" }}>
              <Table columns={columns}
               dataSource={data?.data} 
               loading={isFetching || isLoading}
               />
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default FancySlips;
