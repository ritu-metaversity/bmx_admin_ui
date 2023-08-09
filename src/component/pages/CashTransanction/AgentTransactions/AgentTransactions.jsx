import {
  Button,
  Card,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Pagination,
  Row,
  Select,
} from "antd";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useFilterbyClientQuery } from "../../../../store/service/transactionServices";
import TransactionTable from "../TransactionTable";

const dateFormat = "YYYY/MM/DD";

const AgentTransactions = () => {
  const nav = useNavigate();

  const handleBackbtn = () => {
    nav("/client/cash-transanction");
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const { Option } = Select;

  const { data } = useFilterbyClientQuery({
    // userId: localStorage.getItem("userId"),
    userId: "sumana6748",
  }, {refetchOnMountOrArgChange: true});

  return (
    <>
      <Card
        className="sport_detail ledger_data"
        title="Agent Transactions"
        extra={<button onClick={handleBackbtn}>Back</button>}>
        <div className="my_ledger">
          <Form
            className="form_data mt-16 cash_data"
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off">
            <Row>
              <Col span={8}>
                <Form.Item
                  label="Client"
                  name="Client"
                  required
                  rules={[
                    {
                      required: true,
                      message: "Please select Client",
                    },
                  ]}>
                  <Select placeholder="Select Client" allowClear>
                    {/* <Option value="male">male</Option>
                  <Option value="female">female</Option>
                  <Option value="other">other</Option> */}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Collection"
                  name="Collection"
                  required
                  rules={[
                    {
                      required: true,
                      message: "Please select Collection",
                    },
                  ]}>
                  <Select defaultValue="Cash A/C" allowClear>
                    <Option value="cashac">Cash A/C</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Date"
                  name="Date"
                  required
                  rules={[
                    {
                      required: true,
                      message: "Please select date",
                    },
                  ]}>
                  <DatePicker
                    className="transations_date"
                    defaultValue={dayjs("2015/01/01", dateFormat)}
                    format={dateFormat}
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Amount"
                  name="Amount"
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
              <Col span={8}>
                <Form.Item
                  label="Payment Type"
                  name="Payment_Type"
                  required
                  rules={[
                    {
                      required: true,
                      message: "Please Select One",
                    },
                  ]}>
                  <Select placeholder="Payment Type" allowClear>
                    <Option value="payment_diya">PAYMENT - DIYA</Option>
                    <Option value="payment_liya">PAYMENT - LIYA</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="Remark"
                  name="Remark"
                  required
                  rules={[
                    {
                      required: true,
                      message: "Enter Amount",
                    },
                  ]}>
                  <Input type="text" placeholder="Remarks" />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item wrapperCol={{ span: 24 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Card>

      <Card className="sport_detail ledger_data">
        <TransactionTable data={data}/>
      </Card>
    </>
  );
};

export default AgentTransactions;
