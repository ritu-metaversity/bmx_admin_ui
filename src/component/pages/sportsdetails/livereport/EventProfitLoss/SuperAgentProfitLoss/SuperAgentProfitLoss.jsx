import { Table } from 'antd'
import React from 'react'


const columns = [
    {
      title: "A/C Name",
      dataIndex: "A/C Name",
      key: "A/C Name",
    },
    {
      title: "P&L",
      dataIndex: "P&L",
      key: "P&L",
    },
    {
      title: "Comm.",
      dataIndex: "Comm.",
      key: "Comm.",
    }
  ];

const SuperAgentProfitLoss = ({name, data}) => {
  console.log(data)
  return (
    <>
      <div className="main_live_section">
            <div className="_match">
              <div
                className="sub_live_section live_report"
                style={{ borderRadius: "2px 2px 0 0", fontSize: "16px" }}>
                <div style={{ padding: "9px 8px" }} className="team_name">
                  {name}
                </div>
              </div>
            </div>
            <div>
              <div className="table_section">
                <Table
                  className="live_table limit_update"
                  bordered
                  columns={columns}
                  dataSource={data}
                ></Table>
              </div>
            </div>
          </div>
    </>
  )
}

export default SuperAgentProfitLoss
