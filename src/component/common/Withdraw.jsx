import React, { useEffect } from "react";
import { Button, Form, Input, InputNumber, Spin, notification } from "antd";
import "./Deposit.scss";
import {
  useDepositMutation,
  useWithdrawMutation,
} from "../../store/service/userlistService";

const Withdraw = ({ balance, userIdData, handleClose }) => {
  const [api, contextHolder] = notification.useNotification();

  const [trigger, { data, error, isLoading }] = useWithdrawMutation();

  const onFinish = (values) => {
    const withdrawData = {
      amount: Number(values?.number),
      remark: "credit deposit",
      lupassword: values?.password,
      userId: userIdData,
    };
    trigger(withdrawData);
    console.log("Success:", values);
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

  useEffect(() => {
    if (data?.status === true) {
      openNotification(data?.message);
      handleClose();
    } else if (data?.status === false || error?.data?.message) {
      openNotificationError(data?.message || error?.data?.message);
    }
  }, [data?.data]);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      {contextHolder}
      <div className="ant-spin-nested-loading">
      {isLoading && (
          <>
            <Spin className="spin_icon comp_spin" size="large"></Spin>
          </>
        )}
      <div>
        <p>Curr Coins : {balance}</p>
      </div>
      <div className="form_modals">
       
        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
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
