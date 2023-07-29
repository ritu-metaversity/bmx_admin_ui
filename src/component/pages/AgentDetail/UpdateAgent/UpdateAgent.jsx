import { Button, Col, Form, Input, Row, Select } from "antd";
import "./UpdateAgent.scss";

const UpdateAgent = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const { Option } = Select;
  return (
    <>
      <div className="main_live_section">
        <div className="_match">
          <div
            className="sub_live_section live_report"
            // style={{ marginTop: "35px" }}
          >
            <div
              style={{ padding: "5px 8px", fontSize: "22px" }}
              className="team_name">
              Update Agent
            </div>
          </div>
        </div>
        <Form
          className="form_data"
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off">
          <div>
            <Row className="super_agent update_agent">
              <Col span={12}>
                <Form.Item
                  label="Name"
                  name="name"
                  required
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}>
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Reference"
                  name="reference"
                  required
                  rules={[
                    {
                      required: true,
                      message: "Please specify reference!",
                    },
                  ]}>
                  <Input placeholder="Enter Reference" />
                </Form.Item>
                <Form.Item
                  label="Contact No."
                  name="number"
                  required
                  rules={[
                    {
                      required: true,
                      message: "Invalid Contact NO!",
                    },
                  ]}>
                  <Input type="number" placeholder="Enter Reference" />
                </Form.Item>
                <Form.Item
                  label="Password"
                  name="Password"
                  required
                  rules={[
                    {
                      required: true,
                      message: "Please Enter Password!",
                    },
                  ]}>
                  <Input type="password" placeholder="Password" />
                </Form.Item>
                <Form.Item
                  name="Status"
                  label="Status"
                  rules={[
                    {
                      required: true,
                    },
                  ]}>
                  <Select
                    // placeholder="Select a option and change input text above"
                    // onChange={onGenderChange}
                    defaultValue="Active"
                    allowClear>
                    <Option value="active">Active</Option>
                    <Option value="inactive">InActive</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="share type"
                  label="Share type"
                  rules={[
                    {
                      required: true,
                    },
                  ]}>
                  <Select
                    // placeholder="Select a option and change input text above"
                    // onChange={onGenderChange}
                    defaultValue="Active"
                    allowClear>
                    <Option value="fixed">fixed</Option>
                    <Option value="change">change</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}></Col>
            </Row>
            <div className="update_agent">
              <h2 className="match_share">Match Share and Comm</h2>
            </div>

            <Row className="super_agent update_agent">
              <Col span={12}>
                <Form.Item
                  label="SUPER Mobile Share(%)"
                  name="superMobileShare">
                  <Input type="number" disabled />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="AGENT Mobile Share(%)"
                  name="mobileshare"
                  rules={[
                    {
                      required: true,
                      message: "Invalid Mobile Share",
                    }]}
                  >
                  <Input type="number" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="SupperCommType" label="SUPER comm type">
                  <Select disabled allowClear>
                    <Option value="NoComm">No Comm</Option>
                    <Option value="Betbybet">Bet by bet</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="AgentCommType"
                  label="AGENT comm type"
                  rules={[
                    {
                      required: true,
                      message: "Invalid Mobile Share",
                    },
                  ]}>
                  <Select allowClear>
                    <Option value="NoComm">No Comm</Option>
                    <Option value="Betbybet">Bet by bet</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <div className="update_agent">
              <h2 className="match_share">Casino Share and Commission</h2>
            </div>
            <Row className="super_agent update_agent">
              <Col span={12}>
                <Form.Item
                  label="SUPER casino Share(%)"
                  name="supercasinoShare">
                  <Input type="number" disabled />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="AGENT casino Share(%)"
                  name="Casinoshare"
                  rules={[
                    {
                      required: true,
                      message: "Invalid Casino Share",
                    },
                  ]}
                 >
                  <Input type="number" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="casinoCommType" label="SUPER casino comm(%)">
                  <Input type="number" disabled />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="casinoCommType"
                  label="AGENT casino comm(%)"
                  rules={[
                    {
                      required: true,
                      message: "Invalid Mobile Share",
                    },
                  ]}>
                  <Input type="number" />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              wrapperCol={{
                offset: 21,
                span: 24,
              }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </>
  );
};

export default UpdateAgent;
