import React, { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { LuBarChart4 } from "react-icons/lu";
import { AiOutlineSetting } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";
import { HiUser } from "react-icons/hi";
import { SlDiamond } from "react-icons/sl";
import { IoMdInformationCircle } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { Card, Modal } from "antd";
import "./Dashboard.scss";
import ActiveMatch from "../../common/ActiveMatch/ActiveMatch";
import { Link, useNavigate } from "react-router-dom";
import CasinoModalsDash from "./CasinoModalsDash";


const  casinoDetails= [
  {
      "name": "Aura",
      "casinoId": 1,
      "active": true
  },
  {
      "name": "Super Nova",
      "casinoId": 2,
      "active": true
  },
  {
      "name": "QTech",
      "casinoId": 3,
      "active": true
  },
  {
      "name": "Virtual",
      "casinoId": 4,
      "active": true
  },
  {
      "name": "SportBook",
      "casinoId": 5,
      "active": true
  }
]

const Dashboard = () => {

  const [casinoLockModals, setCasinoLockModals] = useState();

  const nav = useNavigate();

  const handleRules = () => {
    nav("/rules");
  };

  // const userType = localStorage.getItem("userType")
  const gridStyle = {
    width: "23%",
    background: "#74766f",
    color: "#fff",
    margin: "10px",
    cursor:"pointer"
  };
  const handleLogout = () => {
    localStorage.clear();
    nav("/");
  };

  const uType = 0;
  return (
    <>
      <Card>
        <Card.Grid hoverable={false} className="" style={gridStyle}>
          <Link to="/client/details-master">
            <div className="main_card_section">
              <div className="icon_card_section">
                <BiUserCircle />
              </div>
              <div className="tital_card_section">
                <p style={{ fontSize: "14px" }}>{uType == 5? "Sub Admin Details": uType == 0?"Super Master Detail":uType == 1?"Master Detail": uType == 2?"Agent Detail":""}</p>
              </div>
            </div>
          </Link>
        </Card.Grid>
      
        <Card.Grid hoverable={false} className="" style={gridStyle}>
          <Link to="/Events/sports-details">
            <div className="main_card_section">
              <div className="icon_card_section">
              <LuBarChart4 />
              </div>
              <div className="tital_card_section">
                <p style={{ fontSize: "14px" }}>Sport's Details</p>
              </div>
            </div>
          </Link>
        </Card.Grid>
    
        <Card.Grid hoverable={false} className="" style={gridStyle}>
          <Link to="/Events/ladger-details">
            <div className="main_card_section">
              <div className="icon_card_section">
              <BiUserCircle />
              </div>
              <div className="tital_card_section">
                <p style={{ fontSize: "14px" }}>Ledger</p>
              </div>
            </div>
          </Link>
        </Card.Grid>
     
        <Card.Grid hoverable={false} className="" style={gridStyle}>
          <Link to="/client/cash-transanction">
            <div className="main_card_section">
              <div className="icon_card_section">
                <BiUserCircle />
              </div>
              <div className="tital_card_section">
                <p style={{ fontSize: "14px" }}>Cash Transaction</p>
              </div>
            </div>
          </Link>
        </Card.Grid>
     
        <Card.Grid hoverable={false} className="" style={gridStyle}>
          <Link to="/markets">
            <div className="main_card_section">
              <div className="icon_card_section">
              <AiOutlineSetting />
              </div>
              <div className="tital_card_section">
                <p style={{ fontSize: "14px" }}>Settings</p>
              </div>
            </div>
          </Link>
        </Card.Grid>
     
        <Card.Grid  hoverable={false} className="" style={gridStyle}>
          <p onClick={handleLogout}>
            <div className="main_card_section">
              <div className="icon_card_section">
              <CiLogin />
              </div>
              <div className="tital_card_section">
                <p style={{ fontSize: "14px" }}>Log Out</p>
              </div>
            </div>
          </p>
        </Card.Grid>
      </Card>

      <Card>
        <Card.Grid hoverable={false} style={gridStyle}>
          <div className="main_card_section">
            <div className="icon_card_section">
              <HiUser />
            </div>
            <div className="tital_card_section f-w">
              <h2 style={{fontSize:"19px"}}>demoSubAdmin</h2>
              <p>
                You are{" "}
                {uType == 5
                  ? "Sub Admin"
                  : uType == 0
                  ? "Super Master"
                  : uType == 1
                  ? "Master"
                  : uType == 2
                  ? "Agent"
                  : "Client"}
              </p>
            </div>
          </div>
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          <div className="main_card_section">
            <div className="icon_card_section">
              <SlDiamond />
            </div>
            <div className="tital_card_section f-w">
              <h2 style={{fontSize:"19px"}}>65000</h2>
              <p>Chips</p>
            </div>
          </div>
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          <div className="main_card_section">
            <div className="icon_card_section">
              <HiUser />
            </div>
            <div className="tital_card_section f-w">
              <h2 style={{fontSize:"19px"}}>1</h2>
              <p>Members</p>
            </div>
          </div>
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          <div className="main_card_section">
            <div className="icon_card_section">
              <LuBarChart4 />
            </div>
            <div className="tital_card_section f-w">
              <h2 style={{fontSize:"19px"}}>90</h2>
              <p>My Share</p>
            </div>
          </div>
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          <div className="main_card_section">
            <div className="icon_card_section">
              <LuBarChart4 />
            </div>
            <div className="tital_card_section f-w">
              <h2 style={{fontSize:"19px"}}>100</h2>
              <p>Company Share</p>
            </div>
          </div>
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          <div className="main_card_section">
            <div className="icon_card_section"></div>
            <div className="tital_card_section f-w">
              <h2 style={{fontSize:"19px"}}>3%</h2>
              <p>Match Commission</p>
            </div>
          </div>
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          <div className="main_card_section">
            <div className="icon_card_section"></div>
            <div className="tital_card_section f-w">
              <h2 style={{fontSize:"19px"}}>3%</h2>
              <p>Session Commission</p>
            </div>
          </div>
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          <div className="main_card_section">
            <div className="icon_card_section">
              <HiUser />
            </div>
            <div className="tital_card_section f-w">
              <h2 style={{fontSize:"19px"}}>1</h2>
              <p>Client</p>
            </div>
          </div>
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          <div
            onClick={handleRules}
            style={{ cursor: "pointer" }}
            className="main_card_section">
            <div className="icon_card_section">
              <IoMdInformationCircle />
            </div>
            <div className="tital_card_section f-w">
              <h2 style={{fontSize:"19px"}}>Rules</h2>
            </div>
          </div>
        </Card.Grid>

        <Card.Grid hoverable={false} style={gridStyle}>
          <div
            onClick={()=>setCasinoLockModals(true)}
            style={{ cursor: "pointer" }}
            className="main_card_section">
            <div className="icon_card_section">
              <FaLock style={{fontSize: "40px"}}/>
            </div>
            <div className="tital_card_section f-w">
              <h2 style={{fontSize:"18px"}}>My Casino Allowed</h2>
            </div>
          </div>
        </Card.Grid>

      </Card>

      <Modal
        className="modal_dash"
        destroyOnClose
        title={
          <h1>
            <span>My Casino Allowed</span>
          </h1>
        }
        open={casinoLockModals}
        // onOk={handleBetLockOk}
        onCancel={() => setCasinoLockModals(false)}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        footer={null}>
        <CasinoModalsDash data={casinoDetails}/>
      </Modal>

      <ActiveMatch />
    </>
  );
};

export default Dashboard;
