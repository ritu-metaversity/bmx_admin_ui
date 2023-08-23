import {
  Button,
  Card,
  Col,
  DatePicker,
  Divider,
  Empty,
  Pagination,
  Row,
} from "antd";
import { useNavigate } from "react-router-dom";
import "./ProfitAndLoss.scss";
import { useEffect, useState } from "react";
import { useLazyProfitLossQuery } from "../../../../store/service/supermasteAccountStatementServices";
import moment from "moment";
import dayjs from "dayjs"


const { RangePicker } = DatePicker;

const data = [];

const ProfitAndLoss = () => {
  const timeBefore = moment().subtract(14, "days").format("YYYY-MM-DD");
  const time = moment().format("YYYY-MM-DD");
  const [dateData, setDateData] = useState([timeBefore, time]);
  const [ProfitLossData, setProfitLossData] = useState([]);
  const [totalPage, setTotalPage] = useState();
  const [paginationTotal, setPaginationTotal] = useState(10);
  const [indexData, setIndexData] = useState(0);
  const nav = useNavigate();

  const handleBackClick = () => {
    nav(-1);
  };

  const [getProftLossData, results, { isLoading }] = useLazyProfitLossQuery();

  const onChange = (data, dateString) => {
    setDateData(dateString);
  };

  useEffect(() => {
    getProftLossData({
      sportId: 4,
      matchId: "",
      fromDate: dateData[0],
      toDate: dateData[1],
      userId: "",
      pageNumber: indexData < 0 ? 0 : indexData,
      pageSize: paginationTotal,
    });
  }, []);

  useEffect(()=>{
    setProfitLossData(results?.data?.data?.market);
    setTotalPage(results?.data?.data?.totalRecord);
  }, [results?.data])

  const handleProfitLossData = () => {
    getProftLossData({
      sportId: 4,
      matchId: "",
      fromDate: dateData[0],
      toDate: dateData[1],
      userId: "",
      pageNumber: indexData < 0 ? 0 : indexData,
      pageSize: 100,
    });
    setProfitLossData(results?.data?.data?.market);
    setTotalPage(results?.data?.data?.totalRecord);
  };



  return (
    <>
      <div className="match_slip" style={{ paddingTop: "2%" }}>
        <div>
          <Card
            style={{
              margin: "0px",
              width: "100%",
            }}
            className="sport_detail profit_loss"
            title="Total Profit and Loss"
            extra={<button onClick={handleBackClick}>Back</button>}>
            <div>
              <Row className="profit_apply">
                <Col xs={24} xl={8} lg={8} md={24}>
                  <div className="profit_date">
                    <RangePicker defaultValue={[dayjs(timeBefore), dayjs(time)]} onChange={onChange} />
                  </div>
                </Col>
                <Col xs={24} xl={4} lg={4} md={24} className="text-center">
                  <Button
                    type="primary"
                    className="apply_btn"
                    loading={isLoading}
                    onClick={handleProfitLossData}>
                    Apply
                  </Button>
                </Col>
              </Row>
            </div>
            <div className="table_section statement_tabs_data">
              <table className="">
                <tr>
                  <th>Title</th>
                  <th>P&L</th>
                  <th>Comm+</th>
                  <th>Comm-</th>
                  <th>Net P&L</th>
                  <th>Action</th>
                </tr>
                {ProfitLossData?.map((res) => {
                  return (
                    <tr key={res?.key}>
                      <td>{res?.matchName}</td>
                      <td className={res?.pnl<0?"text_danger":"text_success"}>{Number(res?.pnl).toFixed(2)}</td>
                      <td className={res?.commssionMila<0?"text_danger":"text_success"}>{res?.commssionMila}</td>
                      <td>{res?.commssionDiya}</td>
                      <td>??</td>
                      <td>??</td>
                    </tr>
                  );
                })}
              </table>
              {ProfitLossData === undefined ? (
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
              ) : (
                <>
                  <Divider />
                  <div className="pagination_cus">
                    <Pagination
                      className="pagination_main ledger_pagination"
                      onShowSizeChange={(c, s) => setPaginationTotal(s)}
                      total={totalPage && totalPage * paginationTotal}
                      onChange={(e) => setIndexData(e - 1)}
                    />
                  </div>
                </>
              )}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ProfitAndLoss;
