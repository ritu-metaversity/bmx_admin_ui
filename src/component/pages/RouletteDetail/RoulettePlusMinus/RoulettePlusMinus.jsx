import { useNavigate } from "react-router-dom";
import "./RoulettePlusMinus.Scss";
import {React, useRef, useState } from "react";
import {
  SearchOutlined,
  CaretDownOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button,  Input,  Space, Table } from "antd";
// import ModalsData from "./ModalsData/ModalsData";

const RoulettePlusMinus = () => {
  const nav = useNavigate();
  const handleBackClick = () => {
    nav("/Casino/roulette-details");
  };

  const [isDepositeModalOpen, SetisDepositeModalOpen] = useState(false);
  const [WithdrawnModal, SetWithdrawnModal] = useState(false);

  //   const handleDepositeOk = () => {
  //     SetisDepositeModalOpen(false);
  //   };
  //   const handleDepositeCancel = () => {
  //     SetisDepositeModalOpen(false);
  //   };
  //   const showDepositModal = () => {
  //     SetisDepositeModalOpen(true);
  //   };

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

  const handleActive = () => {
    if (Active === "inActive") {
      setActive("Active");
      setInActive(false);
    } else {
      setActive("inActive");
      setInActive(true);
    }
  };
  const data = [
    {
      key: "1",
      code: "SA152471",
      name: "John Brown",
      casino_amt: <span style={{color:"green"}}>240</span> ,
      casino_comm: <span style={{color:"green"}}>0.00</span>,
      total_amount: <span style={{color:"green"}}>240</span>,
      my_share:<span style={{color:"red"}}>-90</span>,
      m_app:<span style={{color:"green"}}>0.00</span>,
      net_amount: <span style={{color:"green"}}>200</span>,
    },
    {
      key: "2",
      code: "SA152471",
      name: "Joe Black",
      casino_amt:<span style={{color:"red"}}>-40</span> ,
      casino_comm:<span style={{color:"green"}}>0.00</span>,
      total_amount: <span style={{color:"red"}}>-40</span>,
      my_share: <span style={{color:"green"}}>90</span>,
      m_app: <span style={{color:"green"}}>0.00</span>,
      net_amount: <span style={{color:"green"}}>300</span>,
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
      title: "Code",
      dataIndex: "code",
      key: "code",
      ...getColumnSearchProps("code"),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Casino Amt",
      dataIndex: "casino_amt",
      key: "casino_amt",
    },
    {
      title: "Casino Comm",
      dataIndex: "casino_comm",
      key: "casino_comm",
    },
    {
      title: "Total Amount",
      dataIndex: "total_amount",
      key: "total_amount",
    },
    {
      title: "My Share",
      dataIndex: "my_share",
      key: "my_share",
    },
    {
      title: "M.App",
      dataIndex: "m_app",
      key: "m_app",
    },
    {
      title: "Net Amount",
      dataIndex: "net_amount",
      key: "net_amount",
    },
  ];

  return (
    <>
      <div className="main_live_section list_supers">
        <div className="_match">
          <div className="sub_live_section live_report">
            <div
              style={{ padding: "5px 8px", fontSize: "22px" }}
              className="team_name">
              <p>Super Agent Company Report</p>
              <p style={{ fontSize: "16px" }}>Roulette 04-07-2023 </p>
            </div>
            <div className="show_btn">
              {/* <button>Show</button> */}
              <button onClick={handleBackClick}>Back</button>
            </div>
          </div>
          <div className="table_section "></div>
        </div>
        <div>
          <div className="table_section">
            <Table
              className="live_table roulette_table"
              bordered
              columns={columns}
              dataSource={data}
              pagination={false}
              rowClassName={(record) => {
                console.log(record.key, "sdfdf")
                return record?.key  == 2 ? "dateHiglight" : "";
              }}
             ></Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoulettePlusMinus;
