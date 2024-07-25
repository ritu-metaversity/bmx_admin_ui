import { Button, Col, Form, Input, Row } from "antd";

import { useEffect } from "react";
import { openNotification, openNotificationError } from "../../../App";

const LedgerPopUp = ({ userData, modalsName, handleClose }) => {

  const [form] = Form.useForm();




  //   const openNotificationError = (mess) => {
  //     api.error({
  //       message: mess,
  //       closeIcon: false,
  //       placement: "top",
  //     });
  //   };

  const onFinish = (values) => {
    const payloadData = {
      userId: userData?.userId,
      collection: "CASH",
      amount: values?.amount,
      paymenttype: modalsName == "Lena" ? "Liya" : "Diya",
      remarks: values?.remark,
      transactionPassword: values?.password,
    };
    form?.resetFields();
  };
  return (
    <>


      <div className="my_ledger" style={{ paddingBottom: "3px" }}>
        <Form
          className="form_data mt-16 cash_data"
          name="basic"
          form={form}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off">
          <Row>
            <Col md={24} xs={24}>
              <Form.Item label="Client" name="client">
                <Input
                  disabled
                  defaultValue={userData?.userId}
                  value={userData?.userId}
                  type="text"
                  placeholder="Client Name"
                />
              </Form.Item>
            </Col>
            
            <Col md={24} xs={24}>
              <Form.Item
                label="Amount"
                name="amount"
                required
                rules={[
                  {
                    required: true,
                    message: "Enter Amount",
                  },
                ]}>
                <Input type="number" placeholder="Enter Amount" />
              </Form.Item>
            </Col>
            
            <Col md={24} xs={24}>
              <Form.Item
                label="Remark"
                name="remark"
                required
                rules={[
                  {
                    required: true,
                    message: "Enter Remark",
                  },
                ]}>
                <Input type="text" placeholder="Remarks" />
              </Form.Item>
            </Col>

            <Col md={24} xs={24}>
              <Form.Item
                label="Transaction Password"
                name="password"
                required
                rules={[
                  {
                    required: true,
                    message: "Enter Transaction Password",
                  },
                ]}>
                <Input type="password" placeholder="Remarks" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item wrapperCol={{ span: 24 }}>
            <Button  type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default LedgerPopUp;
