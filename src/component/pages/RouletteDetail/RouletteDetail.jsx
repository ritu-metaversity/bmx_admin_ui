import "./RouletteDetail.scss";
import { Card, DatePicker, Divider, Pagination, Table} from "antd";
import { Link, useNavigate } from "react-router-dom";
import { CaretDownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useState } from "react";
import dayjs from "dayjs";
import moment from "moment";
import { useRouletteDetailsQuery } from "../../../store/service/CasinoServices";


const { RangePicker } = DatePicker;



const RouletteDetail = () => {

  const timeBefore = moment().subtract(14, "days").format("YYYY-MM-DD");
  const time = moment().format("YYYY-MM-DD");
  const [dateData, setDateData] = useState([timeBefore, time]);

  const navigate = useNavigate();

  const handleBackbtn = () => {
    navigate(-1);
  };

  const [rouletteDate, setRouletteDate] = useState()

  const handleDroupDown = (val)=>{
    setRouletteDate(val)
  }

  const handlePlusMinus = ()=>{
    navigate(`/casino/${323334}/plus-minus-type`, {state: {rouletteDate}})
  }

  const handleDisplayGame = ()=>{
    navigate(`/casino/${323334}/all-games`, {state: {rouletteDate}})
  }



  const items = [
    {
      label: (
        <p onClick={handlePlusMinus} className="title_section">
          Aura Plus Minus
        </p>
      ),
      key: "0",
    },
    {
      label: (
        <p onClick={handleDisplayGame} className="title_section">
         Display Game
        </p>
      ),
      key: "1",
    }
  ];


  const onChange = (data, dateString) => {
    setDateData(dateString);
  };


  const columns = [
    {
      title: <span></span>,
      dataIndex: "",
      key: "dateStr",
      render: (text, record) => (
        <Dropdown
        className="table_dropdown sport_droupdown"
        menu={{
          items,
        }}
        trigger={["click"]}>
        <a onClick={()=>handleDroupDown(record?.date)}>
          <Space>
            <CaretDownOutlined />
          </Space>
        </a>
      </Dropdown>
    ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <span>{record?.name}{' '}{record?.date}</span>
    ),
    },
    {
      title: "Plus Minu",
      dataIndex: "netPnl",
      key: "netPnl",
      align: "right",
      render: (text, record) => (<span className={record?.netPnl <0 ?"text_danger":"text_success"}>{record?.netPnl}</span>),
    },
    {
      title: "Comm",
      dataIndex: "comm",
      key: "comm",
      align: "right",
    },
    {
      title: "Pnl",
      dataIndex: "pnl",
      key: "pnl",
      align: "right",
      render: (text, record) => (<span className={(record?.netPnl - record?.comm) <0 ?"text_danger":"text_success"}>{record?.netPnl - record?.comm}</span>),
    },
  ];

 const {data: rouletteData, isLoading, isFetching} = useRouletteDetailsQuery(
  {
    casinoId: 323334,
    startDate: dateData[0],
    endDate: dateData[1]
 }, {refetchOnMountOrArgChange: true});

  return (
    <>
      <Card
        className="sport_detail roulette"
        title="AURA Detail"
        extra={
          <>
            <button onClick={console.log("")}>Book</button>
            <button onClick={handleBackbtn}>Back</button>
          </>
        }>
        <div className="date_picker m-12">
        <RangePicker
            style={{marginBottom:"10px"}}
              defaultValue={[dayjs(timeBefore), dayjs(time)]}
              onChange={onChange}
              bordered={false}
            />
        </div>
        <div className="table_section">
          <div className="table_section">
          <Table
            className="live_table limit_update"
            bordered
            columns={columns}
            loading={isFetching||isLoading}
            pagination={{ defaultPageSize: 50, pageSizeOptions:[50, 100, 150, 200, 250]}}
            dataSource={rouletteData?.data}/>
        </div>
        </div>
        {/* <Divider />
        <Pagination
          style={{ marginBottom: "12px" }}
          className="pagination_main ledger_pagination pagination_main"
          onShowSizeChange={(c, s) => setPaginationTotal(s)}
          total={totalPage && totalPage * paginationTotal}
          defaultPageSize={50}
          pageSizeOptions={[50, 100, 150, 200, 250]}
          onChange={(e) => setIndexData(e - 1)}
        /> */}
      </Card>
    </>
  );
};

export default RouletteDetail;
