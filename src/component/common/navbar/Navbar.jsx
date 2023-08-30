import { useEffect, useState } from "react";
import "./Navbar.scss";
// import { AiOutlineDown } from "react-icons/ai";
import { Dropdown, Input, Space, Modal } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Form, Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../../store/service/authService";
import ChangePassword from "../ChangePassword/ChangePassword";
import { useForm } from "antd/es/form/Form";

const Navbar = () => {
  const [trigger, { error, isLoading, isError }] = useLogoutMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userInfo, setUserInfo] = useState();
  const nav = useNavigate();

  const handleLogout = () => {
    trigger();
    localStorage.clear();
    nav("/");
  };

  const items = [
    {
      label: "Change Password",
      key: "0",
    },

    {
      label: <p onClick={handleLogout}>Logout</p>,
      key: "1",
    },
  ];

  const handleModal = (e) => {
    // e.preventDefault();
    if (e.key == 0) {
      setIsModalOpen(true);
    } else {
      console.log("hii");
    }
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDashbordHome = () => {
    nav("/dashboard");
  };

  return (
    <>
      <div className="nav1"></div>
      {localStorage.getItem("token") !== null && (
        <div className="nav">
          <div>
            <p>
              <img onClick={handleDashbordHome} src="/Images/logo.png" alt="" />
            </p>
          </div>
          <div className="nav_drop">
            <Dropdown
              style={{ zIndex: "999999" }}
              className="droup_nav"
              menu={{
                className: "nav_droupdown",
                items,
                onClick: handleModal,
              }}
              trigger={["click"]}>
              <p className="user_deatils" onClick={(e) => e.preventDefault()}>
                <p>{localStorage.getItem("userId")}</p>
                <p>
                  <DownOutlined />
                </p>
              </p>
            </Dropdown>
          </div>
        </div>
      )}

      <Modal
        className="change_pass"
        title="Change Password"
        open={isModalOpen}
        onCancel={handleCancel}
        destroyOnClose
        footer={false}>
        <div className="ch_pass">
          <ChangePassword setIsModalOpen={setIsModalOpen} />
        </div>
      </Modal>
    </>
  );
};

export default Navbar;
