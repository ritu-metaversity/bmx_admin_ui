import {
  Card,
  DatePicker,
  Divider,
  Empty,
  Pagination,
  Select,
} from "antd";
import { useNavigate } from "react-router-dom";
import './SelectClient.scss'
import moment from "moment";

// const { RangePicker } = DatePicker;

const data = [];
const SelectClient = () => {
  const nav = useNavigate();
  const handleBackClick = () => {
    nav(-1);
  };

  return (
    <>
      <div className="match_slip">
        <div>
          <Card
            style={{
              margin: "0px 0px 30px 0px",
              width: "100%",
            }}
            className="sport_detail "
            title="Select Client"
            extra={<button onClick={handleBackClick}>Back</button>}>
            <div></div>
            <div className="table_section statement_tabs_data">
              <Select 
                className="client_selected"
                placeholder="Select Client"
                // onChange={handleChange}
                options={[]}
              />
            </div>
          </Card>

          <Card
            style={{
              margin: "0px",
              width: "100%",
            }}
            className="sport_detail "
            title="Mobile App Report"
            extra={<button onClick={handleBackClick}>Back</button>}>
            <div></div>
            <div className="table_section statement_tabs_data">
              <table className="">
                <tr>
                  <th>Event</th>
                  <th>Master Share</th>
                  <th>Super Share</th>
                  <th>Agent Share</th>
                  <th>Date</th>
                </tr>
                {data?.map((res) => {
                  return (
                    <tr key={res?.key}>
                      <td>{moment(res?.date).format("YYYY-MM-DD, h:mm a")} </td>
                      <td>{res?.operation}</td>
                      <td>{res?.description}</td>
                    </tr>
                  );
                })}
              </table>
              {data?.length == 0 ? (
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
              ) : (
                <>
                  <Divider />
                  <div className="pagination_cus">
                    <Pagination defaultCurrent={1} total={5} />
                  </div>
                </>
              )}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SelectClient;
