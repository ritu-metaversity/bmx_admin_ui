import { Button, Layout, Modal } from "antd";
import { useEffect, useState } from "react";
import Sidebar from "../common/sidebar/Sidebar";
const { Header, Content } = Layout;
import Navbar from "../common/navbar/Navbar";
import "./Layout.scss";
import MarqueeTag from "../common/marquee/MarqueeTag";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Signin from "../common/signin/Signin";
import Main from "../common/main/Main";
import { useJwtTokenQuery } from "../../store/service/jwtTokenServices";
import HomeRules from "../pages/HomeRules";

const LayOut = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [openRules, setOpenRules] = useState(false);
  const [open, setOpen] = useState(false);
  const collll = (val) => {
    setCollapsed(val);
  };

  const openDrawer = (val) => {
    setOpen(val);
  };

  const pathName = window.location.pathname;

  const nav = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      nav("/");
    }
  }, [nav]);

  const { data } = useJwtTokenQuery(undefined, { pollingInterval: 1000 });


  const handleOk = () => {
  
  };

  useEffect(()=>{
    setOpenRules(localStorage.getItem("rulesStatus"))
  }, []);

  const handleCloseBtn = ()=>{
    localStorage.removeItem("rulesStatus");
    setOpenRules(false);
  }

  return (
    <>
      <Layout className="main_layout">
        <Sidebar collll={collll} open={open} />
        <Layout>
          <Header
            style={{
              padding: 0,
              display: "flex",
              alignItems: "center",
              height: "72px",
              zIndex: "2",
            }}>
            <Navbar openDrawer={openDrawer} />
          </Header>
          <MarqueeTag />
          <Content
            style={{ margin: "2px 1px", padding: 1, minHeight: 280 }}
            className="main_section">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
      <Modal
        open={openRules}
        className="modals_rule"
        title="Rules"
        onOk={handleOk}
        onCancel={handleCloseBtn}
        footer={[
          <Button key="back" onClick={handleCloseBtn}>
            Close
          </Button>,
        ]}>
        <HomeRules/>
      </Modal>
    </>
  );
};

export default LayOut;
