/* eslint-disable react/prop-types */
import { Button, Form, Input } from "antd";


const ChangePassword = ({ setIsModalOpen }) => {

  const pType = "new";
  const uType = 5;

  
 

  const onFinish = () => {};


  // const passw = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{6,15}$/;



 
  return (
    <>
      <Form
        name="basic"
        onFinish={onFinish}
        autoComplete="off"
        initialValues={{
          remember: true,
        }}>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}>
          <Input.Password placeholder="Enter Old Password" />
        </Form.Item>

        <Form.Item
          name="newpassword"
          rules={[
            {
              required: true,
              message: "Please input your new password!",
            },
          ]}>
          <Input.Password placeholder="Enter New Password" />
        </Form.Item>

        <div className="change_button">
          <Form.Item>
            <Button
              onClick={() => (pType != "old" || pType != "Old") && uType != "5" && setIsModalOpen(false)}
              className="return"
              type="primary">
              Return
            </Button>
          </Form.Item>
          <Form.Item>
            <Button  type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
    </>
  );
};

export default ChangePassword;
