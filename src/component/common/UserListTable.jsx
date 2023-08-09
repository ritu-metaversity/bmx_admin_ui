import React, { useEffect, useState } from "react";
import {Divider, Dropdown, Empty, Form,  Input, Modal, Pagination, Space, Spin, notification} from "antd";
import menu from "../pages/supermaster/listsuper/SearchModals/SearchModals";
import { Link, useParams } from "react-router-dom";
import {
  SearchOutlined,
  CaretDownOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import ModalsData from "../pages/supermaster/listsuper/ModalsData/ModalsData";
import { useUpDateStatusMutation } from "../../store/service/createUserServices";
import { useLazySuperuserListQuery } from "../../store/service/superMasteruseListServices";

const routeFromUSerType = {
  0: "/client/list-agent/",
  1: "/client/list-dealer/",
  2: "/client/list-clent/",
};
const UserListTable = ({ userType, Listname }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeStatus, setActiveStatus] = useState();
  const [isDepositeModalOpen, SetisDepositeModalOpen] = useState(false);
  const [WithdrawnModal, SetWithdrawnModal] = useState(false);
  const [parentUserId, setParentUserId] = useState();
  const [userList, setUserList] = useState([]);
  const [data, setData] = useState();
  const [paginationTotal, setPaginationTotal] = useState(10);
  const [totalPage, setTotalPage] = useState();
  const [indexData, setIndexData] = useState(0);
  const [api, contextHolder] = notification.useNotification();


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

  const { id } = useParams();

  // console.log(id, "dfsdfgsdgfd")

  const [getData, results, { isLoading }] = useLazySuperuserListQuery();

  useEffect(() => {
    getData({
      userType: userType,
      parentUserId: id || null,
      noOfRecords: paginationTotal,
      index: indexData,
    });
  }, [id, userType]);

  const [activeData, { data: Activestatus }] = useUpDateStatusMutation();

  const handleActive = () => {
    activeData({
      userId: data,
    });
  };

  useEffect(() => {
    getData({
      userType: userType,
      parentUserId: id || null,
      noOfRecords: paginationTotal,
      index: indexData,
    });
  }, [Activestatus?.status === true, paginationTotal, indexData]);

  useEffect(() => {
    setUserList(results?.data?.data?.users);
    setTotalPage(results?.data?.data?.totalPages);
  }, [results?.data, paginationTotal, indexData]);

  const handleParentId = (val) => {
    setParentUserId(val);
  };

  const handleEditData = (val, active) => {
    setData(val);
    setActiveStatus(active);
  };

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
          activeStatus === true ? "inActive" : "Active"
        }`}</div>
      ),
      key: "2",
    },
    {
      type: "divider",
    },
    {
      label: (
        <Link
          to={`${
            Listname === "Super Agent"
              ? `/client/update-super/${data}`
              : Listname === "Master"
              ? `/client/update-agent/${data}`
              : Listname === "Dealer"
              ? `/client/update-dealer/${data}`
              : `/client/update-client/${data}`
          }`}>
          Edit
        </Link>
      ),
      key: "3",
    },
    {
      label: <Link to={`/account-statement/${data}`}>Statement</Link>,
      key: "4",
    },
    {
      label: (
        <Link to={`/client/account-operations/${data}`}>
          Account Operations
        </Link>
      ),
      key: "5",
    },
    {
      label: <Link to={`/client/login-report/${data}`}>Login Report</Link>,
      key: "6",
    },
    {
      label: (
        <Link to={routeFromUSerType[userType] + parentUserId}>Downline</Link>
      ),
      key: "7",
    },
    {
      label: <Link to="https://www.aliyun.com">Send Login Details</Link>,
      key: "8",
    },
  ];

  const openNotification = (mess) => {
    api.success({
      message: mess,
      closeIcon: false,
      placement: "top",
    });
  };

  // const openNotificationError = (mess) => {
  //   api.error({
  //     message: mess,
  //     closeIcon: false,
  //     placement: "top",
  //   });
  // };

  useEffect(()=>{
    if(Activestatus?.status === true){
      openNotification(Activestatus?.message)
    }
  }, [Activestatus?.status])


  return (
    <div>
      {contextHolder}
      <div className="table_section sport_detail m-0">
        {
          <div className="table_section statement_tabs_data ant-spin-nested-loading">
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
              {isLoading ? (
                <div className="spin_icon comp_spin">
                  <Spin size="large" />
                </div>
              ) : (
                ""
              )}
              {userList?.map((res, id) => {
                return (
                  <tr key={id}>
                    <td>
                      <div onClick={showModal} className="plus_btn">
                        <PlusOutlined />
                      </div>
                    </td>
                    <td onClick={() => handleParentId(res?.id)}>
                      <Dropdown
                        className="droup_menu"
                        menu={{ items, className: "menu_data" }}
                        trigger={["click"]}>
                        <div
                          className="droup_link"
                          onClick={() =>
                            handleEditData(res?.userid, res?.active)
                          }>
                          <Space>
                            <CaretDownOutlined />
                          </Space>
                        </div>
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

            {userList === undefined ? (
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            ) : (
              <>
                <Divider />
                <div className="pagination_cus">
                  <Pagination
                    className="pagination_main ledger_pagination"
                    onShowSizeChange={(c, s) => setPaginationTotal(s)}
                    total={totalPage && totalPage * paginationTotal}
                    onChange={(e) => setIndexData(e - 1)}
                  />
                </div>
              </>
            )}
          </div>
        }

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
