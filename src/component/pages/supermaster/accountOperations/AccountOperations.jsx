/* eslint-disable no-unused-vars */
import { Card, DatePicker,  Table } from "antd";
import { useNavigate} from "react-router-dom";
import "./AccountOperations.scss";
import moment from "moment";
import { useState } from "react";
import dayjs from "dayjs";
// import axios from "axios";
import DownloadReport from "../../../common/DownloadReport/DownloadReport";

const { RangePicker } = DatePicker;

const AccountOperations = () => {
  const timeBefore = moment().subtract(14, "days").format("YYYY-MM-DD");
  const time = moment().format("YYYY-MM-DD");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [dateData, setDateData] = useState([timeBefore, time]);
  const onChange = (date, dateString) => {
    setDateData(dateString);
  };


  const nav = useNavigate();
  const handleBackClick = () => {
    nav(-1);
  };


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


  return (
    <>
      {/* {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="report_overlay"></div>
      )} */}
      <div className="match_slip account_match_slip">
        <div>
          <Card
            style={{
              margin: "0px",
              width: "100%",
            }}
            className="sport_detail acc_name"
            title={`List Of All Transactions 0`}
            extra={<button onClick={handleBackClick}>Back</button>}>
            <div className="actionlog_download" style={{ margin: "10px 2px" }}>
              <RangePicker
                className="acc_datepicker"
                defaultValue={[dayjs(timeBefore), dayjs(time)]}
                onChange={onChange}
              />
              <div style={{width:"200px"}}>
                <DownloadReport
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                  
                />
              </div>
            </div>

            <div className="table_section statement_tabs_data">
              <div className="table_section">
                <Table
                  className="live_table agent_master"
                  bordered
                  columns={columns}
                  dataSource={[]}
                  />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AccountOperations;
