import React from "react";
import { Card, Space, Select, Row, Col, Table } from "antd";
import { useNavigate } from "react-router-dom";

// import "./MatchSlips.scss";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const columns = [
  {
    title: "Rate",
    dataIndex: "rate",
    key: "rate",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Team",
    dataIndex: "team",
    key: "team",
  },
  {
    title: "Client",
    dataIndex: "client",
    key: "client",
  },
  {
    title: "Agent",
    dataIndex: "agent",
    key: "agent",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Loss",
    dataIndex: "loss",
    key: "loss",
  },
  {
    title: "Profit",
    dataIndex: "profit",
    key: "profit",
  },
  {
    title: "Volume",
    dataIndex: "volume",
    key: "volume",
  },
];
const data = [];

const FancySlips = () => {
  const nav = useNavigate();
  const handleBackClick = () => {
    nav("/Events/sports-details");
  };

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
            title="Fancy Bets"
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
              <Table columns={columns} dataSource={data} />
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default FancySlips;
