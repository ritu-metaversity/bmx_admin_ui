import React, { useEffect } from "react";
import { Button, Col, Form, Input, InputNumber, Row, Select, Spin, notification } from "antd";
import "./UpdateSuper.scss";
import { useSelector } from "react-redux";
import { globalSelector } from "../../../../store/global/slice";
import { useGetUserQuery, useUpdateUserMutation } from "../../../../store/service/createUserServices";
import { useParams } from "react-router-dom";

const UpdateSuper = ({updateName}) => {

  const [api, contextHolder] = notification.useNotification();

  const {id} = useParams()
  const [trigger, { data: updateData, isLoading, error }] = useUpdateUserMutation();



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

  const mobileNum = /^[6-9][0-9]{9}$/;
  const passw=  /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{6,}$/

  const onFinish = (values) => {
    const userData = {
      userId: id,
      userName: values?.name,
      phoneNumber: values?.number,
      password: values?.password,
      luPassword: "1111111",
      status: values?.Status,
      commType: values?.comm_type == "Bet by bet"?"bbb":"nocomm",
      matchComm: values?.Supermatchcomm,
      sessionComm: values?.sess_comm,
      casinoComm: values?.Supercasinocomm,
      reference: values?.reference,
    };

    trigger(userData)
  };

  useEffect(() => {
    if (updateData?.status === true) {
      openNotification(updateData?.message);
    } else if (updateData?.status === false || error?.data?.message) {
      openNotificationError(updateData?.message || error?.data?.message);
    }
  }, [updateData, error]);


  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const { Option } = Select;

  const userData = useSelector(globalSelector);



  const {data} = useGetUserQuery({
    userId:id,
  })





  console.log(data?.data, "dsfsdfefw");

  return (
    <>
    {contextHolder}
      <div className="main_live_section">
        <div className="_match">
          <div
            className="sub_live_section live_report"
            // style={{ marginTop: "35px" }}
          >
            <div
              style={{ padding: "5px 8px", fontSize: "22px" }}
              className="team_name">
              Update {updateName}
            </div>
            {/* <div className="show_btn">
              <button>Show</button>
              <button onClick={handleBackClick}>Back</button>
            </div> */}
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
          onFocus={onFinishFailed}
          fields={[
            {
              name: "name",
              value: data?.data?.userName,
            },
            {
              name: "number",
              value: data?.data?.mobileNumber,
            },
            {
              name: "password",
              value: data?.data?.password,
            },
            {
              name: "status",
              value: data?.data?.status ? "Active" : "InActive",
            },
            {
              name: "Supermatchcomm",
              value: userData?.data?.matchCommission,
            },
            {
              name: "sess_comm",
              value: userData?.data?.sessionComm,
            },
            {
              name: "matchcomm",
              value: data?.data?.parentMatchComm,
            },
            {
              name: "sesscomm",
              value: data?.data?.parentSessionComm,
            },
            {
              name: "casinoshare",
              value: data?.data?.parentCasinoShare,
            },
            {
              name: "casinoComm",
              value: data?.data?.parentCasinoComm,
            },
            {
              name: "reference",
              value: data?.data?.reference,
            },
            {
              name: "Supermatchcomm",
              value: data?.data?.matchComm,
            },
            {
              name: "sess_comm",
              value: data?.data?.sessionComm,
            },
            {
              name: "supercasinoShare",
              value: data?.data?.casinoShare,
            },
            {
              name: "Supercasinocomm",
              value: data?.data?.casinoComm,
            },
            {
              name: "commType",
              value: data?.data?.parentMatchComm == 0 || data?.data?.parentSessionComm == 0?"No Comm":"Bet by bet",
            },
            {
              name: "comm_type",
              value: data?.data?.matchComm == 0 || data?.data?.sessionComm == 0?"No Comm":"Bet by bet",
            },
            {
              name: "status",
              value: data?.data?.status?"active":"inactive",
            },
          ]}>
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
                  <Input disabled />
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
                    { pattern:mobileNum,
                      message: "Invalid Contact NO!",
                    }
                  ]}>
                  <InputNumber className="number_field" min={0} width={"100%"} type="number" placeholder="Enter Reference" />
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
                    { pattern:passw,
                      message: "Minimun 6 charecter, must contain letters and numbers!",
                    }
                  ]}>
                  <Input type="text" placeholder="Password" />
                </Form.Item>
                <Form.Item
                  name="status"
                  label="Status"
                  rules={[
                    {
                      required: true,
                      message:""
                    },
                  ]}>
                  <Select
                    // placeholder="Select a option and change input text above"
                    // onChange={onGenderChange}
                    defaultValuevalue={
                      data?.data?.status? "Active" : "InActive"
                    }
                    allowClear>
                    <Option value={true}>Active</Option>
                    <Option value={false}>InActive</Option>
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
                  label="MASTER Comm type"
                  name="commType"
                  required={false}>
                  <Input disabled />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="comm_type"
                  label="SUPER comm type"
                  rules={[
                    {
                      required: true,
                      message: "",
                    },
                  ]}>
                  <Select
                    // placeholder="Select a option and change input text above"
                    // onChange={onCommissionType}
                    defaultValue={
                      data?.data?.matchComm === 0 ||data?.data?.sessionComm === 0 ? "No Comm" : "Bet by bet"
                    }
                    allowClear>
                    <Option value="nocomm">No Comm</Option>
                    <Option value="bbb">Bet by bet</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="MASTER match comm(%)"
                  name="matchcomm"
                  required={false}>
                  <Input type="number" disabled />
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
                  <InputNumber className="number_field" min={0} step="0.1"  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="MASTER sess comm(%)"
                  name="sesscomm"
                  required={false}>
                  <Input type="number" disabled />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="SUPER sess comm(%)"
                  name="sess_comm"
                  required
                  rules={[
                    {
                      required: true,
                      message: "Please enter session commission",
                    },
                  ]}>
                  <InputNumber className="number_field" min={0} step="0.1"/>
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
                  <Input type="number" disabled />
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
                  <InputNumber className="number_field" min={0} step="0.1"/>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="MASTER casino comm(%)"
                  name="casinoComm"
                  required={false}>
                  <Input disabled />
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
                   <InputNumber className="number_field" min={0} step="0.1"/>
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
      </div>
    </>
  );
};

export default UpdateSuper;
