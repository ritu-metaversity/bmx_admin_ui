import { Card, Space, Select, Row, Col, Table } from "antd";
import { useNavigate } from 'react-router-dom';
import "./CompletedFancySlips.scss";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};


const columns = [
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'F. Name',
      dataIndex: 'fname',
      key: 'fname',
    }
    ,
    {
      title: 'Result',
      dataIndex: 'result',
      key: 'result',
    },
    {
      title: 'Back/Lay',
      dataIndex: 'back/lay',
      key: 'back/lay',
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
    }
    ,
    {
      title: 'Volume',
      dataIndex: 'volume',
      key: 'volume',
    }
    ,
    {
      title: 'Stake',
      dataIndex: 'stake',
      key: 'stake',
    }
    ,
    {
      title: 'pnl',
      dataIndex: 'pnl',
      key: 'pnl',
    }
  ];
  const data = [
    
  ];

const CompletedFancySlips = () => {

    const nav = useNavigate()
    const handleBackClick = () =>{
      nav("/Events/sports-details")
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
            title="Fancy Profit and Loss"
            extra={<button onClick={handleBackClick}>Back</button>}>
            <div
            style={{ margin: "1px 0px 12px 18px" }}
            >
            <Row style={{alignItems: "center"}}>
              <Col  xs={24} md={24} lg={6} xl={6}>
              <Select
                defaultValue="All Users"
                onChange={handleChange}
                options={[
                  {
                    value: "All Users",
                    label: "All Users",
                  }
                ]}
              />
              </Col>
              <Col  xs={24} md={24} lg={6} xl={6}>
              <Select
                defaultValue="All Fancies"
                
                onChange={handleChange}
                options={[
                  {
                    value: "All Fancies",
                    label: "All Fancies",
                  }
                ]}
              />
              </Col>
              <Col  xs={24} md={24} lg={6} xl={6}>
              <div>
                <h3 style={{fontSize:"20px"}}>
                <span className='total_pnl' >Total P/L:</span>{" "}
                <span style={{color:"red"}}>0.00</span>
                </h3>
              </div>
              </Col>
            </Row>
            </div>

            <div className="table_section">
            <Table columns={columns} dataSource={data} />
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}

export default CompletedFancySlips