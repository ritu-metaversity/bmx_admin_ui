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
  const [paginationTotal, setPaginationTotal] = useState(50);
  const [indexData, setIndexData] = useState(0);

  const navigate = useNavigate();

  const handleBackbtn = () => {
    navigate(-1);
  };

  const [rouletteKey, setRouletteKey] = useState()

  const handleDroupDown = (val)=>{
    setRouletteKey(val)
  }

  const data = [
    {
      key: "1",
      name: "Roulette 04-07-2023",
      plusminu: 24,
    },
    {
      key: "2",
      name: "Roulette 04-07-2023",
      plusminu: -4,
    }
  ];
  
  const items = [
    {
      label: (
        <Link to={`/Casino/rouletteKey/plus-minus-type`} className="title_section">
          Roulette Plus Minus
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <Link className="title_section" to="/Casino/rouletteKey/all-games">
         Display Game
        </Link>
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
        <a onClick={()=>handleDroupDown()}>
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

 const {data: rouletteData} = useRouletteDetailsQuery(
  {
    casinoId: 323334,
    index: indexData,
    noOfRecords: paginationTotal,
    startDate: dateData[0],
    endDate: dateData[1]
 })
  return (
    <>
      <Card
        className="sport_detail roulette"
        title="Roulette Detail"
        extra={
          <>
            <button onClick={console.log("helllo")}>Book</button>
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
          {/* <table className="">
            <tr>
              <th width="15%"></th>
              <th width="65%">Name</th>
              <th className="text-right" width="20%">
                Plus Minu
              </th>
              <th className="text-right" width="20%">
                Comm
              </th>
              <th className="text-right" width="20%">
                Pnl
              </th>
            </tr>
            {rouletteData?.data?.data?.map((res) => {
              return (
                <tr key={res?.key}>
                  <td className="roulette_droupdown" width="15%">
                    <Dropdown
                      className="table_dropdown sport_droupdown"
                      menu={{
                        items,
                      }}
                      trigger={["click"]}>
                      <a onClick={()=>handleDroupDown(res?.key)}>
                        <Space>
                          <CaretDownOutlined />
                        </Space>
                      </a>
                    </Dropdown>
                  </td>
                  <td width="65%">{res?.name}{" "}{res?.date}</td>
                  <td className={`text-right ${res?.netPnl >= 0 ?"text_success": "text_danger"}`} width="20%">
                    {res?.netPnl}
                  </td>
                  <td className="text-right" width="20%">
                    {res?.comm}
                  </td>
                  <td className="text-right " width="20%">
                    {res?.netPnl - res?.comm}
                  </td>
                </tr>
              );
            })}
          </table> */}

          <div className="table_section">
          <Table
            className="live_table limit_update"
            bordered
            columns={columns}
            // loading={isFetching||isLoading}
            pagination={{ defaultPageSize: 50, pageSizeOptions:[50, 100, 150, 200, 250]}}
            dataSource={rouletteData?.data?.data}/>
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
