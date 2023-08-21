import { Table } from 'antd'
import React from 'react'


const columns = [
    {
      title: "A/C Name",
      dataIndex: "userId",
      key: "userId",
      render: (text, record) => (
        <span className="user_id">{ record?.userId} </span>
      ),
    },
    {
      title: "P&L",
      dataIndex: "pnl",
      key: "pnl",
    },
    {
      title: "Comm.",
      dataIndex: "comm",
      key: "comm",
    }
  ];

const AdminProfitLoss = ({name, data}) => {
  // console.log(data)

  // console.log(data?.admin, "fsdfsdsfs")
  return (
    <>
      <div className="main_live_section">
            <div className="_match">
              <div
                className="sub_live_section live_report"
                style={{ borderRadius: "2px 2px 0 0", fontSize: "16px" }}>
                <div style={{ padding: "9px 8px" }} className="team_name">
                  Admin P&L
                </div>
              </div>
            </div>
            <div>
              <div className="table_section">
                <Table
                  className="live_table limit_update"
                  bordered
                  pagination={false}
                  columns={columns}
                  dataSource={data?.admin}
                ></Table>
              </div>
            </div>
          </div>
    </>
  )
}

export default AdminProfitLoss
