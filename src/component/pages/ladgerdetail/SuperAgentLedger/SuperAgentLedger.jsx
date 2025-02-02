import { useState, useEffect } from "react";
import { Card, Col, Modal, Row, Table } from "antd";
import { useNavigate } from "react-router-dom";
import LedgerPopUp from "../LedgerPopUp";
import "./SuperAgentLedger.scss";
import Withdraw from "../../../common/Withdraw";
import Deposit from "../../../common/Deposit";


const data = {
  "lena": [
      {
          "userId": "SdemoSuperMaster",
          "userName": "demoSuperMaster",
          "balance": 49.10
      }
  ],
  "dena": [
      {
          "userId": "StestSubAdmin",
          "userName": "testSubAdmin",
          "balance": -25.60
      }
  ],
  "clear": []
}


const  clientData= {
  "lena": [],
  "dena": [
      {
          "userId": "CdemoClient",
          "userName": "demoClient",
          "balance": 0.0
      }
  ],
  "clear": []
}

const SuperAgentLedger = ({ userTyep, Listname }) => {
  const [lenaBalance, setLenaBalance] = useState(0);
  const [denaData, setDenaBalance] = useState(0);
  const [clearData, setClearData] = useState(0);
  const [isDepositeModalOpen, setIsDepositeModalOpen] = useState(false);
  const [userData, setUserData] = useState({});
  const [modalsName, setModalsName] = useState("");
  const [clientDataState, setClientDataState] = useState(false)
  
  const nav = useNavigate();

  const handleBackbtn = () => {
    nav(-1);
  };

  const handleClose = () => {
    setIsDepositeModalOpen(false);
  };

  const handleDenaModals = (val, name) => {
    setUserData(val);
    setModalsName(name);
    setIsDepositeModalOpen(true);
   
  };


  const columns = [
    {
      title: "User Id",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "User Name",
      dataIndex: "userName",
      key: "userId",
    },
    {
      title: "Balance",
      dataIndex: "balance",
      key: "balance",
      render: (text, record) => <span>{Math.abs(record?.balance)}</span>,
    },
  ];

  const renderActionButton = (record, name) => {
    return (
      <span>
        <button
          onClick={() => handleDenaModals(record, name)}
          className="dena_button">
          {name}
        </button>
      </span>
    );
  };


  const generateColumns = (actionName) =>
    [
      {
        title: "User Id",
        dataIndex: "userId",
        key: "userId",
        // render: (text, record) => renderActionButton(record, actionName),
      },
      {
        title: "User Name",
        dataIndex: "userName",
        key: "userId",
        // render: (text, record) => renderActionButton(record, actionName),
      },
      {
        title: "Balance",
        dataIndex: "balance",
        key: "balance",
        render: (text, record) => <span>{Math.abs(record?.balance)}</span>,
      },
      {
        title: actionName,
        dataIndex: actionName.toLowerCase(),
        key: actionName.toLowerCase(),
        render: (text, record) => renderActionButton(record, actionName),
        hidden: userTyep === 3 || actionName == "Clear" ? true : false,
      },
      {
        title: "Settlement",
        dataIndex: "Settlement",
        key: "Settlement",
        render: (text, record) =>
          renderActionButton(
            record,
            actionName == "Lena" ? "Deposit" : "Withdraw"
          ),
        hidden: userTyep !== 3 || actionName == "Clear" ? true : false,
      },
    ].filter((item) => !item.hidden);


  useEffect(() => {
    const processData = (data) =>
      data
        ?.map((res) => res?.balance)
        .reduce((prev, curr) => Number(prev) + Number(curr), 0);
    const dataToProcess =
      Listname === "Client" ? clientData : data;
    setLenaBalance(processData(dataToProcess?.lena));
    setDenaBalance(processData(dataToProcess?.dena));
    setClearData(processData(dataToProcess?.clear));
  }, [data, clientData, Listname]);

  return (
    <>
      <Card
        className="sport_detail ledger_data"
        title={`${Listname} Ledger`}
        extra={<button onClick={handleBackbtn}>Back</button>}>
        <Row className="main_super_super_ledger">
          {[
            ["Lena", columns],
            ["Dena", columns],
            ["Clear", columns],
          ].map(([itemName, itemColumns], index) => (
            <Col key={index} xl={8} xs={24} lg={8} md={24}>
              <div className={`super_ledger item${index + 1}`}>
                <div>{itemName}</div>
                <div>
                  {itemName === "Dena"
                    ? Math.abs(denaData?.toFixed(2))
                    : itemName === "Clear"
                    ? clearData?.toFixed(2)
                    : Math.abs(lenaBalance)?.toFixed(2)}
                </div>
              </div>
              <div className="table_section">
                <Table
                  className="live_table limit_update"
                  bordered
                  pagination={false}
                  columns={generateColumns(itemName)}
                  dataSource={
                    Listname === "Client"
                      ? clientData?.data?.[itemName.toLowerCase()]
                      : data?.[itemName.toLowerCase()]
                  }
                />
              </div>
            </Col>
          ))}
        </Row>
      </Card>

      <Modal
        className="lena_dena_modals"
        destroyOnClose
        title={<h1>{modalsName}</h1>}
        open={isDepositeModalOpen}
        onCancel={handleClose}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        footer={false}>
          {
            modalsName == "Withdraw" &&  <Withdraw
            userIdData={userData?.userId}
            handleClose={() => setIsDepositeModalOpen(false)}
            data={userData?.userId}
            setClientDataState={setClientDataState}
          />
          }{
            modalsName == "Deposit" &&  <Deposit
            userIdData={userData?.userId}
            handleClose={() => setIsDepositeModalOpen(false)}
            data={userData?.userId}
            
            setClientDataState={setClientDataState}
          />
          }
          {
            (modalsName == "Lena" || modalsName == "Dena") && <LedgerPopUp
            handleClose={() => setIsDepositeModalOpen(false)}
            userData={userData}
            modalsName={modalsName}
          />
          }
        
      </Modal>
    </>
  );
};

export default SuperAgentLedger;
