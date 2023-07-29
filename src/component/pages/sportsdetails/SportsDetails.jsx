import "./SportsDetails.scss";
import { Card, DatePicker, Divider, Modal, Pagination } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { CaretDownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

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

const data = [
  {
    key: "1",
    code: 1,
    name: "England v Australia",
    time: "16-06-2023 03:30 PM",
    competition: "Test Match",
    declare: "No",
    wonby: "NONE",
    plusminu: "0",
    setting: "Enabled",
  },
  {
    key: "2",
    code: 2,
    name: "England v Australia",
    time: "16-06-2023 03:30 PM",
    competition: "Test Match",
    declare: "No",
    wonby: "NONE",
    plusminu: "0",
    setting: "Enabled",
  },
  {
    key: "3",
    code: 3,
    name: "England v Australia",
    time: "16-06-2023 03:30 PM",
    competition: "Test Match",
    declare: "No",
    wonby: "NONE",
    plusminu: "0",
    setting: "Enabled",
  },
  {
    key: "4",
    code: 4,
    name: "England v Australia",
    time: "16-06-2023 03:30 PM",
    competition: "Test Match",
    declare: "No",
    wonby: "NONE",
    plusminu: "0",
    setting: "Enabled",
  },
];

const items = [
  {
    label: (
      <Link to="/livereport" className="title_section">
        Match and Session Position
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link className="title_section" to="/plus-minus-report">
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

const SportsDetails = () => {
  const navigate = useNavigate();

  const handleBackbtn = () => {
    navigate("/");
  };

  return (
    <>
      <Card
        className="sport_detail"
        title="Sports Detail"
        extra={<button onClick={handleBackbtn}>Back</button>}>
        <div className="date_picker" style={{}}>
          <RangePicker bordered={false} />
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
              <th>Competition</th>
              <th>Declare</th>
              <th>Won by</th>
              <th className="text-right">Plus Minu</th>
            </tr>
            {data?.map((res) => {
              return (
                <tr key={res?.key}>
                  <td>
                    <Dropdown
                      className="table_dropdown sport_droupdown"
                      menu={{
                        items,
                      }}
                      trigger={["click"]}>
                      <a onClick={(e) => e.preventDefault()}>
                        <Space>
                          <CaretDownOutlined />
                        </Space>
                      </a>
                    </Dropdown>
                  </td>
                  <td>{res?.code}</td>
                  <td>{res?.name}</td>
                  <td>
                    <button onClick={showConfirm} className="setting_btn">
                      {res?.setting}
                    </button>
                  </td>
                  <td>{res?.time}</td>
                  <td>{res?.competition}</td>
                  <td>{res?.declare}</td>
                  <td>{res?.wonby}</td>
                  <td className="text-right">{res?.plusminu}</td>
                </tr>
              );
            })}
          </table>
        </div>
        <Divider />
        <Pagination className="pagination_main ledger_pagination pagination_main" defaultCurrent={1} total={50} />
      </Card>
    </>
  );
};

export default SportsDetails;