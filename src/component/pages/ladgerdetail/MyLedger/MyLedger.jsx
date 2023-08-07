import { Card, Table } from "antd";
import "./MyLedger.scss";
import { useMyLedgerQuery } from "../../../../store/service/ledgerServices";

const columns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "code",
  },
  {
    title: "Collection Name",
    dataIndex: "collectionName",
    key: "collectionName",
  },
  {
    title: "Debit",
    dataIndex: "debit",
    key: "debit",
    align: "right",
  },
  {
    title: "Credit",
    dataIndex: "credit",
    key: "credit",
    align: "right",
  },

  {
    title: "Balance",
    dataIndex: "balance",
    key: "balance",
    align: "right",
  },
  {
    title: "Payment Type",
    dataIndex: "paymentType",
    key: "paymentType",
  },
  {
    title: "Remark",
    dataIndex: "remarks",
    key: "remarks",
  },
];

const MyLedger = () => {
  const handleBackbtn = () => {
    console.log("/");
  };

  const { data, isLoading, isFetching } = useMyLedgerQuery();

  console.log(data?.data, "dcdsfsdf")

  return (
    <>
      <Card
        className="sport_detail ledger_data"
        title="My Ledger"
        extra={<button onClick={handleBackbtn}>Back</button>}>
        <div className="my_ledger">
          <div>
            <h3 style={{ padding: "5px", color: "rgb(51, 181, 28)" }}>
              Lena : 47.72
            </h3>
          </div>
          <div>
            <h3 style={{ padding: "5px", color: "rgb(214, 75, 75)" }}>
              Dena : -74.81
            </h3>
          </div>
          <div>
            <h3 style={{ padding: "5px", color: "rgb(214, 75, 75)" }}>
              Balance: -27.09 ( Dena )
            </h3>
          </div>
        </div>
        <div className="table_section">
          <Table
            className="live_table limit_update"
            bordered
            columns={columns}
            loading={isFetching||isLoading}
            dataSource={data?.data}/>
        </div> 
      </Card>
    </>
  );
};

export default MyLedger;
