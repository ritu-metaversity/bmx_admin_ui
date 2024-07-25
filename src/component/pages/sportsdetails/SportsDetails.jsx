/* eslint-disable no-unused-vars */
import "./SportsDetails.scss";
import {
  Card,
  Col,
  DatePicker,
  Divider,
  Empty,
  Pagination,
  Row,
} from "antd";
import { Link, useNavigate } from "react-router-dom";
import { CaretDownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useEffect, useRef, useState } from "react";
import moment from "moment";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;

const sportDetail = [
  {
      "_id": "66015",
      "eventId": 33422277,
      "eventName": "Manchester Originals v Welsh Fire",
      "eventDate": "2024-07-25 23:00:00.000000",
      "inPlay": false,
      "isActive": true,
      "winner": null,
      "plusMinus": 0,
      "statusStr": "Upcoming",
      "upLineAmount": 0,
      "isLedgerCreated": false
  },
  {
      "_id": "66018",
      "eventId": 33422448,
      "eventName": "Manchester Originals Women v Welsh Fire Women",
      "eventDate": "2024-07-25 19:30:00.000000",
      "inPlay": false,
      "isActive": true,
      "winner": null,
      "plusMinus": 0,
      "statusStr": "Upcoming",
      "upLineAmount": 0,
      "isLedgerCreated": false
  },
  {
      "_id": "66341",
      "eventId": 33438620,
      "eventName": "Glamorgan v Gloucestershire",
      "eventDate": "2024-07-25 15:30:00.000000",
      "inPlay": false,
      "isActive": true,
      "winner": null,
      "plusMinus": 0,
      "statusStr": "Upcoming",
      "upLineAmount": 0,
      "isLedgerCreated": false
  },
  {
      "_id": "66340",
      "eventId": 33438617,
      "eventName": "Surrey v Yorkshire",
      "eventDate": "2024-07-25 15:30:00.000000",
      "inPlay": false,
      "isActive": true,
      "winner": null,
      "plusMinus": 0,
      "statusStr": "Upcoming",
      "upLineAmount": 0,
      "isLedgerCreated": false
  },
]

const sportData = [
  {
      "sportId": 4,
      "sportName": "Cricket",
      "sportImage": "https://admin-new-apiis.s3.ap-south-1.amazonaws.com/"
  },
  {
      "sportId": 2,
      "sportName": "Tennis",
      "sportImage": "https://admin-new-apiis.s3.ap-south-1.amazonaws.com/"
  },
  {
      "sportId": 1,
      "sportName": "Football",
      "sportImage": "https://admin-new-apiis.s3.ap-south-1.amazonaws.com/"
  },
  {
      "sportId": 77,
      "sportName": "Horse racing",
      "sportImage": "https://admin-new-apiis.s3.ap-south-1.amazonaws.com/"
  },
  {
      "sportId": 14,
      "sportName": "Kabaddi",
      "sportImage": "https://admin-new-apiis.s3.ap-south-1.amazonaws.com/"
  },
  {
      "sportId": 6,
      "sportName": "Election",
      "sportImage": "https://admin-new-apiis.s3.ap-south-1.amazonaws.com/"
  }
]


