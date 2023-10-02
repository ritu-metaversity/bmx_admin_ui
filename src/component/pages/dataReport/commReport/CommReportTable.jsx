import { Divider, Empty, Pagination, Spin, Table } from "antd";
import React, { useEffect, useState } from "react";
import { column } from "./Column";

const CommReportTable = ({ data, isLoading, setPaginationTotal, paginationTotal, totalPage, indexData, setIndexData, setTotalPage }) => {
  const [commLiya, setCommLiya] = useState();
  const [commDiya, setCommDiya] = useState();

  useEffect(() => {
    const commDiya = data
      ?.map((res) => res?.commDiya)
      .reduce((prev, curr) => Number(prev) + Number(curr), 0);
    const commLiya = data
      ?.map((res) => res?.comm)
      .reduce((prev, curr) => Number(prev) + Number(curr), 0);
    setCommLiya(commLiya);
    setCommDiya(commDiya);
  }, [data]);

//   console.log(commLiya, commDiya, "dscdscs");

  return (
    <>
      <div className="table_section statement_tabs_data ant-spin-nested-loading">
        {/* <Table
          loading={isLoading}
          className="live_table"
          columns={column}
          dataSource={data}
          pagination={{
            defaultPageSize: 50,
            pageSizeOptions: [50, 100, 150, 200, 250],
          }}
        /> */}

        <div className="table_section statement_tabs_data ant-spin-nested-loading">
          <table className="">
            <tr>
              <th>User</th>
              <th>Match Name</th>
              <th className="text-right">Comm Diya</th>
              <th className="text-right">Comm Liye</th>
              <th>Date</th>
            </tr>
            {isLoading ? <Spin className="spin_icon" size="large"></Spin> : ""}
            {data?.map((res, id) => {
              return (
                <tr key={id} style={{ cursor: "pointer" }}>
                  <td>{res?.userId}</td>
                  <td>{res?.showDate ? (res?.matchName) + " " + (res?.dateOnly):res?.matchName}</td>
                  <td className={`text-right ${res?.commDiya > 0 ?"text_success": res?.commDiya < 0?"text_danger":""}`}>
                  {(res?.commDiya) == null ?"0.00":Number(res?.commDiya)?.toFixed(2)}
                  </td>
                  <td className={`text-right ${res?.comm > 0 ?"text_success": res?.comm < 0?"text_danger":""}`}>
                    {res?.comm}
                  </td>
                  <td>
                    {res?.date}
                  </td>
                </tr>
              );
            })}
            {
              data?.length !== 0 &&  <tr>
              <td className="text-center" style={{fontWeight: "900"}} colSpan={2}>Total</td>
              <td className={`text-right ${commDiya>0?"text_success":commDiya<0?"text_danger":""}`}>{commDiya?.toFixed(2)}</td>
              <td className={`text-right ${commLiya>0?"text_success":commLiya<0?"text_danger":""}`}>{commLiya?.toFixed(2)}</td>
              <td></td>
          </tr>
            }
           
          </table>
          
        </div>
        {data?.length === 0 || data?.length == undefined ? (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          ) : (
            <>
              <Divider />
              <Pagination
                className="pagination_main ledger_pagination"
                onShowSizeChange={(c, s) => setPaginationTotal(s)}
                total={totalPage && totalPage * paginationTotal}
                defaultPageSize={50}
                pageSizeOptions={[50, 100, 150, 200, 250]}
                onChange={(e) => setIndexData(e - 1)}
              />
            </>
          )}
      </div>
    </>
  );
};

export default CommReportTable;
