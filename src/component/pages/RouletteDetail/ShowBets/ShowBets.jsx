import { Card, Empty} from "antd";
import "./ShowBets.scss";
import {  useNavigate, useParams } from "react-router-dom";
import {LeftOutlined} from '@ant-design/icons'


const ShowBets = () => {
    const nav = useNavigate()
    const {id} = useParams()

    const data = []


  return (
    <Card
    className="sport_detail show_bet"
    title={`All Bets - ${id}`}
    extra={<button onClick={() => nav(-1)}><LeftOutlined /> Back</button>}>
    <div className="table_section show_bet_table ant-spin-nested-loading" style={{marginBottom:"12px"}}>
        
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Client</th>
            <th>Market</th>
            <th className="text-right">Rate</th>
            <th>Number</th>
            {/* <th>Winner</th> */}
            <th className="text-right">Stake</th>
            <th className="text-right">Profit</th>
            <th className="text-right">Loss</th>
            <th className="text-right">Net Pnl</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((res) => (
            <tr key={res.key} className={res.isBack? "back":"lay"}>
              <td>{res?.date}</td>
              <td>{res.clientId}</td>
              <td>{res.market}</td>
              <td className="text-right">{res.rate}</td>
              <td>{res.selection}</td>
              {/* <td>{res.result}</td> */}
              <td className="text-right">{res.stake}</td>
              <td className="text-right">{(res.profit)?.toFixed(2)}</td>
              <td className="text-right">{res.loss}</td>
              <td className={`text-right ${res.netpnl < 0?"text_danger":"text_success"}`}>{(res.netpnl)?.toFixed(2)}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
      {data?.length == 0 && (<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />)}
    </div>
   
  </Card>
  )
}

export default ShowBets
