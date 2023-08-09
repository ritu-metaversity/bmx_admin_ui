import { Card, Col, Divider, Pagination, Row, Table } from "antd";
import "./SuperAgentLedger.scss";
import { useDownlineLedgerQuery } from "../../../../store/service/ledgerServices";
import React, { useEffect, useState } from "react";


const columns = [
  {
    title: "User Detail",
    dataIndex: "userId",
    key: "userId",
  },
  {
    title: "Balance",
    dataIndex: "balance",
    key: "balance",
  }
];

const SuperAgentLedger = ({userTyep, Listname}) => {

  const [leneData, setLenaData] = useState({})
  const [leneBalance, setLenaBalance] = useState(0)
  const [denaData, setDenaBalance] = useState(0)
  const [clearData, setClearData] = useState(0)

  const handleBackbtn = () => {
    console.log("heloo");
  };

  const {data: ledger, isFetching, isLoading} = useDownlineLedgerQuery({
    userType:userTyep
  }, {refetchOnMountOrArgChange:true})


  useEffect(()=>{
    const lenaData = ledger?.data?.lena?.map((res)=>res?.balance).reduce((prev, curr) => Number(prev) + Number(curr), 0);
    const denaData = ledger?.data?.dena?.map((res)=>res?.balance).reduce((prev, curr) => Number(prev) + Number(curr), 0);
    const clearData = ledger?.data?.clear?.map((res)=>res?.balance).reduce((prev, curr) => Number(prev) + Number(curr), 0);
    setLenaBalance(lenaData);
    setDenaBalance(denaData);
    setClearData(clearData)
  }, [ledger?.data])


  console.log(ledger?.data?.lena, "dadada")

  

  console.log(leneData, "edweded")

  return (
    <>
      <Card
        className="sport_detail ledger_data"
        title={`${Listname} Ledger`}
        extra={<button onClick={handleBackbtn}>Back</button>}>
        <Row className="main_super_super_ledger">
          <Col span={8}>
            <div className="super_ledger item1">
              <div>Lena</div>
              <div>{leneBalance}</div>
            </div>
            <div>
              <div className="table_section">
              <Table
              className="live_table limit_update"
              bordered
              pagination={false}
              columns={columns}
              loading={isLoading||isFetching}
              dataSource={ledger?.data?.lena}>
            </Table>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className="super_ledger item2">
              <div>Dena</div>
              <div>{denaData}</div>
            </div>
            <div>
              <div className="table_section">
              <Table
              className="live_table limit_update"
              bordered
              pagination={false}
              columns={columns}
              loading={isLoading||isFetching}
              dataSource={ledger?.data?.dena}>
            </Table>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className="super_ledger item3">
              <div>Clear</div>
              <div>{clearData}</div>
            </div>
            <div>
              <div className="table_section">
              <Table
              className="live_table limit_update"
              bordered
              pagination={false}
              columns={columns}
              loading={isLoading||isFetching}
              dataSource={ledger?.data?.clear}>
            </Table>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default SuperAgentLedger;
