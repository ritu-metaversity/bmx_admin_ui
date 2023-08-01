import {
  Button,
  Card,
  Col,
  DatePicker,
  Divider,
  Empty,
  Form,
  Input,
  Pagination,
  Row,
  Select,
  message,
} from "antd";
import { useNavigate } from "react-router-dom";
import "./SecureCodeReport.scss";

// const handleChange = (value) => {
//   console.log(`selected ${value}`);
// };

const data = [];
console.log(data?.length);
const SecureCodeReport = () => {
  const onFinish = (values) => {
    console.log("Success:", values?.username);
    message.error("Please Enter Valid User id or code");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const nav = useNavigate();
  const handleBackClick = () => {
    nav("/markets");
  };

  return (
    <>
      <div className="match_slip">
        <div>
          <Card
            style={{
              margin: "0px 0px 30px 0px",
              width: "100%",
            }}
            className="sport_detail "
            title="Secure Code Report"
            extra={<button onClick={handleBackClick}>Back</button>}>
            <div>
              <Form
                name="basic"
                className="code_form"
                // labelCol={{ span: 8 }}
                // wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off">
                <Row>
                  <Col xs={24} xl={8} lg={8} md={24}>
                    <Form.Item>
                      <Input onChange={onFinishFailed} placeholder="Code" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} xl={8} lg={8} md={24}>
                    <Form.Item>
                      <Button type="primary" className="show_btn" htmlType="submit">
                        Show
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </div>
            <div className="table_section statement_tabs_data">
              <table className="">
                <tr>
                  <th>Code</th>
                  <th>OTP</th>
                  <th>Created On</th>
                </tr>
                {data?.map((res) => {
                  return (
                    <tr key={res?.key}>
                      <td>{res?.date}</td>
                      <td>{res?.operation}</td>
                      <td>{res?.description}</td>
                    </tr>
                  );
                })}
              </table>
              {data?.length == 0 ? (
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
              ) : (
                <>
                  <Divider />
                  <div className="pagination_cus">
                    <Pagination className="pagination_main ledger_pagination" defaultCurrent={1} total={5} />
                  </div>
                </>
              )}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SecureCodeReport;
