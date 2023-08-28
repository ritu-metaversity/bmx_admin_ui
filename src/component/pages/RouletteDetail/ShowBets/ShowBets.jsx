import { Card,} from "antd";
import "./ShowBets.scss";
import { useNavigate, useParams } from "react-router-dom";
import {LeftOutlined} from '@ant-design/icons'
import moment from "moment";

const data = [
  {
    key: 1,
    date: "4 Jul 03:47 PM",
    client: "C157270",
    market: "roulette",
    rate: 34,
    number: 1,
    winner: 21,
    Stake:50.0,
    profit: 1700.0,
    loss: 50.00
  },
  {
    key: 2,
    date: "4 Jul 03:47 PM",
    client: "C157270",
    market: "roulette",
    rate: 34,
    number: 1,
    winner: 21,
    Stake:50.0,
    profit: 1700.0,
    loss: 50.00
  },
  {
    key: 3,
    date: "4 Jul 03:47 PM",
    client: "C157270",
    market: "roulette",
    rate: 34,
    number: 1,
    winner: 21,
    Stake:100.0,
    profit: 3400.0,
    loss: 100.00
  }
];

const ShowBets = () => {

    const nav = useNavigate()
    const {id} = useParams()

  return (
    <Card
    className="sport_detail show_bet"
    title={`All Bets - ${id}`}
    extra={<button onClick={() => nav(-1)}><LeftOutlined /> Back</button>}>
    <div className="table_section show_bet_table" style={{marginBottom:"12px"}}>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Client</th>
            <th>Market</th>
            <th>Rate</th>
            <th>Number</th>
            <th>Winner</th>
            <th>Stake</th>
            <th>Profit</th>
            <th>Loss</th>
          </tr>
        </thead>
        <tbody>
          {data.map((res) => (
            <tr key={res.key} className="bg-red">
              <td>{moment(res?.date).format("YYYY-MM-DD, h:mm a")}</td>
              <td>{res.client}</td>
              <td>{res.market}</td>
              <td>{res.rate}</td>
              <td>{res.number}</td>
              <td>{res.winner}</td>
              <td>{res.Stake}</td>
              <td>{res.profit}</td>
              <td>{res.loss}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {/* <Divider />
    <Pagination
      className="pagination_main ledger_pagination"
      defaultCurrent={1}
      total={50}
    /> */}
  </Card>
  )
}

export default ShowBets
