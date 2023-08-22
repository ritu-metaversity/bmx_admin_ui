import {
  Card,
  Col,
  DatePicker,
  Divider,
  Empty,
  Pagination,
  Row,
  Select,
  Spin,
  Table,
} from "antd";
import "./MatchLedger.scss";
import { useLazyProfitAndLossLedgerQuery } from "../../../../store/service/ledgerServices";
import { useEffect, useState } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const columns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Title",
    dataIndex: "matchName",
    key: "matchName",
  },
  {
    title: "CR",
    dataIndex: "netPnl",
    key: "netPnl",
  },
  {
    title: "DR",
    dataIndex: "netPnl",
    key: "netPnl",
  },
];

const MatchLedger = () => {
  const timeBefore = moment().subtract(14, "days").format("YYYY-MM-DD");
  const time = moment().format("YYYY-MM-DD");
  const [dateData, setDateData] = useState([timeBefore, time]);
  const [totalPage, setTotalPage] = useState();
  const [paginationTotal, setPaginationTotal] = useState(10);
  const [indexData, setIndexData] = useState(0);

  const onChange = (date, dateString) => {
    setDateData(dateString);
  };

  // const [data, setData] = useState({});
  const [trigger, { data, isLoading }] = useLazyProfitAndLossLedgerQuery();

  useEffect(() => {
    trigger({
      startDate: dateData[0],
      endDate: dateData[1],
      index: indexData < 0 ? 0 : indexData,
      noOfRecords: paginationTotal,
    });
    setTotalPage(data?.data?.totalPages);
  }, [data?.data, dateData, paginationTotal, indexData]);

  const nav = useNavigate();

  return (
    <Card
      className="sport_detail main_match_ledger"
      title="Match Ledger"
      extra={<button onClick={() => nav(-1)}>Back</button>}>
      <Row className="main_super_super_ledger">
        <Col lg={8} xs={24} className="match_ladger">
          <DatePicker.RangePicker onChange={onChange} />
        </Col>
        {/* <Col lg={12} xs={24} className="selected_ledger">
        <Select defaultValue="lucy" style={{ width: 120 }} onChange={(value) => console.log(`selected ${value}`)}>
          <Select.Option value="jack" label="Jack" />
          <Select.Option value="lucy" label="Lucy" />
          <Select.Option value="Yiminghe" label="yiminghe" />
          <Select.Option value="disabled" label="Disabled" disabled />
        </Select>
      </Col> */}
        <Col lg={6} xs={24}>
          <div className="matchladger_total">
            <p style={{ fontSize: "20px", marginLeft: "10px" }}>
              Total :{" "}
              <span style={{ color: "rgb(82, 196, 26)" }}>
                {(data?.data?.total)?.toFixed(2)}
              </span>
            </p>
          </div>
        </Col>
      </Row>
      {isLoading ? (
        <Spin className="loading_active" tip="Loading..." size="large">
          <div className="content" />
        </Spin>
      ) : (
        <div className="table_section statement_tabs_data">
          <table className="">
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>CR</th>
              <th>DR</th>
            </tr>
            {data?.data?.list?.map((res, id) => {
              return (
                <tr key={id} style={{ cursor: "pointer" }}>
                  <td>{moment(res?.date).format("DD-MM-YYYY")}</td>
                  <td>{res?.matchName}</td>
                  <td>{res?.netPnl > 0 ? res?.netPnl : 0}</td>
                  <td>{res?.netPnl < 0 ? res?.netPnl : 0}</td>
                </tr>
              );
            })}
          </table>
          {data?.list?.length === 0 ? (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          ) : (
            ""
          )}
        </div>
      )}
      <Divider />
      <Pagination
        className="pagination_main ledger_pagination"
        onShowSizeChange={(c, s) => setPaginationTotal(s)}
        total={totalPage && totalPage * paginationTotal}
        onChange={(e) => setIndexData(e - 1)}
      />
    </Card>
  );
};

export default MatchLedger;
