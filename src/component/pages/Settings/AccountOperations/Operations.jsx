import { Card, DatePicker, Divider, Empty, Pagination } from "antd";
import { useNavigate } from "react-router-dom";
import "./Operations.scss";

// const handleChange = (value) => {
//   console.log(`selected ${value}`);
// };

const { RangePicker } = DatePicker;

const data = [
  {
    key: "1",
    date: "4 Jul 05:20 PM",
    operation: "Master match share Change",
    description:
      "OLD Master match share 24, NEW Master match share 14 for ( A157269 ) Sid A",
  },
  {
    key: "2",
    date: "4 Jul 05:20 PM",
    operation: "Master match share Change",
    description:
      "OLD Master match share 24, NEW Master match share 14 for ( A157269 ) Sid A",
  },
  {
    key: "3",
    date: "22 Jun 03:20 PM",
    operation: "Password Change",
    description: "OLD Password J93185, NEW Password client",
  },
];

console.log(data?.length);

const Operations = () => {
  const nav = useNavigate();
  const handleBackClick = () => {
    nav("/markets");
  };
  //   const onChange = (key) => {
  //     console.log(key);
  //   };

  return (
    <>
      <div className="match_slip">
        <div>
          <Card
            style={{
              margin: "0px",
              width: "100%",
            }}
            className="sport_detail pnl"
            title="Operations ( 4 )"
            extra={<button onClick={handleBackClick}>Back</button>}>
            <div className="operation_date">
              <RangePicker />
            </div>

            <div className="table_section statement_tabs_data">
              <table className="">
                <tr>
                  <th>Date</th>
                  <th>Operation</th>
                  <th>Description</th>
                </tr>
                {data?.map((res) => {
                  return (
                    <tr key={res?.key}>
                      <td>{res?.date}</td>
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
                <Divider/>
                <div className="pagination_cus">
                  <Pagination className="pagination_main ledger_pagination"  defaultCurrent={1} total={5} />
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

export default Operations;
