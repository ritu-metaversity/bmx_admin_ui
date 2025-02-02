import { Card, Empty  } from "antd";
import "./RouletteAllGame.scss";
import { useLocation, useNavigate, useParams } from "react-router-dom";
const RouletteAllGame = () => {

const {id} = useParams();
const {state} = useLocation()

    const nav = useNavigate();

    const data = [];

    const handleShowBets = (val)=>{
      nav(`/casino/show-bets/${val}`, {state: {state, id }})
    }


  return (
    <Card
    className="sport_detail main_match_ledger"
    title={`${state?.isAuraDetails} ${state?.rouletteDate}`}
    extra={<button onClick={() => nav(-1)}>Back</button>}>
    {/* <div className="matchladger_total">
      <p
        style={{
          fontSize: "20px",
          textAlign: "center",
          margin: "10px 0px 40px 0px",
        }}>
        Total : -36.96
      </p>
    </div> */}
    <div className="table_section ant-spin-nested-loading" style={{marginBottom:"12px"}}>
      <table>
        <thead>
          <tr>
            <th>S no.</th>
            <th >Game ID</th>
            {/* <th className="text-right" >Winner</th> */}
            {/* <th className="text-right">Pnl</th> */}
            <th >Match Name</th>
            <th className="text-right">Net Pnl</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((res, id) => (
            <tr key={res.key}>
              <td>{id + 1}</td>
              <td >{res?.roundId}</td>
              {/* <td className="text-right">{res?.result}</td> */}
              {/* <td className={`text-right ${(res?.netPnl - res?.comm) < 0? "text_danger":(res?.netPnl - res?.comm)>0?"text_success":""}`}>{(res?.netPnl - res?.comm)?.toFixed(2)}</td> */}
              <td >{res?.matchName}</td>
              <td className={`text-right ${res?.netPnl  < 0? "text_danger":res?.netPnl>0?"text_success":""}`}>{(res?.netPnl)?.toFixed(2)}</td>
              <td className="text-center">
                <button className="action_btn" onClick={()=>handleShowBets(res?.roundId)}>Show Bets</button>
              </td> 
            </tr>
          ))}
        </tbody>
      </table>

      {data?.length == 0  ? (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        ) : (
          <>
            
          </>
        )}
    </div>
   
  </Card>
  )
}

export default RouletteAllGame
