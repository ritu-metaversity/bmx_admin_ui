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
import { Link, json, useNavigate } from "react-router-dom";

const rootSubmenuKeys = ["1", "2", "3", "4", "5", "6", "7"];

const Sidebar = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState(["1"]);

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

  const nav = useNavigate();

  const userType = localStorage.getItem("userType");

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  // console.log(openKeys, "fafasda")

  const uType = localStorage.getItem("userType")

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
        <div
          onClick={() => nav("/dashboard")}
          className={`bm_side_logo ${collapsed ? "d-none" : ""}`}>
          <img src="/Images/logo.png" alt="" />
        </div>
      </div>
      <Sider
        trigger={null}
        width="275"
        collapsible
        collapsed={collapsed}
        className={`side_bar coll desk_side`}
        style={{
          background: "#74766f",
          height: "100vh",
          minHeight: "100vh",
          maxHeight: "100vh",
          overflowY: "auto",
        }}>
        <Menu
          theme=""
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          defaultSelectedKeys={openKeys}
          items={[
            {
              key: "1",
              icon: <AiOutlineHome />,
              label: <Link to="/dashboard" onClick={()=>setOpenKeys([])}>Dashboard</Link>,
              // onClick:{handleDashBoard}
            },
            {
              key: "2",
              icon: <BiUserCircle />,
              label: <div>{uType == 5? "Sub Admin Details": uType == 0?"Super Master Detail":uType == 1?"Master Detail": uType == 2?"Agent Detail":""}</div>,
              children: [
                {
                  className: `${userType != "5" ? "d-none" : ""}`,
                  label: <Link to="/client/list-super">Super Master</Link>,
                },
                {
                  className: `${userType === "0" ? "" : "d-none"}`,
                  label: <Link to="/client/list-agent">Master</Link>,
                },
                {
                  className: `${userType === "1" ? "" : "d-none"}`,
                  label: <Link to="/client/list-dealer">Agent</Link>,
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
                // {
                //   label: (
                //     <Link to="/Casino/roulette-details">Roulette Detail</Link>
                //   ),
                // },
                // {
                //   label: (
                //     <Link to="/Casino/dus-ka-dum-details">DusKaDum Detail</Link>
                //   ),
                // },
                // {
                //   label: (
                //     <Link to="/Casino/andar-bahar-details">
                //       AndarBahar Detail
                //     </Link>
                //   ),
                // },
                // {
                //   label: <Link to="/Casino/casino-details">Casino Detail</Link>,
                // },
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
                  className: `${userType != "5" ? "d-none" : ""}`,
                  label: <Link to="/client/ledger-super">Super Ledger</Link>,
                },
                {
                  className: `${userType === "0" ? "" : "d-none"}`,
                  label: <Link to="/client/ledger-master">Master Ledger</Link>,
                },
                {
                  className: `${userType === "1" ? "" : "d-none"}`,
                  label: <Link to="/client/ledger-agent">Deler Ledger</Link>,
                },
                {
                  label: <Link to="/client/ledger-client">Client Ledger</Link>,
                },
              ],
            },
            {
              key: "5",
              icon: <BiUserCircle />,
              label: "Cash Transaction",
              children: [
                {
                  label: (
                    <Link to="/client/txn-client">Debit/Credit Entry(C)</Link>
                  ),
                },
                {
                  className: `${userType === "1" ? "" : "d-none"}`,
                  label: (
                    <Link to="/client/txn-agent">Debit/Credit Entry(A)</Link>
                  ),
                },
                {
                  className: `${userType == "5" ? "" : "d-none"}`,
                  label: (
                    <Link to="/client/txn-super">Debit/Credit Entry(SM)</Link>
                  ),
                },
                {
                  className: `${userType === "0" ? "" : "d-none"}`,
                  label: (
                    <Link to="/client/txn-master">Debit/Credit Entry(M)</Link>
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
                // {
                //   label: (
                //     <Link to="/client/mobile-app-report">
                //       Mobile App Report
                //     </Link>
                //   ),
                // },
                // {
                //   label: (
                //     <Link to="/client/secure-code-report">
                //       Secure Code Report
                //     </Link>
                //   ),
                // },
              ],
            },
            {
              key: "7",
              icon: <SlDiamond />,
              label: <Link to="/markets" onClick={()=>setOpenKeys([])}>WBT Setting</Link>,
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
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            defaultSelectedKeys={openKeys}
            items={[
              {
                key: "1",
                icon: <AiOutlineHome />,
                label: (
                  <Link to="/dashboard" onClick={(() => {setOpen(false); setOpenKeys([])})}>
                    Dashboard
                  </Link>
                ),
              },
              {
                key: "2",
                icon: <BiUserCircle />,
                label: <div>{uType == 5? "Sub Admin Details": uType == 0?"Super Master Detail":uType == 1?"Master Detail": uType == 2?"Agent Detail":""}</div>,
                children: [
                  {
                    className: `${userType != "5" ? "d-none" : ""}`,
                    label: (
                      <Link
                        to="/client/list-super"
                        onClick={() => setOpen(false)}>
                        Super Master
                      </Link>
                    ),
                  },
                  {
                    className: `${userType === "0" ? "" : "d-none"}`,
                    label: (
                      <Link
                        to="/client/list-agent"
                        onClick={() => setOpen(false)}>
                        Master
                      </Link>
                    ),
                  },
                  {
                    className: `${userType === "1" ? "" : "d-none"}`,
                    label: (
                      <Link
                        to="/client/list-agent"
                        onClick={() => setOpen(false)}>
                        Agent
                      </Link>
                    ),
                  },
                  {
                    label: (
                      <Link
                        to="client/list-client"
                        onClick={() => setOpen(false)}>
                        Client
                      </Link>
                    ),
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
                  // {
                  //   label: (
                  //     <Link
                  //       to="/Casino/roulette-details"
                  //       onClick={() => setOpen(false)}>
                  //       Roulette Detail
                  //     </Link>
                  //   ),
                  // },
                  // {
                  //   label: (
                  //     <Link
                  //       to="/Casino/dus-ka-dum-details"
                  //       onClick={() => setOpen(false)}>
                  //       DusKaDum Detail
                  //     </Link>
                  //   ),
                  // },
                  // {
                  //   label: (
                  //     <Link
                  //       to="/Casino/andar-bahar-details"
                  //       onClick={() => setOpen(false)}>
                  //       AndarBahar Detail
                  //     </Link>
                  //   ),
                  // },
                  // {
                  //   label: (
                  //     <Link to="/Casino/casino-details">Casino Detail</Link>
                  //   ),
                  // },
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
                        onClick={() => setOpen(false)}
                        to="/Events/matchledger">
                        Profit/Loss
                      </Link>
                    ),
                  },
                  {
                    label: (
                      <Link
                        onClick={() => setOpen(false)}
                        to="/client/my-ledger">
                        My Ledger
                      </Link>
                    ),
                  },
                  {
                    className: `${userType != "5" ? "d-none" : ""}`,
                    label: (
                      <Link
                        onClick={() => setOpen(false)}
                        to="/client/ledger-super">
                        Super Ledger
                      </Link>
                    ),
                  },
                  {
                    className: `${userType === "0" ? "" : "d-none"}`,
                    label: (
                      <Link
                        onClick={() => setOpen(false)}
                        to="/client/ledger-master">
                        Master Ledger
                      </Link>
                    ),
                  },
                  {
                    className: `${userType === "1" ? "" : "d-none"}`,
                    label: (
                      <Link
                        onClick={() => setOpen(false)}
                        to="/client/ledger-agent">
                        Deler Ledger
                      </Link>
                    ),
                  },
                  {
                    label: (
                      <Link
                        onClick={() => setOpen(false)}
                        to="/client/ledger-client">
                        Client Ledger
                      </Link>
                    ),
                  },
                ],
              },
              {
                key: "5",
                icon: <BiUserCircle />,
                label: "Cash Transaction",
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
                    className: `${userType === "1" ? "" : "d-none"}`,
                    label: (
                      <Link
                        to="/client/txn-agent"
                        onClick={() => setOpen(false)}>
                        Debit/Credit Entry(A)
                      </Link>
                    ),
                  },
                  {
                    className: `${userType == "5" ? "" : "d-none"}`,
                    label: (
                      <Link
                        to="/client/txn-super"
                        onClick={() => setOpen(false)}>
                        Debit/Credit Entry(SM)
                      </Link>
                    ),
                  },
                  {
                    className: `${userType == "0" ? "" : "d-none"}`,
                    label: (
                      <Link
                        to="/client/txn-master"
                        onClick={() => setOpen(false)}>
                        Debit/Credit Entry(M)
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
                  // {
                  //   label: (
                  //     <Link
                  //       to="/client/mobile-app-report"
                  //       onClick={() => setOpen(false)}>
                  //       Mobile App Report
                  //     </Link>
                  //   ),
                  // },
                  // {
                  //   label: (
                  //     <Link
                  //       to="/client/secure-code-report"
                  //       onClick={() => setOpen(false)}>
                  //       Secure Code Report
                  //     </Link>
                  //   ),
                  // },
                ],
              },
              {
                key: "7",
                icon: <SlDiamond />,
                label: (
                  <Link to="/markets" onClick={() => {setOpen(false); setOpenKeys([])}}>
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
