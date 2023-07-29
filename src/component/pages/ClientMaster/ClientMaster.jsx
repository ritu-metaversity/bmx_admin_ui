import { Link, useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
// import "./AgentDetailMainPage.Scss";
import { useRef, useState } from "react";
import {
  SearchOutlined,
  CaretDownOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Form, Input, Modal, Space, Table } from "antd";
import ClientMasterModals from "./ClientMasterModals";

const ClientMaster = () => {
    const nav = useNavigate();
  const handleBackClick = () => {
    nav("/Events/sports-details");
  };

  const [isDepositeModalOpen, SetisDepositeModalOpen] = useState(false);
  const [WithdrawnModal, SetWithdrawnModal] = useState(false);

  const handleDepositeOk = () => {
    SetisDepositeModalOpen(false);
  };
  const handleDepositeCancel = () => {
    SetisDepositeModalOpen(false);
  };
  const showDepositModal = () => {
    SetisDepositeModalOpen(true);
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


  const [Active, setActive] = useState("inActive");
  const [inActive, setInActive] = useState(true);

  const handleActive = () =>{
    if(Active === "inActive"){
      setActive("Active")
      setInActive(false)
    }
    else{
      setActive("inActive")
      setInActive(true)
    }
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
      label: <div onClick={handleActive}>{`${inActive === false?"inActive":"Active"}`}</div>,
      key: "2",
    },
    {
      label: <div onClick={handleActive}>Block Betting</div>,
      key: "3",
    },
    {
      label: <div onClick={handleActive}>Block Casino</div>,
      key: "4",
    },
    {
      type: "divider",
    },
    {
      label: <Link to="/client/update-client">Edit</Link>,
      key: "5",
    },
    {
      label: <a href="/client/statement">Statement</a>,
      key: "6",
    },
    {
      label: <a href="/client/account-operations">Account Operations</a>,
      key: "7",
    },
    {
      label: <a href="/client/login-report">Login Report</a>,
      key: "8",
    },
  
    {
      label: <a href="https://www.aliyun.com">Send Login Details</a>,
      key: "9",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const data = [
    {
      key: "1",
      plus: (
        <div onClick={showModal} className="plus_btn">
          <PlusOutlined />
        </div>
      ),
      droupdown: (
        <Dropdown className="droup_menu" menu={{ items }} trigger={["click"]}>
          <a className="droup_link" onClick={(e) => e.preventDefault()}>
            <Space>
              <CaretDownOutlined />
            </Space>
          </a>
        </Dropdown>
      ),
      code: "SA152471",
      name: "John Brown",
      Master: "jbl",
      Contact: 8227272627,
      DOJ: "12-06-23",
      Share: 90,
      PWD: "Koimoi1234",
      type: "bbb",
      Match: "2.00",
      SSN: "2.00",
      Chips: "2000",
      Status: `${Active}`,
    },
    {
      key: "2",
      plus: (
        <div onClick={showModal} className="plus_btn">
          {" "}
          <PlusOutlined />
        </div>
      ),
      droupdown: (
        <Dropdown className="droup_menu" menu={{ items }} trigger={["click"]}>
          <a className="droup_link" onClick={(e) => e.preventDefault()}>
            <Space>
              <CaretDownOutlined />
            </Space>
          </a>
        </Dropdown>
      ),
      code: "SA152471",
      name: "Joe Black",
      Master: "jbl",
      Contact: 8227272627,
      DOJ: "12-06-23",
      Share: 90,
      PWD: "Koimoi1234",
      type: "bbb",
      Match: "2.00",
      SSN: "2.00",
      Chips: "2000",
      Status: "InActive",
    },
    {
      key: "3",
      plus: (
        <div onClick={showModal} className="plus_btn">
          {" "}
          <PlusOutlined />
        </div>
      ),
      droupdown: (
        <Dropdown className="droup_menu" menu={{ items }} trigger={["click"]}>
          <a className="droup_link" onClick={(e) => e.preventDefault()}>
            <Space>
              <CaretDownOutlined />
            </Space>
          </a>
        </Dropdown>
      ),
      code: "SA152471",
      name: "Jim Green",
      Master: "jbl",
      Contact: 8227272627,
      DOJ: "12-06-23",
      Share: 90,
      PWD: "Koimoi1234",
      type: "bbb",
      Match: "2.00",
      SSN: "2.00",
      Chips: "	2000",
      Status: "InActive",
    },
    {
      key: "4",
      plus: (
        <div onClick={showModal} className="plus_btn">
          {" "}
          <PlusOutlined />
        </div>
      ),
      droupdown: (
        <Dropdown className="droup_menu" menu={{ items }} trigger={["click"]}>
          <a className="droup_link" onClick={(e) => e.preventDefault()}>
            <Space>
              <CaretDownOutlined />
            </Space>
          </a>
        </Dropdown>
      ),
      code: "SA152471",
      name: "Jim Red",
      Master: "jbl",
      Contact: 8227272627,
      DOJ: "12-06-23",
      Share: 90,
      PWD: "Koimoi1234",
      type: "bbb",
      Match: "2.00",
      SSN: "2.00",
      Chips: "	2000",
      Status: "InActive",
    },
  ];

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}>
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: "#",
      dataIndex: "plus",
      key: "plus",
      width: "5%",
    },
    {
      title: <p></p>,
      dataIndex: "droupdown",
      key: "droupdoun",
      width: "5%",
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
      ...getColumnSearchProps("code"),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Master",
      dataIndex: "Master",
      key: "Master",
    },
    {
      title: "Contact",
      dataIndex: "Contact",
      key: "Contact",
      ...getColumnSearchProps("Contact"),
    },
    {
      title: "D.O.J",
      dataIndex: "DOJ",
      key: "DOJ",
    },
    {
      title: "Share %",
      dataIndex: "Share",
      key: "Share",
    },
    {
      title: "PWD",
      dataIndex: "PWD",
      key: "PWD",
    },
    {
      title: "Super Agent Comm %",
      children: [
        {
          title: "Type",
          dataIndex: "type",
          key: "type",
        },
        {
          title: "Match",
          dataIndex: "Match",
          key: "Match",
        },
        {
          title: "SSN",
          dataIndex: "SSN",
          key: "SSN",
        },
      ],
    },
    {
      title: "C.Chips",
      dataIndex: "Chips",
      key: "Chips",
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
    },
  ];

  const handleCreate =()=>{
    nav('/client/create-client')
  }
  

  return (
    <div>
       <div className="main_live_section list_supers">
        <div className="_match">
          <div
            className="sub_live_section live_report"
            // style={{ marginTop: "35px" }}
          >
            <div
              style={{ padding: "5px 8px", fontSize: "22px" }}
              className="team_name">
              Client Details
            </div>
            <div className="show_btn">
              {/* <button>Show</button> */}
              <button onClick={handleBackClick}>Back</button>
            </div>
          </div>
          <div className="table_section "></div>
        </div>
        <div>
          <div className="create_btn">
            <div onClick={handleCreate}>
              <p>
                <Link to="">
                  <AiOutlinePlus />
                  {""}
                  Create
                </Link>
              </p>
            </div>
            <div>
              <p>
                <Link to="/client/limitplusminus-client">Update Limit</Link>
              </p>
            </div>
          </div>
          <div className="table_section">
            <Table
              className="live_table agent_master"
              bordered
              columns={columns}
              dataSource={data}></Table>
            <Modal
              title="Partnership Info - SA152471"
              open={isModalOpen}
              onCancel={handleCancel}
              okButtonProps={{ style: { display: "none" } }}>
              <ClientMasterModals/>
            </Modal>
          </div>
        </div>
      </div>

      <Modal
      className="modal_deposit"
        title={<h1>WBT99 <span>Deposite Chips</span></h1>}
        open={isDepositeModalOpen}
        onOk={handleDepositeOk}
        onCancel={handleDepositeCancel}
        okText="Submit"
        cancelText="Return"
        >
        <div>
          <p>Curr Coins : 2000</p>
        </div>
        <div className="form_modals">
          <Form>
            <Form.Item
              name="number"
             
              >
              <Input  type="number"/>
            </Form.Item>
          </Form>
        </div>
      </Modal>

      <Modal
      className="modal_deposit"
        title={<h1><span>Withdrawal Chips</span></h1>}
        open={WithdrawnModal}
        onOk={handleWithdrawnOk}
        onCancel={handleWithdrawnCancel}
        okText="Submit"
        cancelText="Return"
        >
        <div>
          <p>Curr. Coins 2000</p>
        </div>
        <div className="form_modals">
          <Form>
            <Form.Item
              name="number"
             
              >
              <Input  placeholder="chips" type="number"/>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  )
}

export default ClientMaster
