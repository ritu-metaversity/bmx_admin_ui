import { React, useState } from "react";
// import { Divider, Radio, Table } from "antd";
import "./PlusMinusReport.scss";
import { Checkbox, Col, notification, Row, Table } from "antd";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useComplteFancyOddsClientsQuery } from "../../../../store/service/CompleteFancyOddsServices";
import { useSelector } from "react-redux";
import { globalSelector } from "../../../../store/global/slice";

const column = [
  {
    title: "Session",
    dataIndex: "selectionname",
    key: 1
  },
  {
    title: "Declare",
    dataIndex: "result",
    key: 2
  }
];
const columns = [
  {
    title: "Client",
    dataIndex: "userid",
    key: 1
  },
];

const PlusMinusReport = () => {
  const { id } = useParams()

  const [first, setfirst] = useState([])
  const [secondUserid, setSecondUserid] = useState([])
  const [showOdds, setShowOdds] = useState(true)
  const [api, contextHolder] = notification.useNotification();
  const { state } = useLocation()

  const onChange = (e) => {
    let checked = e.target.checked
    setShowOdds(checked)
  };
  console.log(showOdds, first, secondUserid, "sdfds");

  const { data, isFetching, isLoading } = useComplteFancyOddsClientsQuery({
    "eventId": id
  }, { refetchOnMountOrArgChange: true })





  const nav = useNavigate()
  const handleBackClick = () => {
    nav("/Events/sports-details")
  }

  const handleShowBtn = () => {
    if (showOdds === false) {
      api.error({
        message: "Please Select at least one fancy or odds",
        closeIcon: false,
        placement: "top",
      });
    }
    else if (first?.length === 0) {
      api.error({
        message: "Please Select at least one Session",
        closeIcon: false,
        placement: "top",
      });
    }
    else if (secondUserid?.length === 0) {
      api.error({
        message: "Please Select at least one client.",
        closeIcon: false,
        placement: "top",
      });
    } else {
      nav(`/Events/${id}/plus-minus-report`, { state: { first, secondUserid, state } })
    }
  }

  return (
    <>
      {contextHolder}
      <div className="main_live_section">
        <div className="_match">
          <div
            className="sub_live_section live_report"
          // style={{ marginTop: "35px" }}
          >
            <div style={{ padding: "5px 8px", fontSize: "22px" }} className="team_name">
              {state?.dataNameee}
            </div>
            <div className="show_btn">

              <button onClick={handleShowBtn}>Show</button>

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
                      checked={showOdds}
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
                      onChange: (selectedRowKeys, selectedRows) => {
                        setfirst(selectedRows.map(i => i.marketid))
                        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);

                      },
                      selectedRowKeys: first,
                      getCheckboxProps: (record) => ({
                        // disabled: record.name === 'Disabled User',
                        // : first.includes(record.marketid),
                        // Column configuration not to be checked
                        // name: record.name,
                        value: record.marketid,
                        name: record.marketid,

                      }),

                    }}
                    rowKey="marketid"
                    bordered
                    columns={column}
                    loading={isFetching || isLoading}
                    pagination={false}
                    dataSource={data?.data?.markets.filter(i => !["match odds", "bookmaker"].includes(i.marketname?.toLowerCase()))}
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
                      onChange: (selectedRowKeys, selectedRows) => {
                        setSecondUserid(selectedRows.map(i => i.userid))
                        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);

                      },
                      selectedRowKeys: secondUserid,
                      getCheckboxProps: (record) => ({
                        // disabled: record.name === 'Disabled User',
                        // : first.includes(record.marketid),
                        // Column configuration not to be checked
                        // name: record.name,
                        value: record.userid,
                        name: record.userid,

                      }),

                    }}


                    rowKey="userid"
                    bordered
                    loading={isFetching || isLoading}
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
