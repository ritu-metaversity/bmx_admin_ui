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
    dataIndex: "odds",
    key: "odds",
    render: (text, record)=>(
      <p className="text-right">{record?.odds}</p>
      )
  },
  {
    title: "Amount",
    dataIndex: "stake",
    key: "stake",
    render: (text, record)=>(
      <p className="text-right">{record?.stake}</p>
      )
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
    title: "Selection Name",
    dataIndex: "selectionname",
    key: "selectionname",
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
  // {
  //   title: "Odds",
  //   dataIndex: "odds",
  //   key: "odds",
  //   render: (text, record)=>(
  //     <p className="text-right">{record?.pricevalue}</p>
  //     )
  // },
  {
    title: "Profit/Loss",
    dataIndex: "netpnl",
    key: "netpnl",
    render: (text, record)=>(
      <p className={record?.netpnl<0?"text-right text_danger":"text-right text_success"}>{record?.netpnl}</p>
      )
  },

  {
    title: "Volume",
    dataIndex: "pricevalue",
    key: "pricevalue",
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
            className="sport_detail session_bet"
            title={name}
            extra={<button onClick={handleBackClick}>Back</button>}>
            <Form
              name="basic"
              onFinish={onFinish}
              autoComplete="off"
              className="form_data"
              >
              <Row
                className="rejected_row fancy_data_sess mr"
                // style={{ margin: "2px 0px 25px 28px" }}
                >
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
                      className="fancy_btn"
                      loading={isLoading}
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
                rowClassName={(record) => record?.isback ? 'back' :  'lay'}
                loading={isLoading || isFetching}
              />
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default FancySlips;