const SportsDetails = () => {
  const timeBefore = moment().subtract(14, "days").format("YYYY-MM-DD");
  const time = moment().format("YYYY-MM-DD");
  const [dateData, setDateData] = useState([timeBefore, time]);
  const [matchId, setMatchId] = useState(0);
  const [InPlay, setInPlay] = useState();
  const [totalPage, setTotalPage] = useState();
  const [paginationTotal, setPaginationTotal] = useState(10);
  const [indexData, setIndexData] = useState(0);
  const [dataNameee, setDataNameee] = useState("");
  const [dropdownStates, setDropdownStates] = useState([]);
  const [layoutOpen, setLayoutOpen] = useState(false);
  const [statusStr, setStatusStr] = useState("");
  const [activeTabData, setActtiveTabData] = useState(4);
  const totalPages = 10;

  const nav = useNavigate();

  const getMatchId = (matchId, inPlay, sportName, statusStraVal) => {
    setMatchId(matchId);
    setDataNameee(sportName);
    setInPlay(inPlay);
    setStatusStr(statusStraVal);
  };

  const handlePlusMinus = (matchId) => {
    setDropdownStates(false);
    nav(`/plus-minus-report/${matchId}`, { state: { dataNameee } });
  };


  const items = [
    {
      label: (
        <Link
          onClick={() => setDropdownStates(false)}
          to={`/Events/${matchId}/${activeTabData}/live-report`}
          className="title_section"
          style={{
            display: `${
              statusStr === "In Play" || statusStr === "Upcoming"
                ? "block"
                : "none"
            }`,
          }}>
          Match and Session Position
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <p className="title_section" onClick={() => handlePlusMinus(matchId)}>
          Match and Session Plus Minus
        </p>
      ),
      key: "1",
    },
    {
      label: (
        <Link
          onClick={() => setDropdownStates(false)}
          className="title_section"
          to={`/match-slips/${matchId}`}>
          Display Match Bets
        </Link>
      ),
      key: "2",
    },
    {
      label: (
        <Link
          onClick={() => setDropdownStates(false)}
          className="title_section"
          to={`/fancy-slips/${matchId}`}>
          Display Session Bets
        </Link>
      ),
      key: "3",
    },
    {
      label: (
        <Link
          onClick={() => setDropdownStates(false)}
          className="title_section"
          to={`/completed-fancy-slips/${matchId}`}>
          Completed Fancies
        </Link>
      ),
      key: "4",
    },
    {
      label: (
        <Link
          onClick={() => setDropdownStates(false)}
          className="title_section"
          to={`/rejectedBetsByEvent/${matchId}`}>
          Rejected Bet
        </Link>
      ),
      key: "5",
    },
  ];

  const handleBackbtn = () => {
    nav(-1);
  };

  const onChange = (data, dateString) => {
    setDateData(dateString);
  };


  useEffect(() => {
    setTotalPage(totalPages);

  }, [totalPages]);
 


  const toggleDropdown = (index) => {
    setLayoutOpen(false)
    const updatedDropdownStates = [...dropdownStates];
    updatedDropdownStates[index] = !updatedDropdownStates[index];
    setDropdownStates(updatedDropdownStates);
  };
  const myElementRef = useRef(null);

  

  const handleSportId = (id) => {
    setActtiveTabData(id);
  };
  

  return (
    <>
    {/* {
      layoutOpen && <div className="overlay_layout"></div>
    } */}
    
      <Card
        className="sport_detail"
        title="Sports Detail"
        extra={<button onClick={handleBackbtn}>Back</button>}>
        <Row className="date_picker" style={{}}>
          <Col xl={24} lg={24} md={24} xs={24} style={{ padding: "10px 0px" }}>
            <div className="active_sport_list">
              <div className="sub_list_sport_list">
                {sportData?.map((item, id) => {
                  return (
                    <div
                      key={id}
                      onClick={() => handleSportId(item?.sportId)}
                      className={`tab_section_active_sport
                   ${activeTabData == item?.sportId ? "activeList" : ""}
                  `}>
                      <p>{item?.sportName}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Col>
        </Row>
        <Row className="date_picker" style={{}}>
          <Col
            xl={6}
            lg={6}
            md={24}
            xs={24}
            className="datepicker_sport"
            style={{ padding: "0px 10px" }}>
            <RangePicker
            style={{marginBottom:"10px"}}
              defaultValue={[dayjs(timeBefore), dayjs(time)]}
              onChange={onChange}
              bordered={false}
            />
          </Col>
        </Row>
        <div ref={myElementRef} className="table_section">
          <table className="ant-spin-nested-loading">
            <tr>
              <th></th>
              <th>Code</th>
              <th>Name</th>
              <th>Setting</th>
              <th>Time</th>
              <th>Declare</th>
              <th>Won by</th>
              <th className="text-right">Plus Minus</th>
              <th className="text-right">Upline Amount</th>
            </tr>
            {/* {isLoading || isFetching ? (
              <div className="spin_icon comp_spin">
                <Spin size="large" />
              </div>
            ) : (
              ""
            )} */}
            {sportDetail.map((res, id) => {
              return (
                <tr key={res?.key}>
                  <td style={{ cursor: "pointer" }}>
                    <Dropdown
                      className="table_dropdown sport_droupdown"
                      open={dropdownStates[id]}
                      onOpenChange={() => toggleDropdown(id)}
                      // onClick={()=>setLayoutOpen(true)}
                      menu={{
                        items,
                        className: "sport_list",
                      }}

                      trigger={[ "click", "contextMenu"]}>
                      <p
                        onClick={(e) => {
                          e.preventDefault(),
                            getMatchId(
                              res?.eventId,
                              res?.inPlay,
                              res?.eventName,
                              res?.statusStr
                            );
                        }}>
                        <Space>
                          <CaretDownOutlined />
                        </Space>
                      </p>
                    </Dropdown>
                  </td>
                  <td>{res?.eventId}</td>
                  <td>{res?.eventName}</td>
                  <td>{res?.statusStr}</td>
                  <td>{moment(res?.eventDate).format("YYYY-MM-DD, h:mm A")}</td>
                  <td>{res?.isLedgerCreated === true ? "YES" : "NO"}</td>
                  <td>{res?.winner === null ? "" : res?.winner}</td>
                  <td
                    className={`text-right ${
                      res?.plusMinus < 0
                        ? "text_danger"
                        : res?.plusMinus > 0
                        ? "text_success"
                        : ""
                    }`}>
                    {res?.plusMinus === null ? "0" : res?.plusMinus}
                  </td>
                  <td
                    className={`text-right ${
                      res?.upLineAmount < 0
                        ? "text_danger"
                        : res?.upLineAmount > 0
                        ? "text_success"
                        : ""
                    }`}>
                    {res?.upLineAmount === null  ? "0" : res?.upLineAmount}
                  </td>
                </tr>
              );
            })}
            {(
              sportDetail.length === 0) && (
              <tr>
                {" "}
                <td colSpan={9}>
                  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                </td>
              </tr>
            )}
          </table>
        </div>
        <Divider />
        <Pagination
          style={{ marginBottom: "12px" }}
          className="pagination_main ledger_pagination pagination_main"
          onShowSizeChange={(c, s) => setPaginationTotal(s)}
          total={totalPage && totalPage * paginationTotal}
          defaultPageSize={50}
          pageSizeOptions={[50, 100, 150, 200, 250]}
          onChange={(e) => setIndexData(e - 1)}
        />
      </Card>
    </>
  );
};

export default SportsDetails;
