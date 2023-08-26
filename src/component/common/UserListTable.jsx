import React, { useEffect, useState } from "react";
import {
  Button,
  Divider,
  Dropdown,
  Empty,
  Form,
  Input,
  Menu,
  Modal,
  Pagination,
  Space,
  Spin,
  notification,
} from "antd";
// import menu from "../pages/supermaster/listsuper/SearchModals/SearchModals";
import { Link, useParams } from "react-router-dom";
import {
  SearchOutlined,
  CaretDownOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import ModalsData from "../pages/supermaster/listsuper/ModalsData/ModalsData";

import moment from "moment";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import BetlockModal from "./BetlockModal";
import { useLazySuperuserListQuery } from "../../store/service/supermasteAccountStatementServices";
import {
  usePartnershipMutation,
  useUpDateStatusMutation,
} from "../../store/service/userlistService";

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
  const [betLockModals, setBetLockModals] = useState(false);
  const [balance, setBalance] = useState();
  const [parentUserId, setParentUserId] = useState();
  const [userList, setUserList] = useState([]);
  const [data, setData] = useState();
  const [paginationTotal, setPaginationTotal] = useState(50);
  const [totalPage, setTotalPage] = useState();
  const [indexData, setIndexData] = useState(0);
  const [partnershipDetails, setPartnershipDetails] = useState({});
  const [userIds, setUserIds] = useState("");
  const [parentUserids, setParentUserIds] = useState("");
  const [betStatus, setBetStatus] = useState(true);
  const [droupSearch, setDroupSearch] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const [partnerShipData, { data: partnerShipDetail, isLoading: loading }] =
    usePartnershipMutation();

  const showModal = (val) => {
    setUserIds(val);
    const partnerShipDetail = {
      userId: val,
    };
    partnerShipData(partnerShipDetail);
    setIsModalOpen(true);
  };

  useEffect(() => {
    setPartnershipDetails(partnerShipDetail?.data);
  }, [partnerShipDetail?.data]);

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
  //API CALL
  const [getData, { data: results, isLoading, isFetching }] =
    useLazySuperuserListQuery();
  const [activeData, { data: Activestatus }] = useUpDateStatusMutation();

  useEffect(() => {
    getData({
      userType: userType,
      parentUserId: id || null,
      noOfRecords: paginationTotal,
      index: indexData,
    });
  }, [id, userType]);

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
    setUserList(results?.data?.users);
    setTotalPage(results?.data?.totalPages);
  }, [results?.data, paginationTotal, indexData]);

  const [userIdData, setUserIdData] = useState("");

  const handleParentId = (val, bal, user, parentUserID) => {
    setParentUserId(val);
    setBalance(bal);
    setUserIdData(user);
    setParentUserIds(parentUserID);
  };

  const handleEditData = (val, active) => {
    setData(val);
    setActiveStatus(active);
  };

  const userId = localStorage.getItem("userId");

  const handleBlockBettting = () => {
    setBetLockModals(true);
  };


  console.log(totalPage, "dsdsad")

  const items = [
    {
      label: (
        <div
          className={parentUserids == userId ? "" : "d_none"}
          onClick={showDepositModal}>
          Deposit
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <div
          className={parentUserids == userId ? "" : "d_none"}
          onClick={showWithdrawnModal}>
          Withdrawn
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <div
          className={parentUserids == userId ? "" : "d_none"}
          onClick={handleActive}>{`${
          activeStatus === true ? "inActive" : "Active"
        }`}</div>
      ),
      key: "2",
    },
    {
      label: (
        <div onClick={handleBlockBettting}>
          {betStatus ? "Block Betting" : "UnBlock Betting"}
        </div>
      ),
      key: "3",
    },
    {
      type: "divider",
    },
    {
      label: (
        <Link
          className={parentUserids == userId ? "" : "d_none"}
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
      key: "5",
    },
    {
      label: (
        <Link
          className={parentUserids == userId ? "" : "d_none"}
          to={`/client/limitplusminus-super/${data}`}>
          Update Limit
        </Link>
      ),
      key: "6",
    },
    {
      label: <Link to={`/account-statement/${data}`}>Statement</Link>,
      key: "7",
    },
    {
      label: (
        <Link to={`/client/account-operations/${data}`}>
          Account Operations
        </Link>
      ),
      key: "8",
    },
    {
      label: <Link to={`/client/login-report/${data}`}>Login Report</Link>,
      key: "9",
    },
    {
      label: (
        <Link
          className={userType == 3 ? "d_none" : ""}
          to={routeFromUSerType[userType] + parentUserId}>
          Downline
        </Link>
      ),
      key: "10",
    },
  ];

  const openNotification = (mess) => {
    api.success({
      message: mess,
      closeIcon: false,
      placement: "top",
    });
  };

  useEffect(() => {
    if (Activestatus?.status === true) {
      openNotification(Activestatus?.message);
    }
  }, [Activestatus?.status]);

  console.log(betStatus, "dsadasdasdas");

  const onFinish = (values) => {
    getData({
      userType: userType,
      parentUserId: id || null,
      noOfRecords: paginationTotal,
      index: indexData,
      userId: values?.username,
    });
    setUserList(results?.data?.users);
    setTotalPage(results?.data?.totalPages);
    if (results?.status === true) {
      setDroupSearch(false);
    }
  };
  return (
    <div>
      {contextHolder}
      <div className="table_section sport_detail m-0 ant-spin-nested-loading">
        {
          <div className="table_section statement_tabs_data ant-spin-nested-loading">
            <table className="live_table">
              <tr>
                <th rowSpan={2}>#</th>
                <th rowSpan={2}></th>
                <th rowSpan={2}>
                  <div className="main_search_droup">
                    <p>Code</p>
                    {
                      droupSearch &&   <Menu className="menu_item">
                      <Form
                        name="code"
                        initialValues={{
                          remember: true,
                        }}
                        onFinish={onFinish}
                        autoComplete="off">
                        <Form.Item name="username">
                          <Input />
                        </Form.Item>

                        <div className="agent_search_deatil">
                          <Form.Item>
                            <Button
                              type="primary"
                              htmlType="submit"
                              style={{
                                width: "86px",
                                marginRight: "8px",
                              }}>
                              <SearchOutlined /> Search
                            </Button>
                          </Form.Item>
                          <Form.Item>
                            <Button
                              type="primary "
                              className="ant_reset_btn"
                              style={{ width: "86px" }}>
                              Reset
                            </Button>
                          </Form.Item>
                        </div>
                      </Form>
                    </Menu>
                    }
                    <p className="search_code">
                        <Space>
                          <SearchOutlined  onClick={()=>setDroupSearch(!droupSearch)}/>
                        </Space>
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
              {isLoading || isFetching ? (
                <div className="spin_icon">
                  <Spin size="large" />
                </div>
              ) : (
                ""
              )}
              {userList?.map((res, id) => {
                return (
                  <tr key={id}>
                    <td>
                      <div
                        onClick={() => showModal(res?.userid)}
                        className="plus_btn">
                        <PlusOutlined />
                      </div>
                    </td>
                    <td
                      onClick={() =>
                        handleParentId(
                          res?.id,
                          res?.availablebalance,
                          res?.userid,
                          res?.parent
                        )
                      }>
                      <Dropdown
                        className="droup_menu"
                        menu={{ items, className: "menu_data" }}
                        trigger={["click"]}>
                        <div
                          className="droup_link"
                          style={{ cursor: "pointer" }}
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
                    <td>
                      {moment(res?.dateOfJoining).format("DD-MM-YYYY, h:mm a")}
                    </td>
                    <td>{res?.partnerShip}</td>
                    <td>{res?.password}</td>
                    <td>
                      {res?.matchCommission == 0 && res?.sessionCommission == 0
                        ? "No Comm"
                        : "bbb"}
                    </td>
                    <td>{Number(res?.matchCommission)?.toFixed(2)}</td>
                    <td>{Number(res?.sessionCommission)?.toFixed(2)}</td>
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
                    total={totalPage }
                    onChange={(e) => setIndexData(e - 1)}
                  />
                </div>
              </>
            )}
          </div>
        }

        <Modal
          className="partnership"
          title={`Partnership Info - ${userIds}`}
          open={isModalOpen}
          onCancel={handleCancel}
          okButtonProps={{ style: { display: "none" } }}>
          <ModalsData
            loading={loading}
            partnershipDetails={partnershipDetails}
          />
        </Modal>
      </div>

      <Modal
        className="modal_deposit"
        destroyOnClose
        title={<h1>Deposite Chips</h1>}
        open={isDepositeModalOpen}
        onOk={handleDepositeOk}
        onCancel={handleDepositeCancel}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        footer={null}>
        <Deposit
          handleClose={() => SetisDepositeModalOpen(false)}
          userIdData={userIdData}
          balance={balance}
        />
      </Modal>

      <Modal
        className="modal_deposit"
        destroyOnClose
        title={
          <h1>
            <span>Withdrawal Chips</span>
          </h1>
        }
        open={WithdrawnModal}
        onOk={handleDepositeOk}
        onCancel={() => SetWithdrawnModal(false)}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        footer={null}>
        <Withdraw
          userIdData={userIdData}
          handleClose={() => SetWithdrawnModal(false)}
          balance={balance}
        />
      </Modal>

      <Modal
        className="modal_deposit"
        destroyOnClose
        title={
          <h1>
            <span>Current Password</span>
          </h1>
        }
        open={betLockModals}
        // onOk={handleBetLockOk}
        onCancel={() => setBetLockModals(false)}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        footer={null}>
        <BetlockModal
          userIdData={userIdData}
          setBetStatus={setBetStatus}
          betStatus={betStatus}
          handleClose={() => setBetLockModals(false)}
        />
      </Modal>
    </div>
  );
};

export default UserListTable;
