import { useEffect, useState } from "react";
import "./Navbar.scss";
// import { AiOutlineDown } from "react-icons/ai";
import { Dropdown, Input, Space, Modal } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Form, Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../../store/service/authService";
import ChangePassword from "../ChangePassword/ChangePassword";



const Navbar = () => {
  const [trigger, { error, isLoading, isError }] = useLogoutMutation()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userInfo, setUserInfo] = useState();
  const nav = useNavigate()
  const handleLogout = ()=>{
    localStorage.clear()
    nav('/')
    trigger()
  }

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

  useEffect(()=>{
    const userData = JSON.parse(localStorage.getItem("userId"));
    setUserInfo(userData)

  }, [localStorage.getItem("userId")])


  console.log(userInfo?.userId, "dssfdss")
  return (
    <>
      <div className="nav1"></div>
      {
        localStorage.getItem("token") !== null &&  <div className="nav">
        <div>
          <Link to='/'>
          <img
            src="/Images/logo.png"
            alt=""
          />
          </Link>
        </div>
        <Dropdown
          menu={{
            items,
            onClick: handleModal,
          }}
          trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space className="">
            {userInfo?.userId}
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
      }
     
      <Modal
        className="change_pass"
        title="Change Password"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={false}
        >
        <div className="ch_pass">
          <ChangePassword setIsModalOpen={setIsModalOpen}/>
        </div>
      </Modal>
    </>
  );
};

export default Navbar;
