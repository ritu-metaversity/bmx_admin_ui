import { Button, Card, Col, DatePicker, Form, Input, Row, Select, notification } from "antd";
import dayjs from "dayjs";
import { useLocation, useNavigate } from "react-router-dom";
import TransactionTable from "../TransactionTable";
import { useEffect, useState } from "react";
import moment from "moment";

const dateFormat = "YYYY/MM/DD";

const AgentTransactions = ({ userType, Listname }) => {
  const [api, contextHolder] = notification.useNotification();
  const [userTranstionData, setUserTranstionData] = useState([]);
  var curr = new Date();
  const time = moment(curr).format("YYYY-MM-DD");

  const [clientId, setClientId] = useState("");

  const [startDate, setStartDate] = useState(time);
  const [form]= Form.useForm();
  const {pathname} = useLocation();


  const nav = useNavigate();

  const handleBackbtn = () => {
    nav(-1);
  };


  const { Option } = Select;

  const onFinish = (values) => {
    const createTranstions = {
      userId: values?.client,
      collection: values?.collection,
      amount: Number(values?.amount),
      paymenttype: values?.payment_type,
      remarks: values?.remark,
    };

    form?.resetFields();
  };



  const onSelectDate = (date, dateString) => {
    setStartDate(dateString);
  };

  const handleChange = (value) => {
    
  };
  const handleSelect = (value) => {
    setClientId(value);
  };


  
  
  useEffect(()=>{
    form?.resetFields();
    setClientId("");
  }, [pathname])
  return (
    <>
    {contextHolder}
      <Card
        className="sport_detail ledger_data"
        title={`${Listname} Transactions`}
        extra={<button onClick={handleBackbtn}>Back</button>}>
        <div className="my_ledger">
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
              <Col xl={8} lg={8} md={24} xs={24} >
                <Form.Item
                  label="Client"
                  name="client"
                  required
                  rules={[
                    {
                      required: true,
                      message: "Please select Client",
                    },
                  ]}>
                  <Select
                    placeholder="Select Client"
                    options={[]}
                    showSearch
                    allowClear
                    onSelect={handleSelect}
                    onSearch={handleChange}>
                  </Select>
                </Form.Item>
              </Col>
              <Col xl={8} lg={8} md={24} xs={24} >
                <Form.Item
                  label="Collection"
                  name="collection"
                  required
                  rules={[
                    {
                      required: true,
                      message: "Please select Collection",
                    },
                  ]}>
                  <Select defaultValue="Select Cash A/C" allowClear>
                    <Option value="CASH">Cash A/C</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xl={8} lg={8} md={24} xs={24} >
                <Form.Item
                  label="Date"
                  name="Date"
                  // required
                  // rules={[
                  //   {
                  //     required: true,
                  //     message: "Please select date",
                  //   },
                  // ]}
                  >
                  <DatePicker
                  required
                  onChange = {onSelectDate}
                    className="transations_date"
                    // defaultValue={moment()}
                    format={dateFormat}
                    defaultValue={dayjs(startDate)}
                  />
                </Form.Item>
              </Col>
              <Col xl={8} lg={8} md={24} xs={24} >
                <Form.Item
                  label="Amount"
                  name="amount"
                  required
                  rules={[
                    {
                      required: true,
                      message: "Enter Amount",
                    },
                  ]}>
                  <Input type="number" placeholder="Enter Amount" />
                </Form.Item>
              </Col>
              <Col xl={8} lg={8} md={24} xs={24} >
                <Form.Item
                  label="Payment Type"
                  name="payment_type"
                  required
                  rules={[
                    {
                      required: true,
                      message: "Please Select One",
                    },
                  ]}>
                  <Select placeholder="Payment Type" allowClear>
                    <Option value="Diya">PAYMENT - DIYA</Option>
                    <Option value="Liya">PAYMENT - LIYA</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xl={8} lg={8} md={24} xs={24} >
                <Form.Item
                  label="Remark"
                  name="remark"
                  required
                  rules={[
                    {
                      required: true,
                      message: "Enter Remark",
                    },
                  ]}>
                  <Input type="text" placeholder="Remarks" />
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
      </Card>

      <Card className="sport_detail ledger_data">
       
          <TransactionTable clientId={clientId} balanceData ={0}  data={[]} />
       
      </Card>
    </>
  );
};

export default AgentTransactions;
