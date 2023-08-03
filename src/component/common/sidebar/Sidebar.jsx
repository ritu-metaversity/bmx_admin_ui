import { useState } from "react";
import { Drawer, Menu, Space } from "antd";
import { AiOutlineHome } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { LuBarChart4 } from "react-icons/lu";
import { SlDiamond } from "react-icons/sl";
import { MdMenu } from "react-icons/md";
import "./Sidebar.scss";
import { Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import Sider from "antd/es/layout/Sider";
import { Link, json } from "react-router-dom";

const Sidebar = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  props.collll(collapsed);

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  // const handleDashBoard = (e)=>{
  //   e.preventDefault()
  //   console.log("helooo")
  // }

  const userTypeData = JSON.parse(localStorage.getItem("userId"));

  return (
    <>
      <div className={collapsed ? "logo_icon" : "logo_icon coll_btn"}>
        <Button
          type="text"
          className="clolapsedd"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 81,
            height: 71,
            border: "unset",
            textDecoration: "none",
            outline: "unset",
            color: "#fff",
          }}
        />
        <div className={`bm_side_logo ${collapsed ? "d-none" : ""}`}>
          <img src="/Images/logo.png" alt="" />
        </div>
      </div>
      <Sider
        trigger={null}
        width="275"
        collapsible
        collapsed={collapsed}
        className={`side_bar coll desk_side`}
        style={{ background: "#74766f" }}>
        <Menu
          theme=""
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <AiOutlineHome />,
              label: <Link to="/dashboard">Dashboard</Link>,
              // onClick:{handleDashBoard}
            },
            {
              key: "2",
              icon: <BiUserCircle />,
              label: "Master Details",
              children: [
                {
                  className: `${userTypeData?.userType != "5" ? "d-none" : ""}`,
                  label: <Link to="/client/list-super">Super Master</Link>,
                },
                {
                  className: `${
                    userTypeData?.userType === "0"
                      ? ""
                      : "d-none"
                  }`,
                  label: <Link to="/client/list-agent">Master</Link>,
                },
                {
                  className:`${
                    userTypeData?.userType === "1"
                      ? ""
                      : "d-none"
                  }`,
                  label: (
                    <Link
                      to="/client/list-agent">
                      Dealer
                    </Link>
                  ),
                },
                {
                  label: <Link to="client/list-client">Client</Link>,
                },
              ],
            },
            {
              key: "3",
              icon: <LuBarChart4 />,
              label: "Sports-Betting",
              children: [
                {
                  label: <Link to="/Events/sports-details">Sports Detail</Link>,
                },
                {
                  label: (
                    <Link to="/Casino/roulette-details">Roulette Detail</Link>
                  ),
                },
                {
                  label: (
                    <Link to="/Casino/dus-ka-dum-details">DusKaDum Detail</Link>
                  ),
                },
                {
                  label: (
                    <Link to="/Casino/andar-bahar-details">
                      AndarBahar Detail
                    </Link>
                  ),
                },
                {
                  label: <Link to="/Casino/casino-details">Casino Detail</Link>,
                },
              ],
            },
            {
              key: "4",
              icon: <BiUserCircle />,
              label: "Ledger",
              children: [
                {
                  label: <Link to="/Events/matchledger">Profit/Loss</Link>,
                },
                {
                  label: <Link to="/client/my-ledger">My Ledger</Link>,
                },
                {
                  label: <Link to="/client/ledger-super">Super Ledger</Link>,
                },
                {
                  label: <Link to="/client/ledger-agent">Agent Ledger</Link>,
                },
                {
                  label: <Link to="/client/ledger-client">Client Ledger</Link>,
                },
              ],
            },
            {
              key: "5",
              icon: <BiUserCircle />,
              label: "Cash Transanction",
              children: [
                {
                  label: (
                    <Link to="/client/txn-client">Debit/Credit Entry(C)</Link>
                  ),
                },
                {
                  label: (
                    <Link to="/client/txn-agent">Debit/Credit Entry(A)</Link>
                  ),
                },
                {
                  label: (
                    <Link to="/client/txn-super">Debit/Credit Entry(SA)</Link>
                  ),
                },
              ],
            },
            {
              key: "6",
              icon: <BiUserCircle />,
              label: "Reports",
              children: [
                {
                  label: <Link to="/client/login-report">Login Report</Link>,
                },
                {
                  label: (
                    <Link to="/client/mobile-app-report">
                      Mobile App Report
                    </Link>
                  ),
                },
                {
                  label: (
                    <Link to="/client/secure-code-report">
                      Secure Code Report
                    </Link>
                  ),
                },
              ],
            },
            {
              key: "7",
              icon: <SlDiamond />,
              label: <Link to="/markets">WBT Setting</Link>,
            },
          ]}
        />
      </Sider>

      <div className="mob_side">
        <Space className="open_btn">
          <Button type="" className="sub_open_btn" onClick={showDrawer}>
            <MdMenu />
          </Button>
        </Space>

        <Drawer
          title={<img onClick={() => setOpen(false)} src="/Images/logo.png" />}
          className="drawer_main"
          placement="left"
          closable={false}
          onClose={onClose}
          open={open}
          width="250"
          // key={placement}
        >
          <Menu
            theme=""
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <AiOutlineHome />,
                label: (
                  <Link to="/dashboard" onClick={() => setOpen(false)}>
                    Dashboard
                  </Link>
                ),
              },
              {
                key: "2",
                icon: <BiUserCircle />,
                label: "Master Details",
                children: [
                  {
                    className: `${userTypeData?.userType != "5" ? "d-none" : ""}`,
                    label: <Link to="/client/list-super" onClick={()=>setOpen(false)}>Super Master</Link>,
                  },
                  {
                    className: `${
                      userTypeData?.userType === "0"
                        ? ""
                        : "d-none"
                    }`,
                    label: <Link to="/client/list-agent" onClick={()=>setOpen(false)} >Master</Link>,
                  },
                  {
                    className:`${
                      userTypeData?.userType === "1"
                        ? ""
                        : "d-none"
                    }`,
                    label: (
                      <Link
                        to="/client/list-agent" onClick={()=>setOpen(false)}> 
                        Dealer
                      </Link>
                    ),
                  },
                  {
                    label: <Link to="client/list-client" onClick={()=>setOpen(false)}>Client</Link>,
                  },
                ],
              },
              {
                key: "3",
                icon: <LuBarChart4 />,
                label: "Sports-Betting",
                children: [
                  {
                    label: (
                      <Link
                        to="/Events/sports-details"
                        onClick={() => setOpen(false)}>
                        Sports Detail
                      </Link>
                    ),
                  },
                  {
                    label: (
                      <Link
                        to="/Casino/roulette-details"
                        onClick={() => setOpen(false)}>
                        Roulette Detail
                      </Link>
                    ),
                  },
                  {
                    label: (
                      <Link
                        to="/Casino/dus-ka-dum-details"
                        onClick={() => setOpen(false)}>
                        DusKaDum Detail
                      </Link>
                    ),
                  },
                  {
                    label: (
                      <Link
                        to="/Casino/andar-bahar-details"
                        onClick={() => setOpen(false)}>
                        AndarBahar Detail
                      </Link>
                    ),
                  },
                  {
                    label: (
                      <Link to="/Casino/casino-details">Casino Detail</Link>
                    ),
                  },
                ],
              },
              {
                key: "4",
                icon: <BiUserCircle />,
                label: "Ledger",
                children: [
                  {
                    label: (
                      <Link
                        to="/Events/matchledger"
                        onClick={() => setOpen(false)}>
                        Profit/Loss
                      </Link>
                    ),
                  },
                  {
                    label: (
                      <Link
                        to="/client/my-ledger"
                        onClick={() => setOpen(false)}>
                        My Ledger
                      </Link>
                    ),
                  },
                  {
                    label: (
                      <Link
                        to="/client/ledger-super"
                        onClick={() => setOpen(false)}>
                        Super Ledger
                      </Link>
                    ),
                  },
                  {
                    label: (
                      <Link
                        to="/client/ledger-agent"
                        onClick={() => setOpen(false)}>
                        Agent Ledger
                      </Link>
                    ),
                  },
                  {
                    label: (
                      <Link
                        to="/client/ledger-client"
                        onClick={() => setOpen(false)}>
                        Client Ledger
                      </Link>
                    ),
                  },
                ],
              },
              {
                key: "5",
                icon: <BiUserCircle />,
                label: "Cash Transanction",
                children: [
                  {
                    label: (
                      <Link
                        to="/client/txn-client"
                        onClick={() => setOpen(false)}>
                        Debit/Credit Entry(C)
                      </Link>
                    ),
                  },
                  {
                    label: (
                      <Link
                        to="/client/txn-agent"
                        onClick={() => setOpen(false)}>
                        Debit/Credit Entry(A)
                      </Link>
                    ),
                  },
                  {
                    label: (
                      <Link
                        to="/client/txn-super"
                        onClick={() => setOpen(false)}>
                        Debit/Credit Entry(SA)
                      </Link>
                    ),
                  },
                ],
              },
              {
                key: "6",
                icon: <BiUserCircle />,
                label: "Reports",
                children: [
                  {
                    label: (
                      <Link
                        to="/client/login-report"
                        onClick={() => setOpen(false)}>
                        Login Report
                      </Link>
                    ),
                  },
                  {
                    label: (
                      <Link
                        to="/client/mobile-app-report"
                        onClick={() => setOpen(false)}>
                        Mobile App Report
                      </Link>
                    ),
                  },
                  {
                    label: (
                      <Link
                        to="/client/secure-code-report"
                        onClick={() => setOpen(false)}>
                        Secure Code Report
                      </Link>
                    ),
                  },
                ],
              },
              {
                key: "7",
                icon: <SlDiamond />,
                label: (
                  <Link to="/markets" onClick={() => setOpen(false)}>
                    WBT Setting
                  </Link>
                ),
              },
            ]}
          />
        </Drawer>
      </div>
    </>
  );
};

export default Sidebar;
