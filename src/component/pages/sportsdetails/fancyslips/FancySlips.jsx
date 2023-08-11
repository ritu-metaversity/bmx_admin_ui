import React, { useEffect } from "react";
import {
  Card,
  Space,
  Select,
  Row,
  Col,
  Table,
  Input,
  Form,
  Button,
} from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useLazySessionFancyBetDetailQuery } from "../../../../store/service/SportDetailServices";


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
  },

  {
    title: "Volume",
    dataIndex: "volume",
    key: "volume",
  },
];

const FancySlips = ({ type, name }) => {
  const nav = useNavigate();
  const handleBackClick = () => {
    nav("/Events/sports-details");
  };

  const { id } = useParams();

  const [trigger, {isLoading, data:result,isFetching }]= useLazySessionFancyBetDetailQuery();

  useEffect(()=>{
    trigger(
      {
        matchId: id,
        type: type,
        userId: "",
      }
    )
  }, [type])

  // console.log(result?.data?.data)

  const onFinish = (values) => {
    trigger(
      {
        matchId: id,
        type: type,
        userId: values?.username,
      }
    )
  };


  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
                className="rejected_row"
                style={{ margin: "2px 0px 25px 28px" }}>
                <Col xs={24} md={24} lg={6} xl={6}>
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please enter user ID!",
                      },
                    ]}>
                    <Input placeholder="Enter User Id"/>
                  </Form.Item>
                  
                </Col>
                <Col xs={24} md={24} lg={5} xl={5}>
                <Form.Item>
                    <Button type="primary" loading={isFetching} htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Col>
                {/* <Col xs={24} md={24} lg={5} xl={5}>
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
              </Col> */}
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
