/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import  { useEffect, useRef, useState } from "react";
import {
  Button,
  Divider,
  Dropdown,
  Form,
  Input,
  Menu,
  Modal,
  Pagination,
  Space,
} from "antd";
import { Link, useNavigate, useParams } from "react-router-dom";

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

import CasinoLockModals from "./CasinoLockModals";

const routeFromUSerType = {
  0: "/client/list-agent/",
  1: "/client/list-dealer/",
  2: "/client/list-clent/",
};

const partnerShipDetails = {
  adminid: "1",
  subadminid: "28417",
  subadminoddsloss: 0.0,
  subadminpartnershipc: 90.0,
  subadminpartnership: 90.0,
  subadmincasinocommssion: 0.0,
  subadminfancyloss: 0.0,
  supermasterid: "28417",
  supermastepartnership: 0.0,
  supermasteroddsloss: 0.0,
  supermasterfancyloss: 0.0,
  supermastepartnershipc: 0.0,
  supermastercasinocommssion: 0.0,
  masterid: "28417",
  masterpartershipc: 0.0,
  masteroddsloss: 0.0,
  mastercasinocommssion: 0.0,
  masterpartership: 0.0,
  masterfancyloss: 0.0,
  dealerid: "28417",
  agentcasinocommssion: 0.0,
  agentfancyloss: 0.0,
  delearpartership: 0.0,
  delearpartershipc: 0.0,
  agentoddsloss: 0.0,
  uplinepartership: 10.0,
  uplinepartershipc: 10.0,
  userid: "CdemoClient",
  id: 32224.0,
  fancyloss: 0.0,
  casinocommssion: 0.0,
  oddsloss: 0.0,
  usertype: 3.0,
  parentid: "28417",
};

const users = [
  {
    active: true,
    accountlock: false,
    mobile: null,
    usertype: 3,
    availablebalance: 5000.0,
    casinoPartnerShip: 0.0,
    partnerShip: 0.0,
    sessionCommission: 0.0,
    casinoCommission: 0.0,
    availablebalancewithpnl: 320.0,
    parent: "demoSubAdmin",
    userid: "CdemoClient",
    password: "Asdf1234",
    betlock: false,
    matchCommission: 0.0,
    username: "demoClient",
    dateOfJoining: "2024-03-05 13:45:10",
    id: 32224,
    creditref: 5000.0,
    balancePlusPnl: 5320.0,
  },
];

