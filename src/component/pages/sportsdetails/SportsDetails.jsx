import "./SportsDetails.scss";
import {
  Card,
  Col,
  DatePicker,
  Divider,
  Empty,
  Modal,
  Pagination,
  Row,
  Select,
  Spin,
} from "antd";
import { Link, useNavigate } from "react-router-dom";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { CaretDownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useSportDetailQuery } from "../../../store/service/SportDetailServices";
import { useEffect, useState } from "react";
import moment from "moment";
import dayjs from "dayjs";
import { useSportListbyIDQuery } from "../../../store/service/supermasteAccountStatementServices";

const { RangePicker } = DatePicker;

const SportsDetails = () => {
  const timeBefore = moment().subtract(14, "days").format("YYYY-MM-DD");
  const time = moment().format("YYYY-MM-DD");
  const [dateData, setDateData] = useState([timeBefore, time]);
  const [matchId, setMatchId] = useState(0);
  const [InPlay, setInPlay] = useState();
  const [totalPage, setTotalPage] = useState();
  const [paginationTotal, setPaginationTotal] = useState(50);
  const [indexData, setIndexData] = useState(0);
  const [dataNameee, setDataNameee] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownStates, setDropdownStates] = useState([]);
  const [SportId, setSportId] = useState(4);
  const [statusStr, setStatusStr] = useState("");

  const nav = useNavigate();

  const getMatchId = (matchId, inPlay, sportName, statusStraVal) => {
    setMatchId(matchId);
    setDataNameee(sportName);
    setInPlay(inPlay);
    setStatusStr(statusStraVal)
  };

  const handlePlusMinus = (matchId) => {
    setDropdownStates(false);
    nav(`/plus-minus-report/${matchId}`, {state: { dataNameee }});
  };


  const {data: sportData} = useSportListbyIDQuery()


  const items = [
    {
      label: (
        <Link
          onClick={() => setDropdownStates(false)}
          to={`/Events/${matchId}/live-report`}
          className="title_section"
          style={{ display: `${statusStr === "In Play" ? "block" : "none"}` }}>
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
  const {
    data: sportDetail,
    isFetching,
    isLoading,
  } = useSportDetailQuery(
    {
      startDate: dateData[0],
      endDate: dateData[1],
      noOfRecords: paginationTotal,
      index: indexData < 0 ? 0 : indexData || 0,
      sportId:SportId
    },
    { refetchOnMountOrArgChange: true }
  );

  useEffect(() => {
    setTotalPage(sportDetail?.data?.totalPages);
  }, [sportDetail]);
  useEffect(() => {
    const initialStates = new Array(sportDetail?.data?.data?.length).fill(
      false
    );
    setDropdownStates(initialStates);
  }, [sportDetail?.data?.data]);

  const handleScroll = () => {
    const updatedDropdownStates = dropdownStates.map(() => false);
    setDropdownStates(updatedDropdownStates);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = (index) => {
    const updatedDropdownStates = [...dropdownStates];
    updatedDropdownStates[index] = !updatedDropdownStates[index];
    setDropdownStates(updatedDropdownStates);
  };

  useEffect(() => {
    if (!isDropdownOpen) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDropdownOpen]);

  return (
    <>
      <Card
        className="sport_detail"
        title="Sports Detail"
        extra={<button onClick={handleBackbtn}>Back</button>}>
        <Row className="date_picker" style={{}}>
          <Col xl={6} lg={6} md={24} xs={24} className="datepicker_sport" style={{padding:"0px 10px"}}>
            <RangePicker
              defaultValue={[dayjs(timeBefore), dayjs(time)]}
              onChange={onChange}
              bordered={false}
            />
          </Col>
          <Col xl={6} lg={6} md={24} xs={24} style={{padding:"10px 0px"}}>
            <Select
            className="sport_select"
            onChange={(value)=>setSportId(value)}
            defaultValue={SportId}
            >
              {
                sportData?.data?.map((res, id)=>{
                  console.log(res, "Dsdfasdas")
                  return(
                    <Select.Option value={res?.sportId}  key={id}>{res?.sportName}</Select.Option>
                  )
                })
              }
            </Select>
          </Col>
        </Row>
        <div className="table_section">
          {/* <Table columns={columns} dataSource={data} /> */}
          <table className="ant-spin-nested-loading">
            <tr>
              <th></th>
              <th>Code</th>
              <th>Name</th>
              <th>Setting</th>
              <th>Time</th>
              {/* <th>Competition</th> */}
              <th>Declare</th>
              <th>Won by</th>
              <th className="text-right">Plus Minus</th>
            </tr>
            {isLoading || isFetching ? (
              <div className="spin_icon comp_spin">
                <Spin size="large" />
              </div>
            ) : (
              ""
            )}
            {sportDetail?.data?.data?.map((res, id) => {
              return (
                <tr key={res?.key}>
                  <td style={{cursor:"pointer"}}>
                    <Dropdown
                      
                      className="table_dropdown sport_droupdown"
                      open={dropdownStates[id]}
                      onOpenChange={() => toggleDropdown(id)}
                      menu={{
                        items,
                        className: "sport_list",
                      }}
                      trigger={["click"]}>
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
                  {/* <td>{res?.competition}</td> */}
                  <td>{res?.winner === null ? "" : "YES"}</td>
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
                </tr>
              );
            })}
            {(sportDetail?.data?.data === undefined ||
              sportDetail?.data?.data?.length === 0) && (
              <tr>
                {" "}
                <td colSpan={8}>
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
