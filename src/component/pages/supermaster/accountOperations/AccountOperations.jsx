import { Card, DatePicker, Empty, Pagination, Table } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import "./AccountOperations.scss";
import moment from "moment";
import React, { useState } from "react";
import dayjs from "dayjs";
import { useAccountOprationQuery } from "../../../../store/service/userlistService";
import axios from "axios";

// const handleChange = (value) => {
//   console.log(`selected ${value}`);
// };

const { RangePicker } = DatePicker;

const AccountOperations = () => {
  const timeBefore = moment().subtract(14, "days").format("YYYY-MM-DD");
  const time = moment().format("YYYY-MM-DD");

  const [dateData, setDateData] = useState([timeBefore, time]);
  const onChange = (date, dateString) => {
    setDateData(dateString);
  };

  const { id } = useParams();

  const nav = useNavigate();
  const handleBackClick = () => {
    nav(-1);
  };

  const { data, isFetching, isLoading } = useAccountOprationQuery(
    {
      index: 0,
      noOfRecords: 500,
      userId: id || "anku121",
      startDate: dateData[0],
      endDate: dateData[1],
    },
    { refetchOnMountOrArgChange: true }
  );

  const columns = [
    {
      title: "Date",
      dataIndex: "createdon",
      key: "createdon",
    },
    {
      title: "Operation",
      dataIndex: "action",
      key: "action",
    },
    {
      title: "Done By",
      dataIndex: "actionby",
      key: "actionby",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: "5%",
    },
  ];

  const date = new Date();
  const newDate = moment(date).format("DD-MM-YYYY");

  const dataSource = data?.data?.data?.map((curElm) => {
    console.log(curElm, "DSfsfsd");
    return {
      createdon: curElm?.createdon,
      action: curElm?.action,
      actionby: curElm?.actionby,
      description: curElm?.description,
    };
  });

  const headerField = ["Date", "Operation", "Done By", "Description"];

  const downloadReport = () => {
    let data = JSON.stringify({
      data: dataSource,
      reportColumnName: headerField,
      reportType: "ActionLog",
    });
    let config = {
      responseType: "blob",
      method: "post",
      maxBodyLength: Infinity,
      url: "https://api.247365.exchange/admin-new-apis/bmx/excel-file-download",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: data,
    };
    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        function download(blob) {
          const url = window.URL.createObjectURL(new Blob([blob]));
          const a = document.createElement("a");
          a.style.display = "none";
          a.href = url;
          a.setAttribute("download", `ActionLog_${newDate}.xlsx`);
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
        }
        function showInOtherTab(blob) {
          download(blob, "myledger-report.xlsx");
        }
        showInOtherTab(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="match_slip account_match_slip">
        <div>
          <Card
            style={{
              margin: "0px",
              width: "100%",
            }}
            className="sport_detail acc_name"
            title={`List Of All Transactions ( ${data?.data?.data?.length} )`}
            extra={<button onClick={handleBackClick}>Back</button>}>
            <div className="actionlog_download" style={{ margin: "10px 2px" }}>
              <RangePicker
                className="acc_datepicker"
                defaultValue={[dayjs(timeBefore), dayjs(time)]}
                onChange={onChange}
              />
               <div>
              <button onClick={downloadReport} className="download">
                <span>Download</span>
              </button>
            </div>
            </div>
           

            <div className="table_section statement_tabs_data">
              <div className="table_section">
                <Table
                  className="live_table agent_master"
                  bordered
                  columns={columns}
                  dataSource={data?.data?.data || []}
                  loading={isLoading || isFetching}></Table>
              </div>
            </div>

            {/* <div className="table_section statement_tabs_data">
            <table className="">
              <tr>
                <th>Date</th>
                <th>Operation</th>
                <th>Done By</th>
                <th>Description</th>
              </tr>
              {data?.map((res) => {
                return (
                  <tr key={res?.key}>
                    <td>{res?.Date}</td>
                    <td>{res?.Description}</td>
                    <td>{res?.PrevBal}</td>
                    <td className="text_success">{res?.CR}</td>
                   
                  </tr>
                );
              })}
            </table>
              {
                data?.length == 0?<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />:<div className="pagination_cus">
                <Pagination  className="pagination_main ledger_pagination"  defaultCurrent={1} total={5} />
              </div>
              }
          </div> */}
          </Card>
        </div>
      </div>
    </>
  );
};

export default AccountOperations;
