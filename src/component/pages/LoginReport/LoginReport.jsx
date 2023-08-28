import { Card,  Table } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import "./LoginReport.scss";
import { useLoginReportQuery } from "../../../store/service/loginReportServices";
import moment from "moment";
import React, { useEffect, useState } from "react";

const LoginReport = () => {
  const timeBefore = moment().subtract(14, "days").format("YYYY-MM-DD");
  const time = moment().format("YYYY-MM-DD");

  const {id} = useParams()

  const nav = useNavigate();
  const handleBackClick = () => {
    nav(-1);
  };

  // const userId =  JSON.parse(localStorage.getItem("userId")) 

  const { data, isLoading, isFetching } = useLoginReportQuery({
    fromDate: time,
    toDate: timeBefore,
    userId: id || "",
  });

  const columns = [
    {
      title: "User Name",
      dataIndex: "userid",
      key: "userid",
    },
    {
      title: "IP-Address",
      dataIndex: "ip",
      key: "ip",
    },
    {
      title: "Login Date",
      dataIndex: "lastLogin",
      key: "lastLogin",
    },
    {
      title: "Detail",
      dataIndex: "deviceInfo",
      key: "deviceInfo",
      width: "5%",
    },
  ];

  return (
    <>
      <div className="match_slip login_report">
        <Card
          style={{
            margin: "0px",
            width: "100%",
          }}
          className="sport_detail  team_name"
          title="Login Report"
          extra={<button onClick={handleBackClick}>Back</button>}>
          <div className="table_section statement_tabs_data">
              <div className="table_section">
                <Table
                  className="live_table agent_master" 
                  bordered
                  columns={columns}
                  dataSource={data?.data || []}
                  pagination={{defaultPageSize: 50, pageSizeOptions:[50, 100, 150, 200, 250] }}
                  loading={isLoading||isFetching}></Table>
              </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default LoginReport;
