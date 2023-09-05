import React from 'react'
import { Card, Space, Select, Row, Col, Table } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useRejectedBetDetailQuery } from '../../../../store/service/SportDetailServices';

// import "./MatchSlips.scss";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};


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
    // {
    //   title: 'Type',
    //   dataIndex: 'type',
    //   key: 'type',
    // }
    // ,
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
  // const data = [
    
  // ];

const RejectedBetsByEvent = () => {
    const nav = useNavigate()
    const handleBackClick = () =>{
      nav(-1)
    }

    const {id} = useParams()


    const {data} = useRejectedBetDetailQuery({
      matchid:Number(id)
    }, {refetchOnMountOrArgChange: true})



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
            
            {/* <Row className='rejected_row' >
              <Col xl={4} xs={24} md={24} lg={4}>
              <Select
                defaultValue="Select Super"
               
                onChange={handleChange}
                options={[
                  {
                    value: "All Supers",
                    label: "Jack",
                  }
                ]}
              />
              </Col>
              <Col xl={4} xs={24} md={24} lg={4}>
              <Select
                defaultValue="Select Agent"
               
                onChange={handleChange}
                options={[
                  {
                    value: "All Agents",
                    label: "All Agents",
                  }
                ]}
              />
              </Col>
              <Col xl={4} xs={24} md={24} lg={4}>
              <Select
                defaultValue="Select Client"
                onChange={handleChange}
                options={[
                  {
                    value: "All Users",
                    label: "All Users",
                  }
                ]}
              />
              </Col>
            </Row> */}

            <div className="table_section" style={{marginBottom:"10px"}}>
            <Table columns={columns} dataSource={data?.data?.map((res)=>({...res, bet_status:"Deleted"})) || []} />
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}

export default RejectedBetsByEvent
