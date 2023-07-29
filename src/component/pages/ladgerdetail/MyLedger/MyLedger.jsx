import { Card, Divider, Pagination } from "antd";
import "./MyLedger.scss";

const data = [
  {
    key: 1,
    date: "26-06-2023",
    Collection_Name: "",
    Debit: "5.82",
    Credit: "0.00",
    Balance: "27.09",
    Payment_Type: "Zimbabwe v USA",
    Remark: "Master minus",
  },
  {
    key: 2,
    date: "26-06-2023",
    Collection_Name: "",
    Debit: "5.82",
    Credit: "0.00",
    Balance: "27.09",
    Payment_Type: "Zimbabwe v USA",
    Remark: "Master minus",
  },
  {
    key: 3,
    date: "26-06-2023",
    Collection_Name: "",
    Debit: "5.82",
    Credit: "0.00",
    Balance: "27.09",
    Payment_Type: "Zimbabwe v USA",
    Remark: "Master minus",
  },
  {
    key: 4,
    date: "26-06-2023",
    Collection_Name: "",
    Debit: "5.82",
    Credit: "0.00",
    Balance: "27.09",
    Payment_Type: "Zimbabwe v USA",
    Remark: "Master minus",
  },
];

const MyLedger = () => {
  const handleBackbtn = () => {
    console.log("heloo");
  };

  return (
    <>
      <Card
        className="sport_detail ledger_data"
        title="My Ledger"
        extra={<button onClick={handleBackbtn}>Back</button>}>
        <div className="my_ledger">
          <div>
            <h3 style={{padding: "5px",color: "rgb(51, 181, 28)"}}>Lena : 47.72</h3>
          </div>
          <div>
            <h3 style={{padding: "5px",color: "rgb(214, 75, 75)"}}>Dena : -74.81</h3>
          </div>
          <div>
            <h3 style={{padding: "5px",color: "rgb(214, 75, 75)"}}>Balance: -27.09 ( Dena )</h3>
          </div>
        </div>
        <div className="table_section">
          <table className="">
            <tr>
              <th>Date</th>
              <th>Collection Name</th>
              <th className="text-right">Debit</th>
              <th className="text-right">Credit</th>
              <th className="text-right">Balance</th>
              <th>Payment Type</th>
              <th>Remark</th>
            </tr>
            {data?.map((res) => {
              return (
                <tr key={res?.key}>
                  <td>{res?.date}</td>
                  <td>{res?.Collection_Name}</td>
                  <td className="text-right">{res?.Debit}</td>
                  <td className="text-right">{res?.Credit}</td>
                  <td className="text-right">{res?.Balance}</td>
                  <td>{res?.Payment_Type}</td>
                  <td>{res?.Remark}</td>
                </tr>
              );
            })}
          </table>
        </div>
        <Divider />

        <Pagination className="pagination_main ledger_pagination" defaultCurrent={1} total={50} />
      </Card>
    </>
  );
};

export default MyLedger;
