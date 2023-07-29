import { Card, Col, DatePicker, Divider, Pagination, Row, Select } from "antd";
import "./MatchLedger.scss";

const data = [
  {
    key: 1,
    date: "sup2 (SA154400)",
    title: "37.6",
    cr:"40.20",
    dr:"0"
  },
  {
    key: 2,
    date: "sup2 (SA154400)",
    title: "37.6",
    cr:"40.20",
    dr:"0"
  },
  {
    key: 3,
    date: "sup2 (SA154400)",
    title: "37.6",
    cr:"40.20",
    dr:"0"
  },
  {
    key: 4,
    date: "sup2 (SA154400)",
    title: "37.6",
    cr:"40.20",
    dr:"0"
  },
];

const MatchLedger = () => (
  <Card className="sport_detail main_match_ledger" title="Match Ledger" extra={<button onClick={() => console.log("hello")}>Back</button>}>
    <Row className="main_super_super_ledger">
      <Col span={8} className="match_ladger">
        <DatePicker.RangePicker />
      </Col>
      <Col span={8} className="selected_ledger">
        <Select defaultValue="lucy" style={{ width: 120 }} onChange={(value) => console.log(`selected ${value}`)}>
          <Select.Option value="jack" label="Jack" />
          <Select.Option value="lucy" label="Lucy" />
          <Select.Option value="Yiminghe" label="yiminghe" />
          <Select.Option value="disabled" label="Disabled" disabled />
        </Select>
      </Col>
      <Col span={6}>
        <div className="matchladger_total">
          <p style={{fontSize: "20px"}}>Total : <span style={{color: "rgb(82, 196, 26)"}}>11.74</span></p>
        </div>
      </Col>
    </Row>
    <div className="table_section">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>CR</th>
            <th>DR</th>
          </tr>
        </thead>
        <tbody>
          {data.map((res) => (
            <tr key={res.key}>
              <td>{res.date}</td>
              <td>{res.title}</td>
              <td>{res.cr}</td>
              <td>{res.dr}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Divider />
    <Pagination className="pagination_main ledger_pagination" defaultCurrent={1} total={50} />
  </Card>
);

export default MatchLedger;