import React, { useState } from "react";
import { Dropdown, Form, Input, Modal, Space } from "antd";
import menu from "../pages/supermaster/listsuper/SearchModals/SearchModals";
import { Link } from "react-router-dom";
import {
    SearchOutlined,
    CaretDownOutlined,
    PlusOutlined,
  } from "@ant-design/icons";
import ModalsData from "../pages/supermaster/listsuper/ModalsData/ModalsData";

const routeFromUSerType={
    "0":"/client/list-agent/",
    "1":"/client/list-dealer/",
    "2":"/client/list-clent/"
    
}
const UserListTable = ({data: userList, userType}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [Active, setActive] = useState("inActive");
  const [inActive, setInActive] = useState(true);
  const [isDepositeModalOpen, SetisDepositeModalOpen] = useState(false);
  const [WithdrawnModal, SetWithdrawnModal] = useState(false);
  const [parentUserId, setParentUserId] = useState()

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleWithdrawnOk = () => {
    SetWithdrawnModal(false);
  };

  const handleWithdrawnCancel = () => {
    SetWithdrawnModal(false);
  };

  const showWithdrawnModal = () => {
    SetWithdrawnModal(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDepositeOk = () => {
    SetisDepositeModalOpen(false);
  };
  const handleDepositeCancel = () => {
    SetisDepositeModalOpen(false);
  };
  const showDepositModal = () => {
    SetisDepositeModalOpen(true);
  };

  const handleActive = () => {
    if (Active === "inActive") {
      setActive("Active");
      setInActive(false);
    } else {
      setActive("inActive");
      setInActive(true);
    }
  };



  const handleParentId = (val)=>{
    setParentUserId(val)
  }

  const items = [
    {
      label: <div onClick={showDepositModal}>Deposit</div>,
      key: "0",
    },
    {
      label: <div onClick={showWithdrawnModal}>Withdrawn</div>,
      key: "1",
    },
    {
      label: (
        <div onClick={handleActive}>{`${
          inActive === false ? "inActive" : "Active"
        }`}</div>
      ),
      key: "2",
    },
    {
      type: "divider",
    },
    {
      label: <Link to="/client/update-super">Edit</Link>,
      key: "3",
    },
    {
      label: <Link to="/client/statement">Statement</Link>,
      key: "4",
    },
    {
      label: <Link to="/client/account-operations">Account Operations</Link>,
      key: "5",
    },
    {
      label: <Link to="/client/login-report">Login Report</Link>,
      key: "6",
    },
    {
      label: <Link to={routeFromUSerType[userType]+parentUserId}>Downline</Link>,
      key: "7",
    },
    {
      label: <Link to="https://www.aliyun.com">Send Login Details</Link>,
      key: "8",
    },
  ];



  return (
    <div>
      <div className="table_section sport_detail m-0">
        <div className="table_section statement_tabs_data">
          <table className="live_table">
            <tr>
              <th rowSpan={2}>#</th>
              <th rowSpan={2}></th>
              <th rowSpan={2}>
                <div className="main_search_droup">
                  <p>Code</p>
                  <p>
                    <Dropdown
                      className="search_droup"
                      overlay={menu}
                      trigger={["click"]}>
                      <a>
                        <Space>
                          <SearchOutlined />
                        </Space>
                      </a>
                    </Dropdown>
                  </p>
                </div>
              </th>
              <th rowSpan={2}>Name</th>
              <th rowSpan={2}>Master</th>
              <th rowSpan={2}>Contact</th>
              <th rowSpan={2}>D.O.J </th>
              <th rowSpan={2}>Share%</th>
              <th rowSpan={2}>PWD</th>
              <th colSpan={3} className="text-center">
                Super Agent Comm %
              </th>
              <th rowSpan={2}>C.Chips</th>
              <th rowSpan={2}>Status</th>
            </tr>
            <tr>
              <th>Type</th>
              <th>Match</th>
              <th>SSN</th>
            </tr>

            {userList?.data?.users?.map((res, id) => {


              console.log(res, "sadasd");
              return (
                <tr key={id}>
                  <td>
                    <div onClick={showModal} className="plus_btn">
                      <PlusOutlined />
                    </div>
                  </td>
                  <td onClick={()=>handleParentId(res?.id)}>
                    <Dropdown
                      className="droup_menu"
                      menu={{ items, className: "menu_data" }}
                      trigger={["click"]}>
                      <a
                        className="droup_link"
                        onClick={(e) => e.preventDefault()}>
                        <Space>
                          <CaretDownOutlined />
                        </Space>
                      </a>
                    </Dropdown>
                  </td>
                  <td>{res?.userid}</td>
                  <td>{res?.username}</td>
                  <td>{res?.parent}</td>
                  <td>{res?.mobile}</td>
                  <td>{res?.dateOfJoining}</td>
                  <td>{res?.partnerShip}</td>
                  <td>{res?.password}</td>
                  <td>
                    {res?.matchCommission == 0 && res?.sessionCommission == 0
                      ? "No Comm"
                      : "bbb"}
                  </td>
                  <td>{res?.matchCommission}</td>
                  <td>{res?.sessionCommission}</td>
                  <td>{res?.availablebalance}</td>
                  <td>{res?.active === true ? "Active" : "inActive"}</td>
                </tr>
              );
            })}
          </table>
        </div>
        <Modal
          title="Partnership Info - SA152471"
          open={isModalOpen}
          onCancel={handleCancel}
          okButtonProps={{ style: { display: "none" } }}>
          <ModalsData />
        </Modal>
      </div>

      <Modal
        className="modal_deposit"
        title={
          <h1>
            WBT99 <span>Deposite Chips</span>
          </h1>
        }
        open={isDepositeModalOpen}
        onOk={handleDepositeOk}
        onCancel={handleDepositeCancel}
        okText="Submit"
        cancelText="Return">
        <div>
          <p>Curr Coins : 2000</p>
        </div>
        <div className="form_modals">
          <Form>
            <Form.Item
              name="number"
              // rules={[
              //   {
              //     required: true,
              //     message: "Please input your username!",
              //   },
              // ]}
            >
              <Input type="number" />
            </Form.Item>
          </Form>
        </div>
      </Modal>

      <Modal
        className="modal_deposit"
        title={
          <h1>
            <span>Withdrawal Chips</span>
          </h1>
        }
        open={WithdrawnModal}
        onOk={handleWithdrawnOk}
        onCancel={handleWithdrawnCancel}
        okText="Submit"
        cancelText="Return">
        <div>
          <p>Curr. Coins 2000</p>
        </div>
        <div className="form_modals">
          <Form>
            <Form.Item name="number">
              <Input placeholder="chips" type="number" />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default UserListTable;
