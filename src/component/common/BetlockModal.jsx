/* eslint-disable react/prop-types */
import {
  Button,
  Form,
  Input,
  Select,
} from "antd";
import "./Deposit.scss";

const BetlockModal = ({
  betStatus,
  handleClose,
  accStatus,
 
}) => {
  const [form] = Form.useForm();


  const onFinish = () => {
  
  };


  return (
    <>
      <div className="ant-spin-nested-loading">
       
        <div className="form_modals">
          <Form onFinish={onFinish} form={form} autoComplete="off">
            <Form.Item
              name="type"
              rules={[
                {
                  required: true,
                  message: "Select List",
                },
              ]}>
              <Select
                defaultValue="Select Betting"
                options={[
                  {
                    value: "bet",
                    label: (
                      <div>
                        {betStatus ? "UnBlock Betting" : "Block Betting"}
                      </div>
                    ),
                  },
                  {
                    value: "acc",
                    label: (
                      <div>
                        {accStatus ? "UnBlock Account" : "Account Block"}
                      </div>
                    ),
                  },
                ]}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please enter password",
                },
              ]}>
              <Input placeholder="Enter Current Password" type="password" />
            </Form.Item>

            <div className="deposit_btn">
              <Form.Item>
                <Button
                  style={{ backgroundColor: "rgb(115, 118, 111)" }}
                  onClick={() => handleClose()}>
                  Cancel
                </Button>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default BetlockModal;
