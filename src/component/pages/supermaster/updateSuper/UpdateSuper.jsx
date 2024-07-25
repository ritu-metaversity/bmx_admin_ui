import  { useEffect, useState } from "react";
import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  notification,
} from "antd";
import "./UpdateSuper.scss";
import { useNavigate, useParams } from "react-router-dom";

const result = {
  "userName": "demoClient",
  "reference": "",
  "mobileNumber": null,
  "password": "Asdf1234",
  "status": true,
  "matchComm": 0.00,
  "sessionComm": 0.00,
  "casinoComm": 0.0,
  "casinoShare": null,
  "matchShare": null,
  "parentMatchComm": 0.00,
  "parentSessionComm": 0.00,
  "parentCasinoComm": 0.0,
  "parentCasinoShare": 90.00,
  "parentMatchShare": 90.00
}

const UpdateSuper = ({ updateName }) => {
  // console.log(updateName, "dasdasd")
  const [api, contextHolder] = notification.useNotification();
  const [commType, setCommType] = useState("");
  const nav = useNavigate();

  const [form] = Form.useForm();
  const [data, setData] = useState();

  const { id } = useParams();


  const mobileNum = /^[6-9][0-9]{9}$/;
  const passw = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{6,}$/;

  const onFinish = (values) => {
    const userData = {
      userId: id,
      userName: values?.name,
      phoneNumber: values?.number,
      password: values?.password,
      luPassword: values?.lupassword,
      status: values?.status == "inActive" ? false : true,
      commType: values?.comm_type == "bbb" ? "bbb" : "no-comm",
      matchComm: values?.Supermatchcomm || 0,
      sessionComm: values?.sess_comm || 0,
      casinoComm: values?.Supercasinocomm || 0,
      reference: values?.reference,
    };

    form?.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const { Option } = Select;



  useEffect(() => {
    setCommType(
      Number(result?.matchComm) == 0 ||
        Number(result?.sessionComm) == 0
        ? "no-comm"
        : "bbb"
    );
  }, [result]);

  const onCommissionType = (e) => {
    setCommType(e);
  };
  return (
    <>
      {contextHolder}
      <div className="main_live_section">
        <div className="_match">
          <div className="sub_live_section live_report">
            <div
              style={{ padding: "5px 8px", fontSize: "22px" }}
              className="team_name">
              Update {updateName}
            </div>
            <div className="show_btn">
              <button onClick={() => nav(-1)}>Back</button>
            </div>
          </div>
        </div>
        <div className="ant-spin-nested-loading">
          {/* {isLoading ? (
            <div className="spin_icon">
              <Spin size="large" />
            </div>
          ) : (
            ""
          )} */}
          <Form
            form={form}
            className="form_data"
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            onFocus={onFinishFailed}
            fields={[
              {
                name: "name",
                value: result.userName,
              },
              {
                name: "number",
                value: result.mobileNumber,
              },
              {
                name: "password",
                value: result.password,
              },
              {
                name: "status",
                value: result.status ? "active" : "inActive",
              },
              {
                name: "sess_comm",
                value: (result.sessionComm)?.toFixed(2),
              },
              {
                name: "matchcomm",
                value: result.parentMatchComm,
              },
              {
                name: "sesscomm",
                value: result.parentSessionComm,
              },
              {
                name: "casinoshare",
                value: result.parentCasinoShare,
              },
              {
                name: "casinoComm",
                value: result.parentCasinoComm,
              },
              {
                name: "reference",
                value: result.reference,
              },
              {
                name: "Supermatchcomm",
                value: (result.matchComm)?.toFixed(2),
              },
              {
                name: "supercasinoShare",
                value: result.casinoShare,
              },
              {
                name: "Supercasinocomm",
                value: result.casinoComm,
              },
              {
                name: "commType",
                value:
                  data?.data?.parentMatchComm == 0 ||
                  data?.data?.parentSessionComm == 0
                    ? "no-comm"
                    : "bbb",
              },
              {
                name: "comm_type",
                value: commType,
              },
              {
                name: "status",
                value: result.status ? "active" : "inActive",
              },
            ]}>
            <div>
              <Row className="super_agent  update_agent">
                <Col lg={12} xs={24}>
                  <Form.Item
                    label="Name"
                    name="name"
                    required
                    rules={[
                      {
                        required: true,
                        message: "Please enter your username!",
                      },
                    ]}>
                    <Input onKeyDown={(e) => {
                        if (
                          !e.key.match(/^[a-zA-Z ]$/) &&
                          e.key.length === 1
                        ) {
                          e.preventDefault();
                        }
                      }}/>
                  </Form.Item>
                  <Form.Item label="Reference" name="reference">
                    <Input placeholder="Enter Reference" />
                  </Form.Item>
                  <Form.Item
                    label="Contact No."
                    name="number"
                    rules={[
                      { pattern: mobileNum, message: "Invalid Contact NO!" },
                    ]}>
                    <InputNumber
                      className="number_field"
                      min={0}
                      width={"100%"}
                      type="number"
                      placeholder="Enter Contact No."
                    />
                  </Form.Item>
                  <Form.Item
                    label="Password"
                    name="password"
                    required
                    rules={[
                      {
                        required: true,
                        message: "Please Enter Password!",
                      },
                      {
                        pattern: passw,
                        message:
                          "Minimun 6 character, must contain letters and numbers!",
                      },
                    ]}>
                    <Input type="password" placeholder="Password" />
                  </Form.Item>

                  <Form.Item
                    name="status"
                    label="Status"
                    rules={[
                      {
                        required: true,
                        message: "",
                      },
                    ]}>
                    <Select
                      // placeholder="Select a option and change input text above"
                      // onChange={onGenderChange}
                      value={data?.data?.status ? "active" : "inActive"}
                      allowClear>
                      <Option value={"active"}>Active</Option>
                      <Option value={"inActive"}>InActive</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col lg={12} xs={24}></Col>
              </Row>
              <div>
                <h2 style={{ marginLeft: "0px" }} className="update_agent_text">
                  Match Share and Comm
                </h2>
              </div>
              <Row className="super_agent  update_agent">
                <Col lg={12} xs={24}>
                  <Form.Item
                    label={`${updateName} Comm type`}
                    name="commType"
                    required={false}>
                    <Input disabled />
                  </Form.Item>
                </Col>
                <Col lg={12} xs={24}>
                  <Form.Item
                    name="comm_type"
                    label="Comm type"
                    rules={[
                      {
                        required: true,
                        message: "",
                      },
                    ]}>
                    <Select
                      // placeholder="Select a option and change input text above"
                      onChange={(e) => onCommissionType(e)}
                      value={commType}>
                      <Option value="no-comm">No Comm</Option>
                      <Option value="bbb">Bet by bet</Option>
                    </Select>
                  </Form.Item>
                </Col>
                {commType == "bbb" ? (
                  <>
                    <Col lg={12} xs={24}>
                      <Form.Item
                        label= {`${updateName} match comm(%)`}
                        name="matchcomm"
                        required={false}>
                        <Input type="number" disabled />
                      </Form.Item>
                    </Col>
                    <Col lg={12} xs={24}>
                      <Form.Item
                        label="Match comm(%)"
                        name="Supermatchcomm"
                        required
                        rules={[
                          {
                            required: true,
                            message: "Please enter odds commission",
                          }
                        ]}>
                       <Select
                          defaultValue="Select Match comm(%)"
                          options={[
                            {
                              value: "0.00",
                              label: "0.00",
                            },
                            {
                              value: "0.25",
                              label: "0.25",
                            },
                            {
                              value: "0.50",
                              label: "0.50",
                            },
                            {
                              value: "0.75",
                              label: "0.75",
                            },
                            {
                              value: "1.00",
                              label: "1.00",
                            },
                            {
                              value: "1.25",
                              label: "1.25",
                            },
                            {
                              value: "1.50",
                              label: "1.50",
                            },
                            {
                              value: "1.75",
                              label: "1.75",
                            },
                            {
                              value: "2.00",
                              label: "2.00",
                            }
                          ]}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={12} xs={24}>
                      <Form.Item
                        label={`${updateName} sess comm(%)`}
                        name="sesscomm"
                        required={false}>
                        <Input type="number" disabled />
                      </Form.Item>
                    </Col>
                    <Col lg={12} xs={24}>
                      <Form.Item
                        label="Sess comm(%)"
                        name="sess_comm"
                        required
                        rules={[
                          {
                            required: true,
                            message: "Please enter session commission",
                          }
                        ]}>
                          <Select
                          defaultValue="Select Sess Comm(%)"
                          options={[
                            {
                              value: "0.00",
                              label: "0.00",
                            },
                            {
                              value: "0.25",
                              label: "0.25",
                            },
                            {
                              value: "0.50",
                              label: "0.50",
                            },
                            {
                              value: "0.75",
                              label: "0.75",
                            },
                            {
                              value: "1.00",
                              label: "1.00",
                            },
                            {
                              value: "1.25",
                              label: "1.25",
                            },
                            {
                              value: "1.50",
                              label: "1.50",
                            },
                            {
                              value: "1.75",
                              label: "1.75",
                            },
                            {
                              value: "2.00",
                              label: "2.00",
                            },
                            {
                              value: "2.25",
                              label: "2.25",
                            },
                            {
                              value: "2.50",
                              label: "2.50",
                            },
                            {
                              value: "2.75",
                              label: "2.75",
                            },
                            {
                              value: "3.00",
                              label: "3.00",
                            },
                          ]}
                        />
                       
                      </Form.Item>
                    </Col>
                  </>
                ) : (
                  ""
                )}
                
              </Row>
              
              
              <Row className="super_agent  update_agent">
                

                
                
                <Col lg={12} xs={24}>
                  <Form.Item
                    label="Transaction Password"
                    name="lupassword"
                    required
                    rules={[
                      {
                        required: true,
                        message: "Please Enter Transaction Password!",
                      },
                    ]}>
                    <Input
                      type="password"
                      autoComplete="off"
                      placeholder="Transaction Password"
                    />
                  </Form.Item>
                </Col>
                <Col lg={12} xs={24}>
                  <Form.Item
                    wrapperCol={{
                      offset: 19,
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
      </div>
    </>
  );
};

export default UpdateSuper;
