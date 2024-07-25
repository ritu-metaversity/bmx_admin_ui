import "./Signin.scss";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

const Signin = ({logo}) => {
  const nav = useNavigate();


  const onFinish = (values) => {
    const authData = {
      userId: (values?.username?.trim()),
      password: (values?.password?.trim()),
      appUrl: "subadmin.11bet24.com",
    };
    nav('/dashboard')
  };


  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };



  return (
    <>
      <div className="gx-app-login-wrap">
        <div className="gx-app-login-container">
          <div className="gx-app-login-main-content">
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
                <img alt="example" src={logo} />
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
                >
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
