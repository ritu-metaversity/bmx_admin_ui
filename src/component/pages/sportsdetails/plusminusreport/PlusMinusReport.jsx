import { React, useState } from "react";
// import { Divider, Radio, Table } from "antd";
import "./PlusMinusReport.scss";
import { Checkbox, Col, Row, Table } from "antd";
import { useNavigate } from "react-router-dom";

const columns = [
  {
    title: "Session",
    dataIndex: "Session",
  },
  {
    title: "Declare",
    dataIndex: "Declare",
  }
];
const data = [
//   {
//     key: "1",
//     name: "John Brown",
   
//   },
//   {
//     key: "2",
//     name: "Jim Green",
   
//   },
//   {
//     key: "3",
//     name: "Joe Black",
    
//   },
//   {
//     key: "4",
//     name: "Disabled User",
    
//   },
];

const PlusMinusReport = () => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const nav = useNavigate()
  const handleBackClick = ()=>{
    nav("/Events/sports-details")
  }

  return (
    <>
      <div className="main_live_section">
        <div className="_match">
          <div
            className="sub_live_section live_report"
            // style={{ marginTop: "35px" }}
            >
            <div style={{ padding: "5px 8px", fontSize: "22px" }} className="team_name">
              Dindigul Dragons v Siechem Madurai Panther (Tamil Nadu Premier
              League)
            </div>
            <div className="show_btn">
              <button>Show</button>
              <button onClick={handleBackClick}>Back</button>
            </div>
          </div>
          <div className="table_section ">
            <table className="match_table">
              <thead>
                <tr>
                  <th></th>
                  <th>Match</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td width="30px">
                    <Checkbox
                      className="table_check"
                      onChange={onChange}></Checkbox>
                  </td>
                  <td>Odds</td>
                </tr>
              </tbody>
            </table>

            <Row className="de_table">
              <Col span={12}>
                <div>
                  <Table
                  className="session_table table1"
                    rowSelection={{
                      type: "checkbox",
                    }}
                    bordered
                    columns={columns}
                    pagination={false}
                    dataSource={data}
                  />
                </div>
              </Col>
              <Col span={12}>
              <div>
                  <Table
                  className="session_table
                  table2"
                    rowSelection={{
                      type: "checkbox",
                    }}
                    bordered
                    columns={columns}
                    pagination={false}
                    dataSource={data}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlusMinusReport;
