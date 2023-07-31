import "./Signin.scss";
import { Button, Form, Input, message } from "antd";
import axios from "axios";
import { useLoginMutation } from "../../../store/service/authService";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [trigger, { data: authData, error, isLoading }] =
    useLoginMutation();

  const nav = useNavigate();

  useEffect(() => {
    if (authData?.status === false || error?.data?.message) {
      message.error(authData?.message || error.data?.message);
    } else if (authData?.token !== null && authData?.token !== undefined) {
      localStorage.setItem("token", authData?.token);
      localStorage.setItem("userId", authData?.userId);
      nav("/dashboard");
    }
  }, [authData, error]);

  const onFinish = (values) => {
    // console.log("Success:", values?.username);
    const authData = {
      userId: values?.username,
      password: values?.password,
      appUrl: "subadmin.localhost",
    };
    trigger(authData);
    // message.error(authData?.message)
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className="gx-app-login-wrap">
        <div className="gx-app-login-container">
          <div className="gx-app-login-main-content">
            {isLoading ? (
              <>
              <div className="main_loading_section"> </div>
                <div className="loading_image">
                  <img src="/Images/loaderfast.svg" alt="helllo" />
                </div>
                </>
            ) : (
              ""
            )}

            <div className="gx-app-logo-content">
              <div className="gx-app-logo-content-bg" />
              <div className="gx-app-logo-wid">
                <h1>
                  <span>Sign In</span>
                </h1>
                <p>
                  <span>
                    By Signing Up, you can avail full features of our services.
                  </span>
                </p>
              </div>
              <div className="gx-app-logo">
                <img alt="example" src="/Images/logo.png" />
              </div>
            </div>
            <div className="gx-app-login-content">
              <Form
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                style={{
                  maxWidth: 600,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off">
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "The input is not valid user ID!",
                    },
                  ]}>
                  <Input
                    onChange={onFinishFailed}
                    // onFocus={onFinishFailed}
                    // onMouseEnter={onFinishFailed}
                    placeholder="User ID"
                  />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                  ]}>
                  <Input
                  type="password"
                    // onMouseLeave={onFinishFailed}
                    // onFocus={onFinishFailed}
                    onChange={onFinishFailed}
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}>
                  <Button type="primary" htmlType="submit">
                    Sign in
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
