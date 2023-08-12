import { Button, Form, Input, Space, Table } from "antd";
import React, { useRef, useState } from "react";
import {
  SearchOutlined,
  CaretDownOutlined,
  PlusOutlined,
} from "@ant-design/icons";

const MinusLimit = () => {
  //   const [searchText, setSearchText] = useState("");
  //   const [searchedColumn, setSearchedColumn] = useState("");
  //   const searchInput = useRef(null);

  //   const handleSearch = (selectedKeys, confirm, dataIndex) => {
  //     confirm();
  //     setSearchText(selectedKeys[0]);
  //     setSearchedColumn(dataIndex);
  //   };
  //   const handleReset = (clearFilters) => {
  //     clearFilters();
  //     setSearchText("");
  //   };

  //   const getColumnSearchProps = (dataIndex) => ({
  //     filterDropdown: ({ setSelectedKeys, selectedKeys, confirm }) => (
  //       <div
  //         style={{
  //           padding: 8,
  //         }}
  //         onKeyDown={(e) => e.stopPropagation()}>
  //         <Input
  //           ref={searchInput}
  //           placeholder={`Search ${dataIndex}`}
  //           value={selectedKeys[0]}
  //           onChange={(e) =>
  //             setSelectedKeys(e.target.value ? [e.target.value] : [])
  //           }
  //           onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
  //           style={{
  //             marginBottom: 8,
  //             display: "block",
  //           }}
  //         />
  //         <Space>
  //           <Button
  //             type="primary"
  //             onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
  //             icon={<SearchOutlined />}
  //             size="small"
  //             style={{
  //               width: 90,
  //             }}>
  //             Search
  //           </Button>
  //           <Button
  //             onClick={() => clearFilters && handleReset(clearFilters)}
  //             size="small"
  //             style={{
  //               width: 90,
  //             }}>
  //             Reset
  //           </Button>
  //         </Space>
  //       </div>
  //     ),
  //     filterIcon: (filtered) => (
  //       <SearchOutlined
  //         style={{
  //           color: filtered ? "#1677ff" : undefined,
  //         }}
  //       />
  //     ),
  //     onFilter: (value, record) =>
  //       record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
  //     onFilterDropdownOpenChange: (visible) => {
  //       if (visible) {
  //         setTimeout(() => searchInput.current?.select(), 100);
  //       }
  //     },
  //     render: (text) =>
  //       searchedColumn === dataIndex ? (
  //         <Highlighter
  //           highlightStyle={{
  //             backgroundColor: "#ffc069",
  //             padding: 0,
  //           }}
  //           searchWords={[searchText]}
  //           autoEscape
  //           textToHighlight={text ? text.toString() : ""}
  //         />
  //       ) : (
  //         text
  //       ),
  //   });
  const columns = [
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
      //   ...getColumnSearchProps("code"),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      //   ...getColumnSearchProps("name"),
    },
    {
      title: "C. Chips",
      dataIndex: "chips",
      key: "chips",
    },
    {
      title: "Add",
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
      chips: 500,
      Minus_Limit: (
        <div>
          <Form.Item name="username">
            <Input type="number" placeholder="Enter Chips" />
          </Form.Item>
        </div>
      ),

      Chips: "2000",
      Action: (
        <div className="minus_btn">
          <button className="add">Add</button>
          <button className="minus">Minus</button>
        </div>
      ),
    },
    {
      key: "2",
      code: "SA152471",
      name: "Joe Black",
      chips: 0,
      Minus_Limit: (
        <div>
          <Form.Item name="username">
            <Input type="number" placeholder="Enter Chips" />
          </Form.Item>
        </div>
      ),

      Action: (
        <div className="minus_btn">
          <button className="add">Add</button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="table_section mwt sport_detail">
        <div className="table_section statement_tabs_data ant-spin-nested-loading">
          <table className="live_table  limit_update">
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>C. Chips</th>
              <th>Minus limit </th>
              <th>Total Limit</th>
              <th>Action</th>
            </tr>

            <tr>
              <td>SA152471</td>
              <td>sup1</td>
              <td>0</td>
              
              <td>
                <div>
                  <Form.Item name="username">
                    <Input type="number" placeholder="Enter Chips" />
                  </Form.Item>
                </div>
              </td>
              <td>0</td>
              <td>
                <div className="minus_btn">
                  {/* <button className="add">Add</button> */}
                  <button className="minus">Minus</button>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MinusLimit;
