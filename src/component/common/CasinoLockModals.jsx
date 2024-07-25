import { Button, Form, Input,  Switch } from "antd";
import  { useEffect, useState } from "react";
import "./CasinoLockModals.scss";


const data = [
  {
      "casinoId": 1,
      "casinoName": "Aura",
      "casinoAllowed": true
  },
  {
      "casinoId": 2,
      "casinoName": "SuperNova",
      "casinoAllowed": true
  },
  {
      "casinoId": 3,
      "casinoName": "QTech",
      "casinoAllowed": true
  },
  {
      "casinoId": 4,
      "casinoName": "Virtual",
      "casinoAllowed": true
  },
  {
      "casinoId": 5,
      "casinoName": "SportBook",
      "casinoAllowed": true
  }
]

const CasinoLockModals = ({  handleClose }) => {
  const [form] = Form.useForm();

  const [state, setState] = useState({
    isAuraAllowed: "",
    isSuperNovaAllowed: "",
    isQTechAllowed: "",
    isVirtualAllowed: "",
    isSportBookAllowed: "",
  });


  useEffect(() => {
    data?.map((key) => {
      setState((prev) => {
        return {
          ...prev,
          [`is${key.casinoName}Allowed`]: key.casinoAllowed,
        };
      });
    });
  }, [data]);


  const onFinish = (values) => {
   
  };


  return (
    <>
      <Form onFinish={onFinish} form={form} autoComplete="off">
        {data?.map((item, id) => {
          return (
            <Form.Item
              key={id}
              className="switch_btn"
              label={item?.casinoName}
              style={{ marginTop: "12px" }}
              >
              <Switch
                defaultChecked={item?.casinoAllowed}
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
            <Button  type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
    </>
  );
};

export default CasinoLockModals;
