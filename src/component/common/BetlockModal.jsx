import React, { useEffect } from "react";
import { Button, Form, Input, InputNumber, Spin, notification } from "antd";
import "./Deposit.scss";
import {
  useBlockBettingMutation,
} from "../../store/service/userlistService";

const BetlockModal = ({ betStatus, setBetStatus ,userIdData, handleClose }) => {
  const [api, contextHolder] = notification.useNotification();
  const [form]= Form.useForm();


  const [trigger, {data, error, isLoading}]= useBlockBettingMutation()

  const onFinish = (values) => {
    const bettingPayload = {
      userId:userIdData,
      betLock:betStatus,
      accountLock:false,
      isactive:true,
      liveCasinoLock:false,
      virtualCasinoLock:false,
      lupassword:values?.password
    } 
    trigger(bettingPayload);
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
      setBetStatus(!betStatus);
      openNotification(data?.message);
      form?.resetFields();
      handleClose();
    } else if (data?.status === false || error?.data?.message) {
      openNotificationError(data?.message || error?.data?.message);
      handleClose();
    }
  }, [data?.status, error]);


  return (
    <>
      {contextHolder}
      <div className="ant-spin-nested-loading">
      {isLoading && (
          <>
            <Spin className="spin_icon betting_icon comp_spin" size="large"></Spin>
          </>
        )}
      <div className="form_modals">
       
        <Form
          onFinish={onFinish}
          form={form}
          autoComplete="off">
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
              <Button style={{backgroundColor:"rgb(115, 118, 111)"}} onClick={() => handleClose()}>
                Cancel
              </Button>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                {betStatus ? "Block Betting":"UnBlock Betting"}
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
