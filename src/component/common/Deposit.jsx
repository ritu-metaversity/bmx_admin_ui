import React, { useEffect } from "react";
import { Button, Form, Input, InputNumber, Spin, notification } from "antd";
import './Deposit.scss'
import { useDepositMutation } from "../../store/service/userlistService";

const Deposit = ({balance, userIdData, handleClose}) => {
  const [form]= Form.useForm();
  const [api, contextHolder] = notification.useNotification();


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


    const [trigger , {data, error, isLoading}] = useDepositMutation()

  const onFinish = (values) => {
    const depositData = {
        amount:Number(values?.number),
        remark:"credit deposit",
        lupassword:values?.password,
        userId:userIdData
    }
    trigger(depositData)
    form?.resetFields();
  };


useEffect(()=>{
    if(data?.status === true){
        openNotification(data?.message);
        form?.resetFields();
        handleClose()
    }else if(data?.status === false || error?.data?.message){
        openNotificationError(data?.message || error?.data?.message);
    }
}, [data?.data, error])

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
    {contextHolder}
    <div>
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
          form={form}
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
            <Input placeholder="Enter Password" type="password" />
          </Form.Item>

            <div className="deposit_btn">
          <Form.Item>
            <Button type="primary" >
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
