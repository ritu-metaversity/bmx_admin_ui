import { Button, Col, Divider, Dropdown, Pagination, Row, Select, Space } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useDeleteByUserIDMutation } from "../../../store/service/transactionServices";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const dateFormat = "YYYY/MM/DD";

const TransactionTable = ({ data, clientId }) => {
    const [debitCal, setDebitCal] = useState(0);
    const [creditCal, setCreditCal] = useState(0);
    const nav = useNavigate()

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const { Option } = Select;


  console.log(data, "dasdasdas")


  useEffect(()=>{
    const debitCal = data?.map((res)=>res?.debit).reduce((prev, curr) => Number(prev) + Number(curr), 0);
    const creditCal = data?.map((res)=>res?.credit).reduce((prev, curr) => Number(prev) + Number(curr), 0);
    setDebitCal(debitCal);
    setCreditCal(creditCal);
  }, [data])

  // console.log(data[data?.length-1], "dfssdfdsgfd")

  const [DeleteByUserId , {data:deletedData}] = useDeleteByUserIDMutation();


  const fetchDeletedTran = ()=>{
    nav(`/client/deletedlenden/${clientId}`)
  }

  const handelDeleteUser = (val)=>{
    DeleteByUserId({
      _id:val
    })
  }
  


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
              Balance: {(debitCal - creditCal)?.toFixed(2)}  {debitCal - creditCal>0?"( Dena )":"( Lena )"}
            </h3>
          </div>
          <div>
            <Button onClick={fetchDeletedTran}>Deleted</Button>
          </div>
        </div>
      <div className="table_section" style={{paddingBottom: "20px"}}>
        <table className="">
          <tr>
            <th className="text-right">#</th>
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
          {data?.length != 0 && data?.map((res) => {
            console.log(res, "dfsdfsdf")
            return (
              <tr key={res?.key}>
                <td 
                // onClick={()=>handelDeleteUser(res?._id?.$oid)}
                >
                  {
                    res?.doneBy &&  <Dropdown
                    className="table_dropdown sport_droupdown"
                    menu={{
                      items,
                      className: "trans",
                      onClick:()=>handelDeleteUser(res?._id?.$oid),
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
                  }
                 
                </td>
                <td>{moment(res?.date?.$date).format("DD-MM-YYYY, h:mm a")}</td>
                <td>{moment(res?.date?.$date).format("DD-MM-YYYY, h:mm a")}</td>
                <td>{res?.collectionName}</td>
                <td className="text-right">{res?.debit}</td>
                <td className="text-right">{res?.credit}</td>
                <td className="text-right">{res?.balance}</td>
                <td>{res?.paymentType}</td>
                <td>{res?.remarks}</td>
                <td>{res?.doneBy}</td>
              </tr>
            );
          })}
        </table>
      </div>
      {/* <Divider />
      <Pagination
        className="pagination_main ledger_pagination"
        defaultCurrent={1}
        total={50}
      /> */}
    </>
  );
};

export default TransactionTable;
