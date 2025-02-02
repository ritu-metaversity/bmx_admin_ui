import  {useEffect, useState } from "react";
import "./PlusMinusReport.scss";
import { Checkbox, Col, notification, Row, Table } from "antd";
import { useLocation, useNavigate, useParams } from "react-router-dom";


const data = {
  "markets": [
      {
          "marketid": "4.1710076547972-F2",
          "marketname": "Fancy2Market",
          "result": 12,
          "selectionname": "Match 1st Over Run (KK vs PZ) Adv"
      },
      {
          "marketid": "4.1710076565888-F2",
          "marketname": "Fancy2Market",
          "result": 46,
          "selectionname": "How Many Balls Face By B Azam Adv"
      }
  ],
  "users": {
      "parent": [
          {
              "userid": "Mdemo"
          }
      ],
      "parentKey": "supermasterid",
      "client": []
  }
}

const column = [
  {
    title: "Session",
    dataIndex: "selectionname",
    key: 1,
  },
  {
    title: "Declare",
    dataIndex: "result",
    key: 2,
  },
];
const columns = [
  {
    title: "Parent",
    dataIndex: "userid",
    key: 1,
  },
];
const clintColumns = [
  {
    title: "child",
    dataIndex: "userid",
    key: 1,
  },
];

const PlusMinusReport = () => {
  const { id } = useParams();

  const [first, setfirst] = useState([]);
  const [secondUserid, setSecondUserid] = useState([]);
  const [thirdUserid, setThiredUserid] = useState([]);
  const [showOdds, setShowOdds] = useState(true);
  const [api, contextHolder] = notification.useNotification();
  const { state } = useLocation();

  const onChange = (e) => {
    let checked = e.target.checked;
    setShowOdds(checked);
  };

const [ParentKey, setParentKey] = useState("")
  useEffect(()=>{
    setParentKey(data?.users?.parentKey)
  }, [data?.data])

  const nav = useNavigate();
  const handleBackClick = () => {
    nav(-1);
  };



  const handleShowBtn = () => {
    if (showOdds === false && first?.length === 0 ) {
      api.error({
        message: "Please Select at least one fancy or odds",
        closeIcon: false,
        placement: "top",
      });
    }
    else if (secondUserid?.length === 0 && thirdUserid?.length === 0) {
      api.error({
        message: "Please Select at least one client.",
        closeIcon: false,
        placement: "top",
      });
    } else {
      nav(`/Events/${id}/plus-minus-report`, {
        state: { first, secondUserid, state, thirdUserid, ParentKey, showOdds },
      });
    }
  };

  useEffect(() => {
    
    if(data?.markets?.length){
      setfirst(data?.markets?.map(i=>i.marketid))
    }
   
    if(data?.users?.parent?.length){
      setSecondUserid(data?.users?.parent?.map(i=>i.userid))
    }   
    if(data?.users?.client?.length){
      setThiredUserid(data?.users?.client?.map(i=>i.userid))
    }
    return () => {}
  }, [data?.data])
  

  return (
    <>
      {contextHolder}
      <div className="main_live_section">
        <div className="_match">
          <div
            className="sub_live_section live_report"
            // style={{ marginTop: "35px" }}
          >
            <div
              style={{ padding: "5px 8px", fontSize: "22px" }}
              className="team_name">
              {state?.dataNameee}
            </div>
            <div className="show_btn back_show">
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
                      defaultChecked
                      checked={showOdds}
                      onChange={onChange}></Checkbox>
                  </td>
                  <td>Odds</td>
                </tr>
              </tbody>
            </table>

            <Row className="de_table">
              <Col lg={12} xs={24}>
                <div>
                  <Table
                    className="session_table table1"
                    rowSelection={{
                      type: "checkbox",
                      onChange: (selectedRowKeys, selectedRows) => {
                        setfirst(selectedRows.map((i) => i.marketid));},
                      selectedRowKeys: first,
                      getCheckboxProps: (record) => ({
                        value: record.marketid,
                        name: record.marketid,
                      }),
                    }}
                    rowKey="marketid"
                    bordered
                    columns={column}
                    pagination={false}
                    dataSource={data?.markets.filter(
                      (i) =>
                        !["match odds", "bookmaker"].includes(
                          i.marketname?.toLowerCase()
                        )
                    )}
                  />
                </div>
              </Col>
              <Col lg={12} xs={24}>
                <div>
                  <Table
                    className="session_table table1
                  table2"
                    rowSelection={{
                      type: "checkbox",
                      onChange: (selectedRowKeys, selectedRows) => {
                        setSecondUserid(selectedRows.map((i) => i.userid));
                      },
                      selectedRowKeys: secondUserid,
                      getCheckboxProps: (record) => ({
                        value: record.userid,
                        name: record.userid,
                      }),
                    }}
                    rowKey="userid"
                    bordered
                    // loading={isFetching || isLoading}
                    columns={columns}
                    pagination={false}
                    dataSource={data?.users?.parent}
                  />
                </div>
              </Col>

              <Col lg={12} xs={24}>
                <div>
                  <Table
                    className="session_table table1
                  "
                    rowSelection={{
                      type: "checkbox",
                      onChange: (selectedRowKeys, selectedRows) => {
                        setThiredUserid(selectedRows.map((i) => i.userid));
                      },
                      selectedRowKeys: thirdUserid,
                      getCheckboxProps: (record) => ({
                        value: record.userid,
                        name: record.userid,
                      }),
                    }}
                    rowKey="userid"
                    bordered
                    // loading={isFetching || isLoading}
                    columns={clintColumns}
                    pagination={false}
                    dataSource={data?.users?.client}
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
