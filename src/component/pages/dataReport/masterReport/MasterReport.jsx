import { Button, Card, Col, DatePicker, Input, Row, Select, Form } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import "./MasterReport.scss";
import ReportTable from "../ReportTable";
import { useLocation, useNavigate } from "react-router-dom";
import DownloadReport from "../../../common/DownloadReport/DownloadReport";


const data = [
  {
      "createdon": "2024-04-19 16:31:27",
      "userid": "StestSubAdmin",
      "actionby": "demoSubAdmin",
      "ipaddress": "0:0:0:0:0:0:0:1",
      "old": "12345678",
      "newvalue": "demoSubAdmin",
      "action": "Change Password"
  },
  {
      "createdon": "2024-04-19 16:20:41",
      "userid": "StestSubAdmin",
      "actionby": "demoSubAdmin",
      "ipaddress": "0:0:0:0:0:0:0:1",
      "old": "0.0",
      "newvalue": "0.0",
      "action": "Change Casino Commission"
  },
  {
      "createdon": "2024-04-19 16:20:41",
      "userid": "StestSubAdmin",
      "actionby": "demoSubAdmin",
      "ipaddress": "0:0:0:0:0:0:0:1",
      "old": "null",
      "newvalue": "testSubAdmin",
      "action": "Change UserName"
  },
  {
      "createdon": "2024-04-19 16:20:41",
      "userid": "StestSubAdmin",
      "actionby": "demoSubAdmin",
      "ipaddress": "0:0:0:0:0:0:0:1",
      "old": "null",
      "newvalue": "12345678",
      "action": "Change Password"
  },
  {
      "createdon": "2024-04-19 16:20:41",
      "userid": "StestSubAdmin",
      "actionby": "demoSubAdmin",
      "ipaddress": "0:0:0:0:0:0:0:1",
      "old": "null",
      "newvalue": "Active",
      "action": "Change Status"
  },
  {
      "createdon": "2024-04-19 16:20:41",
      "userid": "StestSubAdmin",
      "actionby": "demoSubAdmin",
      "ipaddress": "0:0:0:0:0:0:0:1",
      "old": "0",
      "newvalue": "80.00",
      "action": "Change Share"
  },
  {
      "createdon": "2024-04-19 16:20:40",
      "userid": "StestSubAdmin",
      "actionby": "demoSubAdmin",
      "ipaddress": "0:0:0:0:0:0:0:1",
      "old": "0.0",
      "newvalue": "0",
      "action": "Change Match Commission"
  },
  {
      "createdon": "2024-04-19 16:20:40",
      "userid": "StestSubAdmin",
      "actionby": "demoSubAdmin",
      "ipaddress": "0:0:0:0:0:0:0:1",
      "old": "0.0",
      "newvalue": "0",
      "action": "Change Session Commission"
  },
  {
      "createdon": "2024-04-15 21:14:39",
      "userid": "SdemoSuperMaster",
      "actionby": "demoSubAdmin",
      "ipaddress": "0:0:0:0:0:0:0:1",
      "old": "A12345",
      "newvalue": "Asdf1234",
      "action": "Change Password"
  },
  {
      "createdon": "2024-04-13 17:09:30",
      "userid": "SdemoSuperMaster",
      "actionby": "demoSubAdmin",
      "ipaddress": "127.0.0.1",
      "old": "demoSuperMaster",
      "newvalue": "A12345",
      "action": "Change Password"
  },
  {
      "createdon": "2024-04-13 17:06:17",
      "userid": "SdemoSuperMaster",
      "actionby": "demoSubAdmin",
      "ipaddress": "127.0.0.1",
      "old": "0.0",
      "newvalue": "0.0",
      "action": "Change Casino Commission"
  },
  {
      "createdon": "2024-04-13 17:06:17",
      "userid": "SdemoSuperMaster",
      "actionby": "demoSubAdmin",
      "ipaddress": "127.0.0.1",
      "old": "null",
      "newvalue": "demoSuperMaster",
      "action": "Change UserName"
  },
  {
      "createdon": "2024-04-13 17:06:17",
      "userid": "SdemoSuperMaster",
      "actionby": "demoSubAdmin",
      "ipaddress": "127.0.0.1",
      "old": "null",
      "newvalue": "demoSuperMaster",
      "action": "Change Password"
  },
  {
      "createdon": "2024-04-13 17:06:17",
      "userid": "SdemoSuperMaster",
      "actionby": "demoSubAdmin",
      "ipaddress": "127.0.0.1",
      "old": "null",
      "newvalue": "Active",
      "action": "Change Status"
  },
  {
      "createdon": "2024-04-13 17:06:17",
      "userid": "SdemoSuperMaster",
      "actionby": "demoSubAdmin",
      "ipaddress": "127.0.0.1",
      "old": "0",
      "newvalue": "80.00",
      "action": "Change Share"
  },
  {
      "createdon": "2024-04-13 17:06:16",
      "userid": "SdemoSuperMaster",
      "actionby": "demoSubAdmin",
      "ipaddress": "127.0.0.1",
      "old": "0.0",
      "newvalue": "2",
      "action": "Change Match Commission"
  },
  {
      "createdon": "2024-04-13 17:06:16",
      "userid": "SdemoSuperMaster",
      "actionby": "demoSubAdmin",
      "ipaddress": "127.0.0.1",
      "old": "0.0",
      "newvalue": "3",
      "action": "Change Session Commission"
  }
]

