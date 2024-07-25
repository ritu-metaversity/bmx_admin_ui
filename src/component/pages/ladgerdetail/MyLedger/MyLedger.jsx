import { Card, Col, DatePicker, Table } from "antd";
import "./MyLedger.scss";
import moment from "moment";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import DownloadReport from "../../../common/DownloadReport/DownloadReport";



const list = [
  {
      "_id": "6622b4b16df0402ee119c1cf",
      "userId": "demoSubAdmin",
      "parentId": "mango",
      "collectionName": "",
      "credit": 12.80,
      "debit": 0.00,
      "balance": -24.80,
      "paymentType": "Lucknow Super Giants v Chennai Super Kings",
      "remarks": "Sub Admin Plus",
      "showDate": false,
      "isRollback": false,
      "date": "2024-04-19 23:44:11",
      "dateOnly": "2024-04-19",
      "dateStr": "2024-04-19",
      "dateOnlyStr": "2024-04-19"
  },
  {
      "_id": "661e2da96df0402ee119adaa",
      "userId": "demoSubAdmin",
      "parentId": "mango",
      "collectionName": "",
      "credit": 0.00,
      "debit": 10.00,
      "balance": -12.00,
      "paymentType": "Antoine Escoffier v Alibek Kachmazov",
      "remarks": "Sub Admin Minus",
      "showDate": false,
      "isRollback": false,
      "date": "2024-04-16 13:20:00",
      "dateOnly": "2024-04-16",
      "dateStr": "2024-04-16",
      "dateOnlyStr": "2024-04-16"
  },
  {
      "_id": "661abd7d6df0402ee1199a74",
      "userId": "demoSubAdmin",
      "parentId": "mango",
      "collectionName": "",
      "credit": 0.00,
      "debit": 10.00,
      "balance": -22.00,
      "paymentType": "Surrey v Somerset",
      "remarks": "Sub Admin Minus",
      "showDate": true,
      "isRollback": false,
      "date": "2024-04-13 22:44:36",
      "dateOnly": "2024-04-13",
      "dateStr": "2024-04-13",
      "dateOnlyStr": "2024-04-13"
  },
  {
      "_id": "65f839d4f9fb08271ce70de1",
      "userId": "demoSubAdmin",
      "parentId": "mango",
      "collectionName": "",
      "credit": 10.00,
      "debit": 0.00,
      "balance": -32.00,
      "paymentType": "Kandy Samp Army v Delhi Devils",
      "remarks": "Sub Admin Plus",
      "showDate": false,
      "isRollback": false,
      "date": "2024-03-18 18:25:43",
      "dateOnly": "2024-03-18",
      "dateStr": "2024-03-18",
      "dateOnlyStr": "2024-03-18"
  },
  {
      "_id": "65e7630f0e94da462642ccaa",
      "userId": "demoSubAdmin",
      "parentId": "mango",
      "collectionName": "",
      "credit": 22.00,
      "debit": 0.00,
      "balance": -22.00,
      "paymentType": "Peshawar Zalmi v Multan Sultans",
      "remarks": "Sub Admin Plus",
      "showDate": false,
      "isRollback": false,
      "date": "2024-03-05 23:52:51",
      "dateOnly": "2024-03-05",
      "dateStr": "2024-03-05",
      "dateOnlyStr": "2024-03-05"
  }
]

const columns = [
  {
    title: "Date",
    dataIndex: "dateStr",
    key: "  ",
  },
  {
    title: "Collection Name",
    dataIndex: "collectionName",
    key: "collectionName",
  },
  {
    title: "Debit",
    dataIndex: "debit",
    key: "debit",
    align: "right",
  },
  {
    title: "Credit",
    dataIndex: "credit",
    key: "credit",
    align: "right",
  },

  {
    title: "Balance",
    dataIndex: "balance",
    key: "balance",
    align: "right",
    render: (text, record) => <span>{Math.abs(record?.balance)}</span>,
  },
  {
    title: "Payment Type",
    dataIndex: "paymentType",
    key: "paymentType",
    render: (text, record) => (
      // console.log(record, "dsdscsd")
      <span>
        {`${record?.paymentType} ${
          record?.showDate ? `- ${record?.dateOnlyStr}` : ""
        } ${record?.isRollBack ? "- RollBack" : ""}`}
      </span>
    ),
  },
  {
    title: "Remark",
    dataIndex: "remarks",
    key: "remarks",
  },
  {
    title: "Rollback",
    dataIndex: "isRollback",
    key: "isRollback",
    render: (text, record) => (
      // console.log(record?.isRollback, "dsasasds")
      <span>{record?.isRollback ? "Yes" : "No"}</span>
    ),
  },
];

const MyLedger = () => {
  const nav = useNavigate();
  const handleBackbtn = () => {
    nav(-1);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const timeBefore = moment().subtract(30, "days").format("YYYY-MM-DD");
  const time = moment().format("YYYY-MM-DD");
  const [dateData, setDateData] = useState([timeBefore, time]);

  const onChange = (date, dateString) => {
    setDateData(dateString);
  };

  return (
    <>
    {
    
    isModalOpen && <div onClick={()=>setIsModalOpen(false)} className="report_overlay"></div>
    }
      <Card
        className="sport_detail ledger_data"
        title="My Ledger"
        extra={<button onClick={handleBackbtn}>Back</button>}>
        <div className="my_ledger">
          <Col lg={8} xs={24} className="match_ladger">
            <DatePicker.RangePicker
              style={{ margin: "10px 0px 10px 0px" }}
              defaultValue={[dayjs(timeBefore), dayjs(time)]}
              onChange={onChange}
            />
          </Col>
          <div>
            <h3 style={{ padding: "5px", color: "rgb(51, 181, 28)" }}>
              Lena : 20.0
            </h3>
          </div>
          <div>
            <h3 style={{ padding: "5px", color: "rgb(214, 75, 75)" }}>
              Dena :  44.8
            </h3>
          </div>

          <div>
            <h3
              className="text_success">
              Balance: 24.80 ( Dena )
            </h3>
          </div>
          {/* <button onClick={downloadFile}>Download</button> */}
          <div>
            <DownloadReport
              
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          </div>
        </div>
        <div className="table_section">
          <Table
            className="live_table limit_update"
            bordered
            columns={columns}
            pagination={{
              defaultPageSize: 50,
              pageSizeOptions: [50, 100, 150, 200, 250],
            }}
            dataSource={list}
          />
        </div>
      </Card>
    </>
  );
};

export default MyLedger;
