import { Button, Form, Input, Select, Switch } from "antd";
import React, { useEffect, useState } from "react";
import "./CasinoLockModals.scss";
import {
  useCasinoListQuery,
  useUpdateCasinoLockMutation,
} from "../../store/service/supermasteAccountStatementServices";
import { openNotification, openNotificationError } from "../../App";

const CasinoLockModals = ({ userIdData, handleClose }) => {
  const [form] = Form.useForm();
  const [isLock, setIsLock] = useState(false);
  const [cId, setCid] = useState();
  const [casinoIds, setCasinoIds] = useState([]);
  const [state, setState] = useState({
    isAuraAllowed: "",
    isSuperNovaAllowed: "",
    isQTechAllowed: "",
    isVirtualAllowed: "",
    isSportBookAllowed: "",
  });

  const { data } = useCasinoListQuery(
    {
      userId: userIdData,
    },
    { refetchOnMountOrArgChange: true }
  );

  const [trigger, { data: updateCasinoList, error, isLoading, isError }] = useUpdateCasinoLockMutation();

  useEffect(() => {
    data?.data?.map((key) => {
      setState((prev) => {
        return {
          ...prev,
          [`is${key.casinoName}Allowed`]: !key.casinoLock,
        };
      });
    });
  }, [data?.data]);

  console.log(casinoIds, "dfasdfasd");

  const onFinish = (values) => {
    trigger({
      ...state,
      lupassword: values?.lupassword,
      userId:userIdData
    })
  };

  console.log(state, "asdasdasds");

  useEffect(()=>{
    if (updateCasinoList?.status === true) {
      openNotification(updateCasinoList?.message);
      form?.resetFields();
      handleClose();
    } else if (updateCasinoList?.status === false || error?.data?.message) {
      openNotificationError(updateCasinoList?.message || error?.data?.message);
      handleClose();
    }
  }, [error, updateCasinoList?.data])

  return (
    <>
      <Form onFinish={onFinish} form={form} autoComplete="off">
        {data?.data?.map((item, id) => {
          return (
            <Form.Item
              key={id}
              className="switch_btn"
              label={item?.casinoName}
              style={{ marginTop: "12px" }}
              // name="casinoId"
              >
              <Switch
                defaultChecked={!item?.casinoLock}
                onChange={(e) =>
                  setState((prev) => {
                    return {
                      ...prev,
                      [`is${item?.casinoName}Allowed`]: e,
                    };
                  })
                }
              />
            </Form.Item>
          );
        })}
        <Form.Item
          style={{ marginTop: "12px" }}
          name="lupassword"
          rules={[
            {
              required: true,
              message: "Please Enter Current Password",
            },
          ]}>
          <Input placeholder="Enter Current Password" type="password" />
        </Form.Item>
        <div className="deposit_btn">
          <Form.Item>
            <Button
              style={{ backgroundColor: "rgb(115, 118, 111)" }}
              onClick={() => handleClose()}
            >
              Cancel
            </Button>
          </Form.Item>
          <Form.Item>
            <Button loading={isLoading} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
    </>
  );
};

export default CasinoLockModals;