const ClientUserListTable = ({
  userType,
  Listname,
 
}) => {
  // console.log(Listname, "sdcdsdas")
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeStatus, setActiveStatus] = useState();
  const [isDepositeModalOpen, SetisDepositeModalOpen] = useState(false);
  const [WithdrawnModal, SetWithdrawnModal] = useState(false);
  const [betLockModals, setBetLockModals] = useState(false);
  const [casinoLockModals, setCasinoLockModals] = useState(false);
  const [balance, setBalance] = useState();
  const [parentUserId, setParentUserId] = useState();
  const [dataVal, setDataVal] = useState();
  const [paginationTotal, setPaginationTotal] = useState(50);
  const [indexData, setIndexData] = useState(0);
  const [userIds, setUserIds] = useState("");

  const [betStatus, setBetStatus] = useState(false);
  const [accStatus, setAccStatus] = useState(false);
  const [droupSearch, setDroupSearch] = useState(false);
  const [userName, setUserName] = useState("");
  const [userBalance, setUserBalance] = useState(0);
  const [dropdownStates, setDropdownStates] = useState([]);
  const [layoutOpen, setLayoutOpen] = useState(false);

  const totalPages = 1;

  const [form] = Form.useForm();

  const showModal = (val) => {
    setUserIds(val);

    setIsModalOpen(true);
  };

  const showWithdrawnModal = () => {
    SetWithdrawnModal(true);
    setDropdownStates([]);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setDropdownStates([]);
  };
  const handleDepositeOk = () => {
    SetisDepositeModalOpen(false);
    setDropdownStates([]);
  };
  const handleDepositeCancel = () => {
    SetisDepositeModalOpen(false);
    setDropdownStates([]);
  };
  const showDepositModal = () => {
    SetisDepositeModalOpen(true);
    setDropdownStates([]);
  };

  const { id } = useParams();


  const handleActive = () => {
    setDropdownStates([]);
  };

  const [userIdData, setUserIdData] = useState("");

  const handleParentId = (
    val,
    bal,
    user,
    parentUserID,
    betStatus,
    accStatus
  ) => {
    setParentUserId(val);
    setBalance(bal);
    setUserIdData(user);
    setBetStatus(betStatus), setAccStatus(accStatus);
  };

  const handleEditData = (val, active, userName, balanc) => {
    setDataVal(val);
    setActiveStatus(active);
    setUserBalance(balanc);
    setUserName(userName);
  };

  const userId = "demo";

  const handleBlockBettting = () => {
    setDropdownStates([]);
    setBetLockModals(true);
  };
  const handleBlockCasino = () => {
    setDropdownStates([]);
    setCasinoLockModals(true);
  };

  const nav = useNavigate();

  const handleUpdateLimites = (data) => {
    setDropdownStates([]);
    const infoData = {
      name: userName,
      uBalance: userBalance,
    };
    nav(`/client/limitplusminus-super/${dataVal}`, { state: infoData });
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
      label: <div onClick={handleBlockBettting}>Block Betting</div>,
      key: "3",
    },
    {
      label: <div onClick={handleBlockCasino}>Block Casino</div>,
      key: "4",
    },
    {
      label: (
        <Link
          onClick={() => {
            setDropdownStates([]);
          }}
          to={`${
            Listname === "Super Master"
              ? `/client/update-super/${dataVal}`
              : Listname === "Master"
              ? `/client/update-agent/${dataVal}`
              : Listname === "Agent"
              ? `/client/update-dealer/${dataVal}`
              : `/client/update-client/${dataVal}`
          }`}>
          Edit
        </Link>
      ),
      key: "5",
    },
    {
      label: (
        <div onClick={() => handleUpdateLimites(dataVal)}>Update Limit</div>
      ),
      key: "6",
    },
    {
      label: (
        <Link
          onClick={() => setDropdownStates([])}
          to={`/account-statement/${dataVal}`}>
          Statement
        </Link>
      ),
      key: "7",
    },
    {
      label: (
        <Link
          onClick={() => setDropdownStates([])}
          to={`/client/account-operations/${dataVal}`}>
          Account Operations
        </Link>
      ),
      key: "8",
    },
    {
      label: (
        <Link
          onClick={() => setDropdownStates([])}
          to={`/client/login-report/${dataVal}`}>
          Login Report
        </Link>
      ),
      key: "9",
    },
    {
      label: (
        <Link
          onClick={() => setDropdownStates([])}
          className={userType == 3 ? "d_none" : ""}
          to={routeFromUSerType[userType] + parentUserId}>
          Downline
        </Link>
      ),
      key: "10",
    },
  ];





  const onFinish = (values) => {};

  const toggleDropdown = (index) => {
    const updatedDropdownStates = [...dropdownStates];
    updatedDropdownStates[index] = !updatedDropdownStates[index];
    setDropdownStates(updatedDropdownStates);
    setLayoutOpen(false);
  };
  const myElementRef = useRef(null);

  return (
    <>
      {layoutOpen && <div className="overlay_layout"></div>}
      <div>
        {droupSearch && (
          <div
            className="over_view"
            onClick={() => setDroupSearch(false)}></div>
        )}
        <div className="sport_detail m-0 ant-spin-nested-loading">
          {
            <div
              ref={myElementRef}
              className="table_section statement_tabs_data ant-spin-nested-loading">
              <table className={`live_table ${id && "mt-0"}`}>
                <tr>
                  <th rowSpan={2}>#</th>
                  <th rowSpan={2}></th>
                  <th rowSpan={2}>
                    <div className="main_search_droup">
                      <p>Code</p>
                      {droupSearch && (
                        <Menu className="menu_item">
                          <Form
                            name="code"
                            form={form}
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
                                  onClick={() => form.resetFields()}
                                  className="ant_reset_btn"
                                  style={{ width: "86px" }}>
                                  Reset
                                </Button>
                              </Form.Item>
                            </div>
                          </Form>
                        </Menu>
                      )}
                      <p className="search_code">
                        <Space>
                          <SearchOutlined
                            onClick={() => setDroupSearch(!droupSearch)}
                          />
                        </Space>
                      </p>
                    </div>
                  </th>
                  <th rowSpan={2}>Name</th>
                  <th rowSpan={2}>Sub Admin</th>
                  <th rowSpan={2}>Contact</th>
                  <th rowSpan={2}>D.O.J </th>
                  <th rowSpan={2}>Share%</th>
                  <th rowSpan={2}>PWD</th>
                  <th colSpan={3} className="text-center">
                    {Listname} Comm %
                  </th>
                  <th rowSpan={2} className="text-right">
                    C.Chips
                  </th>
                  <th rowSpan={2} className="text-right">
                    Credit Reference
                  </th>
                  <th rowSpan={2}>Status</th>
                </tr>
                <tr>
                  <th>Type</th>
                  <th>Match</th>
                  <th>SSN</th>
                </tr>

                {users?.map((res, id) => {
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
                            res?.parent,
                            res?.betlock,
                            res?.accountlock
                          )
                        }>
                        <Dropdown
                          className="droup_menu"
                          open={dropdownStates[id]}
                          onOpenChange={() => toggleDropdown(id)}
                          menu={{ items, className: "menu_data" }}
                          trigger={["click", "contextMenu"]}>
                          <div
                            className="droup_link"
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              handleEditData(
                                res?.userid,
                                res?.active,
                                res?.username,
                                res?.availablebalance
                              )
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
                        {moment(res?.dateOfJoining).format(
                          "YYYY-MM-DD, h:mm A"
                        )}
                      </td>
                      <td>{res?.partnerShip}</td>
                      <td>{res?.password}</td>
                      <td>
                        {res?.matchCommission == 0 &&
                        res?.sessionCommission == 0
                          ? "No Comm"
                          : "bbb"}
                      </td>
                      <td>{Number(res?.matchCommission)?.toFixed(2)}</td>
                      <td>{Number(res?.sessionCommission)?.toFixed(2)}</td>
                      <td className="text-right">
                        {userType == 3
                          ? Number(res?.balancePlusPnl)?.toFixed(2)
                          : Number(res?.availablebalance)?.toFixed(2)}
                      </td>
                      <td className="text-right">
                        {Number(res?.creditref)?.toFixed(2)}
                      </td>
                      <td>{res?.active === true ? "Active" : "InActive"}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          }

          {/* {users === undefined || isError ? (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        ) : ( */}
          <>
            <Divider />
            <div className="pagination_cus">
              <Pagination
                className="pagination_main ledger_pagination"
                onShowSizeChange={(c, s) => setPaginationTotal(s)}
                total={totalPages && totalPages * paginationTotal}
                defaultPageSize={50}
                pageSizeOptions={[50, 100, 150, 200, 250]}
                onChange={(e) => setIndexData(e - 1)}
              />
            </div>
          </>

          <Modal
            className="partnership"
            title={`Partnership Info - ${userIds}`}
            open={isModalOpen}
            onCancel={handleCancel}
            okButtonProps={{ style: { display: "none" } }}>
            <ModalsData partnershipDetails={partnerShipDetails} />
          </Modal>
        </div>

        <Modal
          className="modal_deposit"
          destroyOnClose
          title={<h1>Deposit Chips</h1>}
          open={isDepositeModalOpen}
          onOk={handleDepositeOk}
          onCancel={handleDepositeCancel}
          okButtonProps={{ style: { display: "none" } }}
          cancelButtonProps={{ style: { display: "none" } }}
          footer={null}>
          <Deposit handleClose={() => SetisDepositeModalOpen(false)} />
        </Modal>

        <Modal
          className="modal_deposit"
          destroyOnClose
          title={
            <h1>
              <span>Withdraw Chips</span>
            </h1>
          }
          open={WithdrawnModal}
          onOk={handleDepositeOk}
          onCancel={() => SetWithdrawnModal(false)}
          okButtonProps={{ style: { display: "none" } }}
          cancelButtonProps={{ style: { display: "none" } }}
          footer={null}>
          <Withdraw handleClose={() => SetWithdrawnModal(false)} />
        </Modal>

        <Modal
          className="modal_deposit"
          destroyOnClose
          title={
            <h1>
              <span>Betting Lock</span>
            </h1>
          }
          open={betLockModals}
          // onOk={handleBetLockOk}
          onCancel={() => setBetLockModals(false)}
          okButtonProps={{ style: { display: "none" } }}
          cancelButtonProps={{ style: { display: "none" } }}
          footer={null}>
          <BetlockModal
            betStatus={betStatus}
            accStatus={accStatus}
            handleClose={() => setBetLockModals(false)}
           
          />
        </Modal>

        <Modal
          className="modal_deposit"
          destroyOnClose
          title={
            <h1>
              <span style={{ fontSize: "18px" }}>Casino Allowed</span>
            </h1>
          }
          open={casinoLockModals}
          // onOk={handleBetLockOk}
          onCancel={() => setCasinoLockModals(false)}
          okButtonProps={{ style: { display: "none" } }}
          cancelButtonProps={{ style: { display: "none" } }}
          footer={null}>
          <CasinoLockModals
            userIdData={userIdData}
            handleClose={() => setCasinoLockModals(false)}
          />
        </Modal>
      </div>
    </>
  );
};

export default ClientUserListTable;
