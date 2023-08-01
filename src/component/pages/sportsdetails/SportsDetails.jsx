import "./SportsDetails.scss";
import { Card, DatePicker, Divider, Modal, Pagination } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { CaretDownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useSportDetailQuery } from "../../../store/service/SportDetailServices";
import { useEffect, useState } from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { setData } from "../../../store/global/slice";

const { confirm } = Modal;
const showConfirm = () => {
  confirm({
    title: "Confirm Changes",
    icon: <QuestionCircleOutlined />,
    onOk() {
      console.log("OK");
    },
    onCancel() {
      console.log("Cancel");
    },
  });
};

const { RangePicker } = DatePicker;
const SportsDetails = () => {
  const timeBefore = moment().subtract(14, "days").format("YYYY-MM-DD");
  const time = moment().format("YYYY-MM-DD");
  const [dateData, setDateData] = useState([timeBefore, time]);
  const [matchId, setMatchId] = useState(0);
  const [InPlay, setInPlay] = useState();
  const [totalPage, setTotalPage] = useState();
  const [paginationTotal, setPaginationTotal] = useState(10);
  const [indexData, setIndexData] = useState(1);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const getMatchId = (matchId, inPlay, sportName) => {
    setMatchId(matchId);
    dispatch(setData(sportName));
    setInPlay(inPlay);
  };

  console.log(paginationTotal);

  const items = [
    {
      label: (
        <Link
          to={`/Events/${matchId}/live-report`}
          className="title_section"
          style={{ display: `${InPlay ? "block" : "none"}` }}>
          Match and Session Position
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <Link className="title_section" to={`/plus-minus-report/${matchId}`}>
          Match and Session Plus Minus
        </Link>
      ),
      key: "1",
    },
    {
      label: (
        <Link className="title_section" to="/match-slips">
          Display Match Bets
        </Link>
      ),
      key: "2",
    },
    {
      label: (
        <Link className="title_section" to="/fancy-slips">
          Display Session Bets
        </Link>
      ),
      key: "3",
    },
    {
      label: (
        <Link className="title_section" to="/completed-fancy-slips">
          Completed Fancies
        </Link>
      ),
      key: "4",
    },
    {
      label: (
        <Link className="title_section" to="/rejectedBetsByEvent">
          Rejected Bet
        </Link>
      ),
      key: "5",
    },
  ];

  const handleBackbtn = () => {
    navigate("/");
  };

  const onChange = (data, dateString) => {
    setDateData(dateString);
  };
  const { data: sportDetail } = useSportDetailQuery(
    {
      startDate: dateData[0],
      endDate: dateData[1],
      noOfRecords: paginationTotal,
      index: indexData<0?0:indexData,
    },
    { refetchOnMountOrArgChange: true }
  );

  useEffect(() => {
    setTotalPage(sportDetail?.data?.totalPages);
  }, [sportDetail]);


  return (
    <>
      <Card
        className="sport_detail"
        title="Sports Detail"
        extra={<button onClick={handleBackbtn}>Back</button>}>
        <div className="date_picker" style={{}}>
          <RangePicker
            style={{ margin: "10px" }}
            onChange={onChange}
            bordered={false}
          />
        </div>
        <div className="table_section">
          {/* <Table columns={columns} dataSource={data} /> */}
          <table className="">
            <tr>
              <th></th>
              <th>Code</th>
              <th>Name</th>
              <th>Setting</th>
              <th>Time</th>
              {/* <th>Competition</th> */}
              <th>Declare</th>
              <th>Won by</th>
              <th className="text-right">Plus Minu</th>
            </tr>
            {sportDetail?.data?.data?.map((res) => {
              return (
                <tr key={res?.key}>
                  <td>
                    <Dropdown
                      className="table_dropdown sport_droupdown"
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
                              res?.eventName
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
                  <td>
                    {res?.inPlay == true ? (
                      <button onClick={showConfirm} className="setting_btn">
                        {" "}
                        Enabled{" "}
                      </button>
                    ) : (
                      "Enabled"
                    )}
                  </td>
                  <td>{moment(res?.eventDate).format("DD-MM-YYYY, h:mm a")}</td>
                  {/* <td>{res?.competition}</td> */}
                  <td>{res?.winner === null?"":"YES"}</td>
                  <td>{res?.winner === null ? "" : res?.winner}</td>
                  <td className="text-right">
                    {res?.plusMinus === null ? "0" : res?.plusMinus}
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
        <Divider />
        <Pagination
          style={{marginBottom:"12px"}}
          className="pagination_main ledger_pagination pagination_main"
          onShowSizeChange={(c, s) => setPaginationTotal(s)}
          total={totalPage && (totalPage)*paginationTotal}
          onChange={(e)=>setIndexData(e-1)}
        />
      </Card>
    </>
  );
};

export default SportsDetails;
