import React, { useEffect, useState } from "react";
import { Card, Select, Row, Col, Table, Form, Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import {
  useLazySearchUserDownlineQuery,
  useLazySessionFancyBetDetailQuery,
} from "../../../../store/service/SportDetailServices";
import "./FancySlips.scss";
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
    dataIndex: "marketname",
    key: "marketname",
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
    render: (text, record)=>(
      <span className={record?.netpnl>0?"text_success":"text_danger"}>{record?.netpnl}</span>
      )
  },

  {
    title: "Volume",
    dataIndex: "volume",
    key: "volume",
  },
];

const FancySlips = ({ type, name }) => {
  const [clientId, setClientId] = useState("");
  const nav = useNavigate();
  const handleBackClick = () => {
    nav(-1);
  };

  const { id } = useParams();

  const [trigger, { isLoading, data: result, isFetching }] = useLazySessionFancyBetDetailQuery();
  useEffect(() => {
    trigger({
      matchId: id,
      type: type,
      userId: "",
    });
  }, [type]);

  // console.log(result?.data?.data)

  const onFinish = (values) => {
    trigger({
      matchId: id,
      type: type,
      userId: values?.username,
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleSelect = (value) => {
    setClientId(value);
  };

  const [userList, resultData] = useLazySearchUserDownlineQuery();
  const handleChange = (value) => {
    userList({
      term: value,
      _type: value,
      q: value,
    });
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
            title={name}
            extra={<button onClick={handleBackClick}>Back</button>}>
            <Form
              name="basic"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              className="form_data"
              >
              <Row
                className="rejected_row fancy_data_sess"
                style={{ margin: "2px 0px 25px 28px" }}>
                <Col xs={24} md={24} lg={6} xl={6}>
                  <Form.Item
                    // label="Client"
                    name="username"
                    required
                    rules={[
                      {
                        required: true,
                        message: "Please Select User",
                      },
                    ]}>
                    <Select
                      placeholder="Select User"
                      options={
                        resultData.isError ?[] :resultData.data?.data?.map((i) => ({
                          label: i.text,
                          value: i.id,
                        })) || []
                      }
                      showSearch
                      allowClear
                      onSelect={handleSelect}
                      onSearch={handleChange}></Select>
                  </Form.Item>
                </Col>
                <Col xs={24} md={24} lg={5} xl={5}>
                  <Form.Item>
                    <Button
                      type="primary"
                      loading={isFetching}
                      htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Col>
               
              </Row>
            </Form>

            <div className="table_section">
              <Table
                columns={columns}
                dataSource={result?.data}
                loading={isLoading}
              />
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default FancySlips;
