import { Button, Form, Input, InputNumber } from "antd";
import "./Deposit.scss";

const Deposit = ({ handleClose }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    form?.resetFields();
  };

  const childUplineAmount = 200;

  return (
    <>
      <div>
        <div>
          <p style={{ fontSize: "23px", paddingBottom: "12px" }}>
            Curr Coins :{" "}
            <span
              className={
                childUplineAmount < 0 ? "text_danger" : "text_success"
              }>
              {childUplineAmount}
            </span>{" "}
          </p>
        </div>
        <div className="form_modals">
          <Form onFinish={onFinish} form={form} autoComplete="off">
            <Form.Item
              required
              name="number"
              rules={[
                {
                  required: true,
                  message: "Please enter valid Coins",
                },
              ]}>
              <InputNumber
                type="number"
                className="number_field"
                style={{ width: "100%" }}
                placeholder="Enter Coins"
                min={0}
                step={1}
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
              <Input
                autoComplete="off"
                placeholder="Enter Password"
                type="password"
              />
            </Form.Item>

            <div className="deposit_btn">
              <Form.Item>
                <Button onClick={() => handleClose()} type="primary">
                  Return
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

export default Deposit;
