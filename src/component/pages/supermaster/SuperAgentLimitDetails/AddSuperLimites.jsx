import { Button, Form, Input , notification } from "antd";
import  {  useState } from "react";

import { useParams } from "react-router-dom";


const data = {
  "parentName": "demoSubAdmin",
  "parentAmount": "65000.0",
  "parentId": "demoSubAdmin",
  "childName": "demoClient",
  "childAmount": "5000.0",
  "childId": "CdemoClient",
  "childUplineAmount": null
}

const AddSuperLimites = () => {
  const [addTotal, setAddTotal] = useState(0);
  const [chipsValue, setChipsValue] = useState();
  const [passWord, setPassword] = useState("");
  const [api, contextHolder] = notification.useNotification();
  const [form]= Form.useForm();

  const {id} = useParams()

  const handelAddLimit = (e) => {
    setChipsValue(e.target.value);
    setAddTotal(Number(e.target.value) + Number(data?.childAmount));
  };

  const handelPassword = (e) => {
    setPassword(e.target.value);
  };
  const onFinish = (values) => {
    const addList = {
        amount:Number(values?.amount),
        remark:"Updated Limit",
        lupassword:values?.pass,
        userId:id
    };
    // trigger(addList);
  };


  return (
    <>
      {contextHolder}
      <div className="table_section mwt sport_detail" style={{paddingBottom:"12px"}}>
        <div className="table_section statement_tabs_data ant-spin-nested-loading">
          <Form
            onFinish={onFinish}
            form={form}
            // onFinishFailed={onFinishFailed}
            autoComplete="off">
            <table className="live_table  limit_update">
              <tr>
                <th width="10%">Code</th>
                <th width="10%">Name</th>
                <th width="10%">C. Chips</th>
                <th width="30%">Add limit </th>
                <th width="5%">Total Limit</th>
                <th width="30%">Transaction Password</th>
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
                        placeholder="Enter Transaction Password"
                        autoComplete="off"
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
