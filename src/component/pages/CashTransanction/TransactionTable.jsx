import { Button, Col, Divider, Dropdown, Pagination, Row, Select, Space } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

const dateFormat = "YYYY/MM/DD";

const TransactionTable = ({ data }) => {
    const [debitCal, setDebitCal] = useState(0);
    const [creditCal, setCreditCal] = useState(0);
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const { Option } = Select;

  console.log(data?.data, "dsdsadswd");

  useEffect(()=>{
    const debitCal = data?.data?.map((res)=>res?.debit).reduce((prev, curr) => Number(prev) + Number(curr), 0);
    const creditCal = data?.data?.map((res)=>res?.credit).reduce((prev, curr) => Number(prev) + Number(curr), 0);
    setDebitCal(debitCal);
    setCreditCal(creditCal);
  }, [data?.data])


  const items = [
    {
      label: <p className="title_section">Delete</p>,
      key: "0",
    },
  ];

  return (
    <>
      <div className="my_ledger" style={{padding: "12px 0px"}}>
      <div>
            <h3 style={{ padding: "5px", color: "rgb(214, 75, 75)" }}>
              Dena : {debitCal}
            </h3>
          </div>
          <div>
            <h3 style={{ padding: "5px", color: "rgb(51, 181, 28)" }}>
              Lena : {creditCal}
            </h3>
          </div>
         
          <div>
            <h3 style={{ padding: "5px", color: "rgb(51, 181, 28)" }}>
              Balance: -27.09 ( Dena )
            </h3>
          </div>
          <div>
            <Button>Deleted</Button>
          </div>
        </div>
      <div className="table_section">
        <table className="">
          <tr>
            <th></th>
            <th>Date</th>
            <th>Post Date</th>
            <th>Collection Name </th>
            <th className="text-right">Debit</th>
            <th className="text-right">Credit</th>
            <th className="text-right">Balance</th>
            <th>Payment Type</th>
            <th>Remark</th>
            <th>Done By</th>
          </tr>
          {data?.data?.map((res) => {
            return (
              <tr key={res?.key}>
                <td>
                  <Dropdown
                    className="table_dropdown sport_droupdown"
                    menu={{
                      items,
                      className: "trans",
                    }}
                    trigger={["click"]}>
                    <p
                      onClick={(e) => {
                        e.preventDefault();
                      }}>
                      <Space>
                        <CaretDownOutlined />
                      </Space>
                    </p>
                  </Dropdown>
                </td>
                <td>{res?.date}</td>
                <td>{res?.post_data}</td>
                <td>{res?.collectionName}</td>
                <td className="text-right">{res?.debit}</td>
                <td className="text-right">{res?.credit}</td>
                <td className="text-right">{res?.balance}</td>
                <td>{res?.paymentType}</td>
                <td>{res?.remarks}</td>
                <td>{res?.parentId}</td>
              </tr>
            );
          })}
        </table>
      </div>
      <Divider />
      <Pagination
        className="pagination_main ledger_pagination"
        defaultCurrent={1}
        total={50}
      />
    </>
  );
};

export default TransactionTable;
