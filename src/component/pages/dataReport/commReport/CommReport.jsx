/* eslint-disable no-unused-vars */
import { Button, Card, Col, DatePicker, Row, Select, Form } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useLocation, useNavigate } from "react-router-dom";
import CommReportTable from "./CommReportTable";
import DownloadReport from "../../../common/DownloadReport/DownloadReport";


const data = {
  "totalPages": 1,
  "list": [
      {
          "userId": "StestSubAdmin",
          "matchName": "Lucknow Super Giants v Chennai Super Kings",
          "matchComm": "0.00",
          "sessionComm": "0.00",
          "comm": 0.00,
          "commS": 0.00,
          "matchCommDiya": "0.00",
          "sessionCommDiya": "0.00",
          "commDiya": 0.00,
          "commDiyaS": 0.00,
          "date": "2024-04-19 23:44:11",
          "showDate": false,
          "dateOnly": "2024-04-19"
      }
  ]
}

const CommReport = ({ reportName }) => {
  const timeBefore = moment().subtract(14, "days").format("YYYY-MM-DD");
  const time = moment().format("YYYY-MM-DD");
  const [dateData, setDateData] = useState([timeBefore, time]);
  const [clientId, setClientId] = useState("");
  const [paginationTotal, setPaginationTotal] = useState(50);
  const [totalPage, setTotalPage] = useState();
  const [indexData, setIndexData] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const nav = useNavigate();

  const { Option } = Select;
  const [form] = Form.useForm();
  const onChange = (date, dateString) => {
    setDateData(dateString);
  };

  const { pathname } = useLocation();

  useEffect(() => {
   
    setTotalPage(data?.totalPages);
  }, []);


  const handleChange = (value) => {
   
  };

  useEffect(() => {
    form?.resetFields();
    setClientId("");
    
  }, [pathname]);

  const handleSelect = (value) => {
    setClientId(value);
  };

  const onFinish = (value) => {};

  const headerField = ["User", "Match Name", "Comm Diya", "Comm Liye", "Date"];
  return (
    <>
    {
    
    isModalOpen && <div onClick={()=>setIsModalOpen(false)} className="report_overlay"></div>
    }
    <Card
      className="sport_detail ledger_data"
      title={`${reportName} Comm Reports`}
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
              <Form.Item label="Date" name="Date">
                <DatePicker.RangePicker
                  allowClear={false}
                  className="report_date_picker"
                  defaultValue={[dayjs(timeBefore), dayjs(time)]}
                  onChange={onChange}
                />
              </Form.Item>
            </Col>
            <Col xl={4} lg={4} md={12} xs={12}>
              <Form.Item wrapperCol={{ span: 24 }}>
                <Button  type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Col>
            <Col xl={4} lg={4} md={12} xs={12}>
              <Form.Item>
                <Form.Item>
                  <DownloadReport
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                  />
                </Form.Item>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
      <CommReportTable
        data={data?.list}
        setTotalPage
        paginationTotal={paginationTotal}
        totalPage={totalPage}
        indexData={indexData}
        setIndexData={setIndexData}
        setPaginationTotal={setPaginationTotal}
      />
    </Card>
    </>
    
  );
};

export default CommReport;
