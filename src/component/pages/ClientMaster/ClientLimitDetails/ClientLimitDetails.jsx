import { useNavigate } from "react-router-dom";
// import "./AgentLimitDetails.scss";
import { useRef, useState } from "react";
import { Button, Dropdown, Form, Input, Space, Table } from "antd";
import {
  SearchOutlined,
  CaretDownOutlined,
  PlusOutlined,
} from "@ant-design/icons";

const ClientLimitDetails = () => {
    const nav = useNavigate();

  const handleBackClick = () => {
    nav("/client/list-client");
  };

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
      ...getColumnSearchProps("name"),
    },
    {
      title: "C. Chips",
      dataIndex: "chips",
      key: "chips",
    },
    {
      title: "Add / Minus Limit",
      dataIndex: "Minus_Limit",
      key: "minus_limit",
    },

    {
      title: "Action",
      dataIndex: "Action",
      key: "Action",
    },
  ];

  const data = [
    {
      key: "1",
      code: "SA152471",
      name: "John Brown",
      chips:500,
      Minus_Limit: (
        <div>
          <Form.Item
            name="username"
            >
            <Input type="number" placeholder="Enter Chips"/>
          </Form.Item>
        </div>
      ),

      Chips: "2000",
      Action: <div className="minus_btn">
        <button className="add">Add</button>
        <button className="minus">Minus</button>
      </div>,
    },
    {
      key: "2",
      code: "SA152471",
      name: "Joe Black",
      chips:0,
      Minus_Limit: (
        <div>
          <Form.Item
            name="username"
            >
            <Input type="number" placeholder="Enter Chips"/>
          </Form.Item>
        </div>
      ),

      Action: <div className="minus_btn">
      <button className="add">Add</button>
      <button className="minus">Minus</button>
    </div>,
    },
  ];
  return (
    <>
      <div className="main_live_section">
        <div className="_match">
          <div
            className="sub_live_section live_report"
            style={{borderRadius:'2px 2px 0 0'}}
          >
            <div
              style={{ padding: "9px 8px", fontSize: "22px" }}
              className="team_name">
              Client Limit Details
            </div>
            <div className="show_btn">
              <button onClick={handleBackClick}>Back</button>
            </div>
          </div>
        </div>

        <div>
          <div className="table_section">
            <Table
              className="live_table limit_update"
              bordered
              columns={columns}
              dataSource={data}></Table>
           
          </div>
        </div>
      </div>
    </>
  )
}

export default ClientLimitDetails
