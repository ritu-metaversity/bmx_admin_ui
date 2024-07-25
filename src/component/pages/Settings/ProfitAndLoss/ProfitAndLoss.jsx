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
  const [paginationTotal, setPaginationTotal] = useState(50);
  const [indexData, setIndexData] = useState(0);
  const nav = useNavigate();

  const handleBackClick = () => {
    nav(-1);
  };


  const onChange = (data, dateString) => {
    setDateData(dateString);
  };

 

  useEffect(()=>{
    setProfitLossData([]);
    setTotalPage(0);
  }, [])

  const handleProfitLossData = () => {
  
    setProfitLossData([]);
    setTotalPage(0);
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
                {/* {ProfitLossData?.map((res) => {
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
                })} */}
              </table>
              
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
              
                <>
                  <Divider />
                  <div className="pagination_cus">
                    <Pagination
                      className="pagination_main ledger_pagination"
                      onShowSizeChange={(c, s) => setPaginationTotal(s)}
                      total={totalPage}
                      onChange={(e) => setIndexData(e - 1)}
                    />
                  </div>
                </>
             
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ProfitAndLoss;
