import { Card, Col, DatePicker, Divider, Empty, Pagination, Row } from "antd";
import { useNavigate } from "react-router-dom";
import {AiOutlineSearch} from "react-icons/ai"

// const handleChange = (value) => {
//   console.log(`selected ${value}`);
// };

const { RangePicker } = DatePicker;

const data = [
  
];

console.log(data?.length);

const CasinoProfitAndLoss = () => {
  const nav = useNavigate();
  const handleBackClick = () => {
    nav("/markets");
  };
  //   const onChange = (key) => {
  //     console.log(key);
  //   };

  const handleTodayProfit = ()=>{
    nav("/Casino/today-pandl")
  }

  return (
    <>
      <div className="match_slip">
        <div>
          <Card
            style={{
              margin: "0px",
              width: "100%",
            }}
            className="sport_detail pnl"
            title="Total Profit and Loss"
            extra={<button onClick={handleBackClick}>Back</button>}>
            <div>
              <Row className="profit_apply">
                <Col xs={24} xl={8} lg={8} md={24}>
                  <div className="profit_date">
                    <RangePicker />
                  </div>
                </Col>
                <Col xs={24} xl={4} lg={4} md={24} className="text-center mb-2 btn_apply">
                  <button className="apply_btn">
                    <div className="search_icon"><AiOutlineSearch/></div>
                   <div>Apply</div></button>
                </Col>
                <Col xs={24} xl={3} lg={3} md={24} onClick={handleTodayProfit} className="text-center btn_apply">
                  <button className="apply_btn">Today P/L</button>
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
                {data?.map((res) => {
                  return (
                    <tr key={res?.key}>
                      <td>{res?.date}</td>
                      <td>{res?.operation}</td>
                      <td>{res?.description}</td>
                    </tr>
                  );
                })}
              </table>
              {data?.length == 0 ? (
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
              ) : (
                <>
                  <Divider />
                  <div className="pagination_cus">
                    <Pagination  className="pagination_main ledger_pagination" defaultCurrent={1} total={5} />
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

export default CasinoProfitAndLoss;
