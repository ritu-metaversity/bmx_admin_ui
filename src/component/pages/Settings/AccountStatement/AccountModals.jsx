/* eslint-disable react/prop-types */
import {  useState } from "react";
import { Radio, Table } from "antd";
import "./AccountModals.scss";

const AccountModals = ({remark }) => {
  const columns = [
    {
      title: "userId",
      dataIndex: "userid",
      key: "userid",
    },
    {
      title: "Nation",
      dataIndex: "selectionname",
      key: "selectionname",
    },

    {
      title: "Rate",
      dataIndex: "pricevalue",
      key: "pricevalue",
    },
    {
      title: "Amount",
      dataIndex: "stack",
      key: "stack",
      render:(text, record)=>(
        <span className={record?.stack > 0?"text_success":"text_danger"}>
            {record?.stack}
        </span>
      )
    },
    {
      title: "Win",
      dataIndex: "netpnl",
      key: "netpnl",
      render:(text, record)=>(
        <span className={record?.netpnl > 0?"text_success":"text_danger"}>
            {record?.netpnl?.toFixed(2)}
        </span>
      )
    },
    {
      title: "Date",
      dataIndex: "matchedtime",
      key: "matchedtime",
    },
    {
      title: "IP",
      dataIndex: "ipAddress",
      key: "userIp",
    },
  ];
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    setValue(e.target.value);
  };


  return (
    <>
      <div className="accont_modals">
        <div className="sub_modals_section">
          <p className="account_title">
            {remark}
          </p>
          <div className="redio_section">
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}>All</Radio>
              <Radio value={2}>Back</Radio>
              <Radio value={3}>Lay</Radio>
            </Radio.Group>
            <div className="amount_data">
              <p>
                Total Soda: <span>{ 0}</span>
              </p>
              <p>
                Total Amount: <span>{ 0}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="table_section">
          <Table
            className="live_table acc_tabel limit_update"
            bordered
            rowClassName={(record) => record?.isback ? "back":"lay"}
            columns={columns}
            
            dataSource={[]}
            pagination={false}
          />
        </div>
      </div>
    </>
  );
};

export default AccountModals;