const MasterReport = ({ reportName, userType }) => {
  const timeBefore = moment().subtract(14, "days").format("YYYY-MM-DD");
  const time = moment().format("YYYY-MM-DD");
  const [dateData, setDateData] = useState([timeBefore, time]);
  const [clientId, setClientId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);


  const nav = useNavigate();

  const { Option } = Select;
  const [form] = Form.useForm();
  const onChange = (date, dateString) => {
    setDateData(dateString);
  };

  const { pathname } = useLocation();



  const handleChange = (value) => {
   
  };

  useEffect(() => {
    form?.resetFields();
    setClientId("");
  }, [pathname]);

  const handleSelect = (value) => {
    setClientId(value);
  };

  const onFinish = () => {};


  const dataSource = data?.map((curElm) => {
    return {
      userid: curElm?.userid,
      action: curElm?.action?.slice(7),
      old: curElm?.old,
      newvalue: curElm?.newvalue,
      actionby: curElm?.actionby,
      createdon: curElm?.createdon,
      ipaddress: curElm?.ipaddress,
    };
  });

  const headerField = ["User", "Type", "Old", "New", "Done By", "Date", "IP"];

  return (
    <>
    {
    
    isModalOpen && <div onClick={()=>setIsModalOpen(false)} className="report_overlay"></div>
    }
    
    <Card
      className="sport_detail ledger_data"
      title={`${reportName} Reports`}
      extra={<button onClick={() => nav(-1)}>Back</button>}>
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
              <Form.Item label={reportName} name="client">
                <Select
                  placeholder="Select Client"
                  options={[]}
                  showSearch
                  allowClear
                  onSelect={handleSelect}
                  onSearch={handleChange}></Select>
              </Form.Item>
            </Col>
            <Col xl={8} lg={8} md={24} xs={24}>
              <Form.Item label="Report Type" name="reportType">
                <Select defaultValue="All">
                  <Option value="All">All</Option>
                  {/* <Option value="Casino Share">Casino Share</Option>
                  <Option value="Sport Share">Sport Share</Option> */}
                  <Option value="Share">Share</Option>
                  <Option value="Status">Status</Option>
                  <Option value="Password">Password</Option>
                  <Option value="Mobile">Mobile</Option>
                  <Option value="UserName">UserName</Option>
                  {/* <Option value="Casino Commission">Casino Commission</Option> */}
                  <Option value="Session Commission">Session Commission</Option>
                  <Option value="Match Commission">Match Commission</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xl={8} lg={8} md={24} xs={24}>
              <Form.Item label="Date" name="Date">
                <DatePicker.RangePicker
                  allowClear={false}
                  className="report_date_picker"
                  defaultValue={[dayjs(timeBefore), dayjs(time)]}
                  onChange={onChange}
                />
              </Form.Item>
            </Col>
          </Row>
          <div className="report_download">
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
            <Form.Item>
              <DownloadReport
                startDate={dateData[0]}
                endDate={dateData[1]}
                userType={userType}
                reportName={`${reportName.replace(/ /g, "_")}_reports`}
                dataSource={dataSource}
                headerField={headerField}
                reportType="dataReport"
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
              />
            </Form.Item>
          </div>
          <div></div>
        </Form>
      </div>
      <ReportTable data={data}  />
    </Card>
    </>
  );
};

export default MasterReport;
