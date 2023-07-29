import { Card, DatePicker, Empty, Pagination } from "antd";
import { useNavigate } from "react-router-dom";
import './AccountOperations.scss'

// const handleChange = (value) => {
//   console.log(`selected ${value}`);
// };

const { RangePicker } = DatePicker;

const data = [
  
];

console.log(data?.length)

const AccountOperations = () => {
  const nav = useNavigate();
  const handleBackClick = () => {
    nav("/Events/sports-details");
  };
//   const onChange = (key) => {
//     console.log(key);
//   };

  return (
    <>
      <div className="match_slip account_match_slip">
        <div>
          <Card
            style={{
              margin: "0px",
              width: "100%",
            }}
            className="sport_detail pnl"
            title="List Of All Transactions ( 0 )"
            extra={<button onClick={handleBackClick}>Back</button>}>
            <div className="">
              <RangePicker />
            </div>

            <div className="table_section statement_tabs_data">
            <table className="">
              <tr>
                <th>Date</th>
                <th>Operation</th>
                <th>Done By</th>
                <th>Description</th>
              </tr>
              {data?.map((res) => {
                return (
                  <tr key={res?.key}>
                    <td>{res?.Date}</td>
                    <td>{res?.Description}</td>
                    <td>{res?.PrevBal}</td>
                    <td className="text_success">{res?.CR}</td>
                    {/* <td>{res?.wonby}</td> */}
                  </tr>
                );
              })}
            </table>
              {
                data?.length == 0?<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />:<div className="pagination_cus">
                <Pagination  className="pagination_main ledger_pagination"  defaultCurrent={1} total={5} />
              </div>
              }

            
          </div>
          </Card>
          
        </div>
      </div>
    </>
  );
};

export default AccountOperations;
