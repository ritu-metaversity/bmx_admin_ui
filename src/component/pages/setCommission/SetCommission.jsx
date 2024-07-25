import {
  Button,
  Card,
  Col,
  Form,
  Row,
  Select,
  Table } from "antd";
import { useNavigate } from "react-router-dom";


const columns = [
  {
    title: "Odds Comm",
    dataIndex: "oddsCommission",
    key: "casinoCommission",
  },
  {
    title: "Casino Comm",
    dataIndex: "casinoCommission",
    key: "casinoCommission",
  },
  {
    title: "Fancy Comm",
    dataIndex: "casinoCommission",
    key: "casinoCommission",
  },
];

const SetCommission = () => {
  const fancyComm = [
    "0.00",
    "0.25",
    "0.50",
    "0.75",
    "1.00",
    "1.25",
    "1.50",
    "1.75",
    "2.00",
  ];
  const casinoComm = ["0.00", "0.25", "0.50", "0.75", "1.00"];

  const nav = useNavigate();
  const [form] = Form.useForm();

  

  const onFinish = (value) => {
   
  };



  return (
    <>
      <Card
        className="sport_detail ledger_data"
        title="Set Commission"
        extra={<button onClick={() => nav(-1)}>Back</button>}>
        <div style={{ marginTop: "5px" }}>
          <Form
            className="form_data mt-16 cash_data"
            name="basic"
            form={form}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off">
            <Row>
              <Col xl={8} lg={8} md={24} xs={24}>
                <Form.Item
                  label="Odds Comm"
                  name="oddscomm"
                  rules={[
                    {
                      required: true,
                      message: "Odds Commission is required!",
                    },
                  ]}>
                  <Select placeholder="Select Odds Comm">
                    {fancyComm?.map((curElm) => {
                      return (
                        <>
                          <Select.Option value={curElm}>{curElm}</Select.Option>
                        </>
                      );
                    })}
                  </Select>
                </Form.Item>
              </Col>
              <Col xl={8} lg={8} md={24} xs={24}>
                <Form.Item
                  label="Fancy Comm"
                  name="fancycomm"
                  rules={[
                    {
                      required: true,
                      message: "Fancy Commission is required!",
                    },
                  ]}>
                  <Select placeholder="Select Fancy Comm">
                    {fancyComm?.map((curElm) => {
                      return (
                        <>
                          <Select.Option value={curElm}>{curElm}</Select.Option>
                        </>
                      );
                    })}
                  </Select>
                </Form.Item>
              </Col>
              <Col xl={8} lg={8} md={24} xs={24}>
                <Form.Item
                  label="Casino Comm"
                  name="casinocomm"
                  rules={[
                    {
                      required: true,
                      message: "Casino Commission is required!",
                    },
                  ]}>
                  <Select placeholder="Select Casino Comm">
                    {casinoComm?.map((curElm) => {
                      return (
                        <>
                          <Select.Option value={curElm}>{curElm}</Select.Option>
                        </>
                      );
                    })}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Form.Item wrapperCol={{ span: 24 }}>
              <Button  type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>

          
        </div>
        <div style={{marginTop:"12px"}} className="table_section oddscomm">
            <Table
              className="live_table roulette_table"
              bordered
              columns={columns}
              dataSource={[]}
              pagination={false}/>
          </div>
      </Card>
      
    </>
  );
};

export default SetCommission;
