import { Table } from 'antd'
import React from 'react'
import { columns } from './Columns'

const ReportTable = ({data}) => {

  return (
    <>
    <div className="table_section statement_tabs_data ant-spin-nested-loading">
        <Table  className="live_table" columns={columns} dataSource={data} pagination={{defaultPageSize: 50, pageSizeOptions:[50, 100, 150, 200, 250] }}/>
        </div>
    </>
  )
}

export default ReportTable