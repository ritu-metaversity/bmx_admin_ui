import React, { useEffect } from "react";
import { Button, Form, Input, InputNumber, Spin} from "antd";
import "./Deposit.scss";
import {
  useDepositAndWithdrawQuery,
  useMinusLimitMutation,
} from "../../store/service/userlistService";
import { openNotification, openNotificationError } from "../../App";

const Withdraw = ({ data:datadeposit, userIdData, handleClose }) => {
  const [form]= Form.useForm();


  const [trigger, { data, error, isLoading }] = useMinusLimitMutation();
  const {data: depositeWithdraw} = useDepositAndWithdrawQuery({
    userId:datadeposit
  });

  const onFinish = (values) => {
    const withdrawData = {
      amount: Number(values?.number),
      remark: "credit deposit",
      lupassword: values?.password,
      userId: userIdData,
    };
    trigger(withdrawData);
    form?.resetFields();
  };

  useEffect(() => {
    if (data?.status === true) {
      openNotification(data?.message);
      form?.resetFields();
      handleClose();
    } else if (data?.status === false || error?.data?.message) {
      openNotificationError(data?.message || error?.data?.message);
      handleClose();
    }
  }, [data?.data, error]);


  return (
    <>
      <div className="ant-spin-nested-loading">
      {isLoading && (
          <>
            <Spin className="spin_icon comp_spin" size="large"></Spin>
          </>
        )}
      <div>
        <p>Curr Coins : {depositeWithdraw?.data?.childUplineAmount}</p>
      </div>
      <div className="form_modals">
       
        <Form
          onFinish={onFinish}
          form={form}
          autoComplete="off">
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
              min={0}
              step={1}
              placeholder="Enter Coins"
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
            <Input placeholder="Enter Password" type="password" />
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

export default Withdraw;
