import React, { useState } from "react";
import { Table } from "antd";
import { useAccountstatementQuery } from "../../../../../store/service/supermasteAccountStatementServices";
import { useParams } from "react-router-dom";

const AllStatement = ({dateData, gameType}) => {

  const [newData, setNewData] = useState({})

  const {id} = useParams()

  const {data} = useAccountstatementQuery({
    index:"0",
    noOfRecords:"200",
    fromDate:dateData[0],
    toDate:dateData[1],
    userid:id || "",
    type:gameType
  },{refetchOnMountOrArgChange:true})

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Description",
      dataIndex: "remark",
      key: "remark",
    },
    {
      title: "Prev. Bal",
      dataIndex: "prevBal",
      key: "Prev. Bal",
    },
     {
      title: "CR",
      dataIndex: "credit",
      key: "credit",
      render: (text) => {
        return {
          children: <p className="text_success">{text}</p> ,
        };
      },
    },
    
     {
      title: "DR",
      dataIndex: "debit",
      key: "debit",
      render: (text) => {
        return {
          children: <p className="text_danger">{text}</p> ,
        };
      },
    },
     {
      title: "Comm+",
      dataIndex: "commPlus",
      key: "commPlus",
      render: (text) => {
        return {
          children: <p className="text_success">{text}</p> ,
        };
      },
    },
     {
      title: "Comm-",
      dataIndex: "commMinus",
      key: "commMinus",
      render: (text) => {
        return {
          children: <p className="text_danger">{text}</p> ,
        };
      },
    },
     {
      title: "Balance",
      dataIndex: "balance",
      key: "balance",
    },
  ];

  return (
    <>
      <div className="table_section statement_tabs_data">
      <div className="table_section">
            <Table
              className="live_table agent_master"
              bordered
              columns={columns}
              dataSource={data?.data?.dataList?.map((res)=>({...res, commPlus:0, commMinus:0, prevBal:0, balance:0})) || []}></Table>
          </div>
      </div>
    </>
  );
};

export default AllStatement;
