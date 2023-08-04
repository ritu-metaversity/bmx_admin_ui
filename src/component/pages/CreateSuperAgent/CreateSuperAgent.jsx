import { useNavigate } from "react-router-dom";
import "./CreateSuperAgent.scss";
import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Spin,
  notification,
} from "antd";
import {
  useCreateUserDataQuery,
  useCreateUserMutation,
} from "../../../store/service/createUserServices";
import { useEffect, useState } from "react";

const CreateSuperAgent = ({ createName }) => {
  const [userData, setUserData] = useState({});
  const [commiType, setCommiType] = useState("nocomm");
  const [api, contextHolder] = notification.useNotification();

  const commissionType = (value) => {
    setCommiType(value);
  };

  const openNotification = (mess) => {
    api.success({
      message: mess,
      description: "Success",
      closeIcon: false,
      placement: "top",
    });
  };

  const openNotificationError = (mess) => {
    api.error({
      message: mess,
      closeIcon: false,
      placement: "top",
    });
  };

  const passw = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{6,15}$/;
  var mobileNum = /^[6-9][0-9]{9}$/;

  const [trigger, { data: UserList, error, isLoading }] =
    useCreateUserMutation();

  const onFinish = (values) => {
    const userData = {
      userId: "",
      username: values?.Name,
      mobile: values?.mobile,
      city: "",
      userRole: 1,
      password: values?.password,
      sportPartnership: values?.matchShare,
      oddLossCommission: commiType === "nocomm" ? "0" : values?.Match_comm,
      lupassword: "1111111",
      liveCasinoLock: false,
      casinoPartnership: 1.0,
      fancyLossCommission: commiType === "nocomm" ? "0" : values?.sess_comm,
      casinoCommission: values?.cassino_Comm,
      commType: values?.Commtype,
      appId: 1,
      amount: values?.Coins,
      reference:values?.reference,
    };
    trigger(userData);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (UserList?.status === true) {
      openNotification(UserList?.message);
    } else if (UserList?.status === false || error?.data?.message) {
      openNotificationError(UserList?.message || error?.data?.message);
    }
  }, [UserList, error]);

  const { Option } = Select;

  const nav = useNavigate();

  const handleBackClick = () => {
    nav("/client/list-super");
  };

  const { data } = useCreateUserDataQuery();

  useEffect(() => {
    setUserData(data?.data);
  }, [data?.data]);

  return (
    <>
      {contextHolder}
      <div className="main_live_section">
        <div className="_match">
          <div className="sub_live_section live_report">
            <div
              style={{ padding: "5px 8px", fontSize: "22px" }}
              className="team_name">
              Create {createName}
            </div>
            <div className="show_btn">
              <button onClick={handleBackClick}>Back</button>
            </div>
          </div>
        </div>
        <div className="ant-spin-nested-loading">
          {isLoading ? (
            <div className="spin_icon">
              <Spin size="large" />
            </div>
          ) : (
            ""
          )}
          <Form
            className="form_data"
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            fields={[
              {
                name: "My Coins",
                value: data?.data?.myBalance,
              },
              {
                name: "MyMatchShare",
                value: data?.data?.myMatchCommission,
              },
              {
                name: "MyCasinoShare",
                value: data?.data?.mySessionCommission,
              },
              {
                name: "MyCommtype",
                value:
                  data?.data?.mySessionCommission === 0 &&
                  data?.data?.myMatchCommission
                    ? "No Comm"
                    : "Bet by Bet",
              },
            ]}>
            <div>
              <Row className="super_agent">
                <Col span={12}>
                  <Form.Item
                    label="Name"
                    name="Name"
                    required
                    rules={[
                      {
                        required: true,
                        message: "Please enter name",
                      },
                    ]}>
                    <Input type="text" placeholder="Enter full name" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Reference"
                    name="reference"
                    required
                    rules={[
                      {
                        required: true,
                        message: "Please specify reference",
                      },
                    ]}>
                    <Input type="text" placeholder="Enter Reference" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="My Coins" name="My Coins" required={false}>
                    <Input type="number" disabled />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Coins"
                    name="Coins"
                    required
                    rules={[
                      {
                        required: true,
                        message: "Please enter valid Coins",
                      },
                    ]}>
                    <InputNumber
                      className="number_field"
                      min={0}
                      placeholder="Super Agent Coins"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Contact No."
                    name="mobile"
                    required
                    rules={[
                      {
                        required: true,
                        message: "Please contact number",
                      },
                      {
                        validator: async (_, names) => {
                          if (
                            !mobileNum.test(names) &&
                            names != "" &&
                            names != null
                          ) {
                            return Promise.reject(
                              new Error("Please contact number")
                            );
                          }
                        },
                      },
                    ]}>
                    <InputNumber
                      className="number_field"
                      min={0}
                      type="number"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please Enter Password",
                      },
                      {
                        validator: async (_, names) => {
                          if (
                            !passw.test(names) &&
                            names != "" &&
                            names != null
                          ) {
                            return Promise.reject(
                              new Error(
                                "Minimun 6 charecter, must contain letters and numbers"
                              )
                            );
                          }
                        },
                      },
                    ]}>
                    <Input type="password" placeholder="Password" />
                  </Form.Item>
                </Col>
              </Row>

              <div>
                <h2 className="match_share">
                  {createName} Match Share and Commission
                </h2>
              </div>
              <Row className="super_agent sub_super">
                <Col span={12}>
                  <Form.Item
                    label="My Match Share(%)"
                    name="MyMatchShare"
                    required={false}>
                    <InputNumber
                      className="number_field"
                      min={0}
                      defaultChecked={userData && userData?.myMatchCommission}
                      disabled
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Match Share(%)"
                    name="matchShare"
                    required
                    rules={[
                      {
                        required: true,
                        message: "Invalid Match Share",
                      },
                    ]}>
                    <InputNumber
                      className="number_field"
                      min={0}
                      step="0.1"
                      placeholder="Super Agent Match Share"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="My Comm type"
                    name="MyCommtype"
                    required={false}>
                    <Input type="text" disabled />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    name="Commtype"
                    label="Comm type"
                    required
                    rules={[
                      {
                        required: true,
                        message: "",
                      },
                    ]}>
                    <Select
                      onChange={commissionType}
                      defaultValue="Commision Type"
                      allowClear>
                      <Option value="nocomm">No Comm</Option>
                      <Option value="bbb">Bet by bet</Option>
                    </Select>
                  </Form.Item>
                </Col>
                {commiType === "bbb" && (
                  <>
                    <Col span={12}>
                      <Form.Item name="My_Match_comm" label="My Match comm(%)">
                        <InputNumber
                          className="number_field"
                          min={0}
                          step="0.1"
                          disabled
                        />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        name="Match_comm"
                        required
                        label="Match comm(%)"
                        rules={[
                          {
                            required: true,
                            message: "Please enter odds commission",
                          },
                        ]}>
                        <InputNumber
                          className="number_field"
                          min={0}
                          step="0.1"
                          placeholder="Match commission"
                        />
                      </Form.Item>
                    </Col>

                    <Col span={12}>
                      <Form.Item name="My_Sess_comm" label="My Sess comm(%)">
                        <InputNumber
                          className="number_field"
                          min={0}
                          step="0.1"
                          disabled
                        />
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item
                        name="sess_comm"
                        required
                        label="Sess Comm(%)"
                        rules={[
                          {
                            required: true,
                            message: "Please enter session commission",
                          },
                        ]}>
                        <InputNumber
                          className="number_field"
                          min={0}
                          step="0.1"
                          placeholder="session commission"
                        />
                      </Form.Item>
                    </Col>
                  </>
                )}
              </Row>

              <div>
                <h2 className="match_share">
                  {createName} Casino Share and Commission
                </h2>
              </div>
              <Row className="super_agent sub_super">
                <Col span={12}>
                  <Form.Item
                    label="My Casino Share(%)"
                    name="MyCasinoShare"
                    required={false}>
                    <InputNumber
                      className="number_field"
                      min={0}
                      step="0.1"
                      disabled
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Casino Share(%)"
                    name="casino_Share"
                    required
                    rules={[
                      {
                        required: true,
                        message: "Invalid Casino Share",
                      },
                    ]}>
                    <InputNumber
                      className="number_field"
                      min={0}
                      step="0.1"
                      placeholder="Super Agent Casino Share"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="My Casino comm(%)"
                    name="cassinoComm"
                    required={false}>
                    <Input type="number" disabled />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Casino comm(%)"
                    name="cassino_Comm"
                    required
                    rules={[
                      {
                        required: true,
                        message: "Please enter valid Casino commission",
                      },
                    ]}>
                    <InputNumber
                      className="number_field"
                      min={0}
                      step="0.1"
                      placeholder="Casino Copmmission"
                    />
                  </Form.Item>
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

export default CreateSuperAgent;
