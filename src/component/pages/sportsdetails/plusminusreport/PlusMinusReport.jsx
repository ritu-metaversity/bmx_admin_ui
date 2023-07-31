import { React, useState } from "react";
// import { Divider, Radio, Table } from "antd";
import "./PlusMinusReport.scss";
import { Checkbox, Col, Row, Table } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useComplteFancyOddsClientsQuery } from "../../../../store/service/CompleteFancyOddsServices";
import { useSelector } from "react-redux";
import { globalSelector } from "../../../../store/global/slice";

const column = [
  {
    title: "Session",
    dataIndex: "selectionname",
    key:1
  },
  {
    title: "Declare",
    dataIndex: "result",
    key:2
  }
];
const columns = [
  {
    title: "Client",
    dataIndex: "userid",
    key:1
  },
];

const PlusMinusReport = () => {
  const {id} = useParams()
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const {data} = useComplteFancyOddsClientsQuery({
    "eventId": id
  }, {refetchOnMountOrArgChange: true}) 


  const sportName = useSelector(globalSelector);


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
             {sportName?.data}
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
                    columns={column}
                    pagination={false}
                    dataSource={data?.data?.markets.filter(i=>!["match odds","bookmaker"].includes(i.marketname?.toLowerCase()))}
                  />
                </div>
              </Col>
              <Col span={12}>
              <div>
                  <Table
                  className="session_table table1
                  table2"
                    rowSelection={{
                      type: "checkbox",
                    }}
                    bordered
                    columns={columns}
                    pagination={false}
                    dataSource={data?.data?.users}
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
