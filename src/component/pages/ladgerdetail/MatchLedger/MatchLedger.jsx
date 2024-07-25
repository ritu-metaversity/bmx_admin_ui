import {
  Card,
  Col,
  DatePicker,
  Divider,
  Empty,
  Pagination,
  Row,
} from "antd";
import "./MatchLedger.scss";
import { useEffect, useState } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import DownloadReport from "../../../common/DownloadReport/DownloadReport";

const list = [
  {
      "_id": "6622b4b16df0402ee119c1cf",
      "userId": "demoSubAdmin",
      "netPnl": -12.80,
      "matchName": "Lucknow Super Giants v Chennai Super Kings",
      "date": "2024-04-19 23:44:11"
  },
  {
      "_id": "661e2da96df0402ee119adaa",
      "userId": "demoSubAdmin",
      "netPnl": 10.00,
      "matchName": "Antoine Escoffier v Alibek Kachmazov",
      "date": "2024-04-16 13:20:00"
  },
  {
      "_id": "661abd7d6df0402ee1199a74",
      "userId": "demoSubAdmin",
      "netPnl": 19.10,
      "matchName": "Surrey v Somerset",
      "date": "2024-04-13 22:44:36"
  },
  {
      "_id": "65f839d4f9fb08271ce70de1",
      "userId": "demoSubAdmin",
      "netPnl": -90.00,
      "matchName": "Kandy Samp Army v Delhi Devils",
      "date": "2024-03-18 18:25:43"
  },
  {
      "_id": "65e7630f0e94da462642ccaa",
      "userId": "demoSubAdmin",
      "netPnl": -198.00,
      "matchName": "Peshawar Zalmi v Multan Sultans",
      "date": "2024-03-05 23:52:51"
  }
]

const MatchLedger = () => {
  const timeBefore = moment().subtract(14, "days").format("YYYY-MM-DD");
  const time = moment().format("YYYY-MM-DD");
  const [dateData, setDateData] = useState([timeBefore, time]);
  const [totalPage, setTotalPage] = useState();
  const [indexData, setIndexData] = useState(0);
  const [paginationTotal, setPaginationTotal] = useState(50);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const onChange = (date, dateString) => {
    setDateData(dateString);
  };


  useEffect(() => {
    
    setTotalPage(0);
  }, []);

  const nav = useNavigate();

  const dataSource = list?.map((curElm) => {
    return {
      date: curElm?.date,
      title: curElm?.matchName,
      debit: curElm?.netPnl < 0 ? curElm?.netPnl : "0",
      credit: curElm?.netPnl > 0 ? curElm?.netPnl : "0",
    };
  });

  const headerField = ["Date", "Title", "CR", "DR"];
  const lenadenaHeading = ["Total"];


  return (
    <>
    {
    
    isModalOpen && <div onClick={()=>setIsModalOpen(false)} className="report_overlay"></div>
    }
    
    <Card
      className="sport_detail my_ledger main_match_ledger"
      title="Profit/Loss"
      extra={<button onClick={() => nav(-1)}>Back</button>}>
      <Row className="main_super_super_ledger">
        <Col lg={8} xs={24} className="match_ladger">
          <DatePicker.RangePicker
            defaultValue={[dayjs(timeBefore), dayjs(time)]}
            onChange={onChange}
          />
        </Col>
        <Col lg={6} xs={24}>
          <div className="matchladger_total">
            <p style={{ fontSize: "20px", marginLeft: "10px" }}>
              Total :{" "}
              <span
                className="text_danger">
                -212.0
              </span>
            </p>
          </div>
        </Col>
        <Col lg={3} xs={24}>
          <div className="matchladger_total">
            <div>
              <DownloadReport
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
              />
            </div>
          </div>
        </Col>
      </Row>

      <div className="table_section statement_tabs_data ant-spin-nested-loading">
        <table className="">
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>CR</th>
            <th>DR</th>
          </tr>
         
          {list?.map((res, id) => {
            return (
              <tr key={id} style={{ cursor: "pointer" }}>
                <td>{res?.date}</td>
                <td>{res?.matchName}</td>
                <td className="text_success">
                  {res?.netPnl > 0 ? res?.netPnl : 0}
                </td>
                <td className="text_danger">
                  {res?.netPnl < 0 ? res?.netPnl : 0}
                </td>
              </tr>
            );
          })}
        </table>
        {list?.length === 0  ? (
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
    </Card>
    </>
  );
};

export default MatchLedger;
