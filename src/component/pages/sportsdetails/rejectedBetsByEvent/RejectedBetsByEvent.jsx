import { Card,  Table } from "antd";
import { useNavigate, useParams } from "react-router-dom";

// import "./MatchSlips.scss";



const columns = [
    {
      title: 'Rate',
      dataIndex: 'pricevalue',
      key: 'pricevalue',
    },
    {
      title: 'Amount',
      dataIndex: 'stake',
      key: 'stake',
    },

    {
      title: 'Team',
      dataIndex: 'matchname',
      key: 'matchname',
    },
    {
      title: 'Client',
      dataIndex: 'userid',
      key: 'userid',
    },
    {
      title: 'Agent',
      dataIndex: 'dealerid',
      key: 'dealerid',
    }
    ,
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    }
    ,
    {
      title: 'Loss',
      dataIndex: 'stake',
      key: 'stake',
    }
    ,
    {
      title: 'Profit',
      dataIndex: 'pnl',
      key: 'pnl',
    }
    ,
    {
      title:'Bet Status',
      dataIndex: 'bet_status',
      key: 'bet_status',
    }
  ];


const RejectedBetsByEvent = () => {
    const nav = useNavigate()
    const handleBackClick = () =>{
      nav(-1)
    }

    const {id} = useParams()




  return (
    <>
       <div className="match_slip">
        <div>
          <Card
            style={{
              margin: "0px",
              width: "100%",
            }}
            className="sport_detail"
            title="REJECTED And CANCELLED Bets"
            extra={<button onClick={handleBackClick}>Back</button>}>
            
            

            <div className="table_section" style={{marginBottom:"10px"}}>
            <Table columns={columns} dataSource={[]} />
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}

export default RejectedBetsByEvent
