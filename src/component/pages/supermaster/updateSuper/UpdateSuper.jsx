import { Button, Col, Form, Input, Row, Select } from "antd";
import "./UpdateSuper.scss";

const UpdateSuper = () => {
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
              Update Super Agent
            </div>
            {/* <div className="show_btn">
              <button>Show</button>
              <button onClick={handleBackClick}>Back</button>
            </div> */}
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
          <Row className="super_agent  update_agent">
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
          <div>
            <h2 className="update_agent_text">Match Share and Comm</h2>
          </div>
          <Row className="super_agent  update_agent">
            <Col span={12}>
                <Form.Item
                  label="MASTER Mobile Share(%)"
                  name="mobileshare"
                  required={false}>
                  <Input type="number" disabled/>
                </Form.Item>
                
            
            </Col>
            <Col span={12}>
             
                <Form.Item
                  label="SUPER Mobile Share(%)"
                  name="superMobileShare"
                  required
                  rules={[
                    {
                      required: true,
                      message: "Invalid Mobile Share",
                    },
                  ]}>
                  <Input type="number" />
                </Form.Item>
                
            
            </Col>
            <Col span={12}>
             
                
                <Form.Item
                  label="MASTER Comm type"
                  name="commType"
                  required={false}>
                  <Input disabled />
                </Form.Item>
               
            
            </Col>
            <Col span={12}>
             
                
                <Form.Item
                  name="SupperCommType"
                  label="SUPER comm type"
                  rules={[
                    {
                      required: true,
                      message: "",
                    },
                  ]}>
                  <Select
                    // placeholder="Select a option and change input text above"
                    // onChange={onGenderChange}
                    defaultValue="Bet by bet"
                    allowClear>
                    <Option value="NoComm">No Comm</Option>
                    <Option value="Betbybet">Bet by bet</Option>
                  </Select>
                </Form.Item>

                
            
            </Col>
            <Col span={12}>
             
                
                <Form.Item
                  label="MASTER match comm(%)"
                  name="matchcomm"
                  required={false}>
                  <Input type="number" disabled/>
                </Form.Item>
                
            
            </Col>
            <Col span={12}>
             
                

                <Form.Item
                  label="SUPER match comm(%)"
                  name="Supermatchcomm"
                  required
                  rules={[
                    {
                      required: true,
                      message: "Please enter odds commission",
                    },
                  ]}>
                  <Input type="number" />
                </Form.Item>
                
            
            </Col>
            <Col span={12}>
             
                
                <Form.Item
                  label="MASTER sess comm(%)"
                  name="sesscomm"
                  required={false}>
                  <Input type="number" disabled/>
                </Form.Item>
            
            </Col>
            <Col span={12}>
             
                
                <Form.Item
                  label="SUPER sess comm(%)"
                  name="SupperSessComm"
                  required
                  rules={[
                    {
                      required: true,
                      message: "Please enter session commission",
                    },
                  ]}>
                  <Input type="number" />
                </Form.Item>
            
            </Col>
          </Row>
          <div>
            <h2 className="update_agent_text">Casino Share and Commission</h2>
          </div>
          <Row className="super_agent  update_agent">
            <Col span={12}>
             
                <Form.Item
                  label="MASTER casino Share(%)"
                  name="casinoshare"
                  required={false}>
                  <Input type="number" disabled/>
                </Form.Item>
                
            
            </Col>
            <Col span={12}>
             
                <Form.Item
                  label="SUPER casino Share(%)"
                  name="supercasinoShare"
                  required
                  rules={[
                    {
                      required: true,
                      message: "Invalid Casino Share",
                    },
                  ]}>
                  <Input type="number" />
                </Form.Item>
            
            </Col>
            <Col span={12}>
             
               
                <Form.Item
                  label="MASTER casino comm(%)"
                  name="casinoType"
                  required={false}>
                  <Input  disabled/>
                </Form.Item>
            
            </Col>
            <Col span={12}>
             
               

                <Form.Item
                  label="SUPER casino comm(%)"
                  name="Supercasinocomm"
                  required
                  rules={[
                    {
                      required: true,
                      message: "Please enter valid Casino commission",
                    },
                  ]}>
                  <Input type="number" />
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 20,
                    span: 24,
                  }}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
            
            </Col>
          </Row>
        </div>
        </Form>
      </div>
    </>
  );
};

export default UpdateSuper;
