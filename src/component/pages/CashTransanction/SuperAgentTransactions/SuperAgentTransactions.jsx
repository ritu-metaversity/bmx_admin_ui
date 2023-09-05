import { Button, Card, Col, DatePicker, Divider, Form, Input, Pagination, Row, Select } from "antd";
import "./SuperAgentTransactions.scss";
import dayjs from 'dayjs';
import { useNavigate } from "react-router-dom";

// const data = [
//   {
//     key: 1,
//     date: "26-06-2023",
//     Collection_Name: "",
//     Debit: "5.82",
//     Credit: "0.00",
//     Balance: "27.09",
//     Payment_Type: "Zimbabwe v USA",
//     Remark: "Master minus",
//   },
//   {
//     key: 2,
//     date: "26-06-2023",
//     Collection_Name: "",
//     Debit: "5.82",
//     Credit: "0.00",
//     Balance: "27.09",
//     Payment_Type: "Zimbabwe v USA",
//     Remark: "Master minus",
//   },
//   {
//     key: 3,
//     date: "26-06-2023",
//     Collection_Name: "",
//     Debit: "5.82",
//     Credit: "0.00",
//     Balance: "27.09",
//     Payment_Type: "Zimbabwe v USA",
//     Remark: "Master minus",
//   },
//   {
//     key: 4,
//     date: "26-06-2023",
//     Collection_Name: "",
//     Debit: "5.82",
//     Credit: "0.00",
//     Balance: "27.09",
//     Payment_Type: "Zimbabwe v USA",
//     Remark: "Master minus",
//   },
// ];

const dateFormat = 'YYYY/MM/DD';


const SuperAgentTransactions = () => {

const nav = useNavigate()

  const handleBackbtn = () => {
    nav(-1)
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const { Option } = Select;
  return (
    <>
      <Card
        className="sport_detail ledger_data"
        title="Super Agent Transactions"
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
                  <Select
                    placeholder="Select Client"
                    // onChange={onGenderChange}
                    allowClear>
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
                  <Select
                    // placeholder="Select a option and change input text above"
                    // onChange={onGenderChange}
                    defaultValue="Cash A/C"
                    allowClear>
                    <Option value="cashac" >Cash A/C</Option>
                   
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
                  <DatePicker className="transations_date" defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat} />
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
                  <Select
                    placeholder="Payment Type"
                    // onChange={onGenderChange}
                   
                    allowClear>
                    <Option value="payment_diya" >PAYMENT - DIYA</Option>
                    <Option value="payment_liya" >PAYMENT - LIYA</Option>
                   
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
            <Form.Item
              wrapperCol={{
                span: 24,
              }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
        {/* <div className="table_section">
          <table className="">
            <tr>
              <th>Date</th>
              <th>Collection Name</th>
              <th className="text-right">Debit</th>
              <th className="text-right">Credit</th>
              <th className="text-right">Balance</th>
              <th>Payment Type</th>
              <th>Remark</th>
            </tr>
            {data?.map((res) => {
              return (
                <tr key={res?.key}>
                  <td>{res?.date}</td>
                  <td>{res?.Collection_Name}</td>
                  <td className="text-right">{res?.Debit}</td>
                  <td className="text-right">{res?.Credit}</td>
                  <td className="text-right">{res?.Balance}</td>
                  <td>{res?.Payment_Type}</td>
                  <td>{res?.Remark}</td>
                </tr>
              );
            })}
          </table>
        </div> */}
        {/* <Divider /> */}

        {/* <Pagination className="pagination_main ledger_pagination" defaultCurrent={1} total={50} /> */}
      </Card>
    </>
  );
};

export default SuperAgentTransactions;
