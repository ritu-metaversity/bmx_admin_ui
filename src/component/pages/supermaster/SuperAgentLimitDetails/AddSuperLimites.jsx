import { Button, Form, Input, Space, Table, notification } from "antd";
import React, { useEffect, useRef, useState } from "react";

import { useAddLimitMutation } from "../../../../store/service/userlistService";

const AddSuperLimites = ({ data }) => {
  const [addTotal, setAddTotal] = useState(0);
  const [chipsValue, setChipsValue] = useState();
  const [passWord, setPassword] = useState("");
  const [api, contextHolder] = notification.useNotification();

  const handelAddLimit = (e) => {
    setChipsValue(e.target.value);
    setAddTotal(Number(e.target.value) + Number(data?.childAmount));
  };

  const handelPassword = (e) => {
    setPassword(e.target.value);
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

  const [trigger, { data: addData, error, isLoading }] = useAddLimitMutation();

  const onFinish = (values) => {
    const addList = {
      amount: Number(values?.amount),
      remark: "deposit",
      lupassword: values?.pass,
      userId: data?.childId,
    };
    trigger(addList);
  };

  useEffect(() => {
    if (addData?.status === true) {
      openNotification(addData?.message);
    } else if (addData?.status === false || error?.data?.message) {
      openNotificationError(addData?.message || error?.data?.message);
    }
  }, [addData?.data, error]);

  return (
    <>
      {contextHolder}
      <div className="table_section mwt sport_detail" style={{paddingBottom:"12px"}}>
        <div className="table_section statement_tabs_data ant-spin-nested-loading">
          <Form
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off">
            <table className="live_table  limit_update">
              <tr>
                <th width="10%">Code</th>
                <th width="10%">Name</th>
                <th width="10%">C. Chips</th>
                <th width="30%">Add limit </th>
                <th width="5%">Total Limit</th>
                <th width="30%">Lu Password</th>
                <th width="5%">Action</th>
              </tr>

              <tr>
                <td>{data?.childId}</td>
                <td>{data?.childName}</td>
                <td>{data?.childAmount}</td>

                <td>
                  <div>
                    <Form.Item
                      name="amount"
                      required
                      rules={[
                        { required: true, message: "Please Enter Chips!" },
                      ]}>
                      <Input
                        onChange={(e) => handelAddLimit(e)}
                        type="number"
                        placeholder="Enter Chips"
                      />
                    </Form.Item>
                  </div>
                </td>

                <td>{addTotal}</td>
                <td>
                  <div>
                    <Form.Item
                      name="pass"
                      required
                      rules={[
                        {
                          required: true,
                          message: "Please Enter Your Password!",
                        },
                      ]}>
                      <Input
                        onChange={(e) => handelPassword(e)}
                        type="password"
                        placeholder="Enter Password"
                      />
                    </Form.Item>
                  </div>
                </td>
                <td>
                  <div className="minus_btn">
                    <Button
                      style={{ height: "unset" }}
                      className="add"
                      htmlType="submit">
                      Add
                    </Button>
                  </div>
                </td>
              </tr>
            </table>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AddSuperLimites;
