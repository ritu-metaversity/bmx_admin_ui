import { Button, Card, Col, DatePicker, Input, Row, Select, Form } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import "./MasterReport.scss";
import ReportTable from "../ReportTable";
import {
  useDataReportMutation,
  useLazyUserListQuery,
} from "../../../../store/service/supermasteAccountStatementServices";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const MasterReport = ({ reportName, userType }) => {
  const timeBefore = moment().subtract(14, "days").format("YYYY-MM-DD");
  const time = moment().format("YYYY-MM-DD");
  const [dateData, setDateData] = useState([timeBefore, time]);
  const [clientId, setClientId] = useState("");

  const nav = useNavigate();

  const { Option } = Select;
  const [form] = Form.useForm();
  const onChange = (date, dateString) => {
    setDateData(dateString);
  };

  const { pathname } = useLocation();
  const [userList, { data: resultData }] = useLazyUserListQuery();
  const [trigger, { data: loginReport, isLoading }] = useDataReportMutation();

  useEffect(() => {
    trigger({
      userType: userType,
      startDate: dateData[0],
      endDate: dateData[1],
      reportType: "all",
      userId:""
    });
  }, [userType]);


  const handleChange = (value) => {
    userList({
      userType: userType,
      userName: value,
    });
  };

  useEffect(() => {
    form?.resetFields();
    setClientId("");
    userList({
      userType: userType,
      userName: "",
    });
  }, [pathname]);

  const handleSelect = (value) => {
    setClientId(value);
  };

  const onFinish = (value)=>{
    trigger({
        userType: userType,
        startDate: dateData[0],
        endDate: dateData[1],
        reportType: value?.reportType || "All",
        userId:clientId || ""
      });
  }


  // const date = new Date();
  // const newDate = moment(date).format('DD-MM-YYYY');

  // const dataSource = loginReport?.data?.map((curElm) => {
  //   console.log(curElm, "dsfsdfasf")
  //   return {
  //     userid: curElm?.userid,
  //     action: curElm?.action?.slice(7),
  //     old: curElm?.old,
  //     newvalue: curElm?.newvalue,
  //     actionby: curElm?.actionby,
  //     createdon: curElm?.createdon,
  //     IP: curElm?.ipaddress,
  //   };
  // });

  // const headerField = [
  //   "User",
  //   "Type",
  //   "Old",
  //   "New",
  //   "Done By",
  //   "Date",
  //   "IP",
  // ];

  // const downloadReport = () => {
  //   let data = JSON.stringify({
  //     data: dataSource,
  //     reportColumnName: headerField,
  //     reportType: "dataReport",
  //   });
  //   let config = {
  //     responseType: "blob",
  //     method: "post",
  //     maxBodyLength: Infinity,
  //     url: "http://192.168.0.65/admin-new-apis/bmx/excel-file-download",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
  //     },
  //     data: data,
  //   };
  //   axios
  //     .request(config)
  //     .then((response) => {
  //       console.log(response.data);
  //       function download(blob) {
  //         const url = window.URL.createObjectURL(new Blob([blob]));
  //         const a = document.createElement("a");
  //         a.style.display = "none";
  //         a.href = url;
  //         a.setAttribute("download", `dataReport_${newDate}.xlsx`);
  //         document.body.appendChild(a);
  //         a.click();
  //         document.body.removeChild(a);
  //         window.URL.revokeObjectURL(url);
  //       }
  //       function showInOtherTab(blob) {
  //         download(blob, "myledger-report.xlsx");
  //       }
  //       showInOtherTab(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  
  return (
    <Card
      className="sport_detail ledger_data"
      title={`${reportName} Reports`}
      extra={<button onClick={()=>nav(-1)}>Back</button>}
    >
      <div className="">
        <Form
          className="form_data mt-16 cash_data"
          name="basic"
          style={{ marginTop: "12px" }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          form={form}
          autoComplete="off">
          <Row>
            <Col xl={8} lg={8} md={24} xs={24}>
              <Form.Item
                label={reportName}
                name="client">
                <Select
                  placeholder="Select Client"
                  options={
                    resultData?.data.map((i) => ({
                      label: i,
                      value: i,
                    })) || []
                  }
                  showSearch
                  allowClear
                  onSelect={handleSelect}
                  onSearch={handleChange}></Select>
              </Form.Item>
            </Col>
            <Col xl={8} lg={8} md={24} xs={24}>
              <Form.Item
                label="Report Type"
                name="reportType">
                <Select defaultValue="All">
                  <Option value="All">All</Option>
                  {/* <Option value="Casino Share">Casino Share</Option>
                  <Option value="Sport Share">Sport Share</Option> */}
                  <Option value="Share">Share</Option>
                  <Option value="Status">Status</Option>
                  <Option value="Password">Password</Option>
                  <Option value="Mobile">Mobile</Option>
                  <Option value="UserName">UserName</Option>
                  <Option value="Casino Commission">Casino Commission</Option>
                  <Option value="Session Commission">Session Commission</Option>
                  <Option value="Match Commission">Match Commission</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xl={8} lg={8} md={24} xs={24}>
              <Form.Item
                label="Date"
                name="Date">
                <DatePicker.RangePicker
                allowClear={false}
                  className="report_date_picker"
                  defaultValue={[dayjs(timeBefore), dayjs(time)]}
                  onChange={onChange}
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item wrapperCol={{ span: 24}}>
            <Button
              loading={isLoading}
              type="primary"
              htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          {/* <Form.Item wrapperCol={{ span: 12 }}>
          
            <button onClick={downloadReport} className="download">
              <span>Download</span>
            </button>
          
          </Form.Item> */}
          <div>
          
          </div>
        </Form>
      </div>
      <ReportTable data={loginReport?.data} isLoading={isLoading}/>
    </Card>
  );
};

export default MasterReport;
