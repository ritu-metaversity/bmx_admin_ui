import { Card, Col, Divider, Pagination, Row } from "antd";

const data = [
  {
    key: 1,
    user_detail: "sup1 (SA152471)",
    Balance: "18.99",
  },
  {
    key: 2,
    user_detail: "sup2 (SA154400)",
    Balance: "37.6",
  },
  {
    key: 3,
    user_detail: "super2 (SA154549)",
    Balance: "106.8",
  },
  {
    key: 4,
    user_detail: "AnkitTest (SA155948)",
    Balance: "12.6",
  },
];

const ClientLedger = () => {
  const handleBackbtn = () => {
    console.log("heloo");
  };

  return (
    <>
      <Card
        className="sport_detail ledger_data"
        title="Client Ledger"
        extra={<button onClick={handleBackbtn}>Back</button>}>
        <Row className="main_super_super_ledger">
          <Col span={8}>
            <div className="super_ledger item1">
              <div>Lena</div>
              <div>175.99</div>
            </div>
            <div>
              <div className="table_section">
                <table className="">
                  <tr>
                    <th>User Detail</th>
                    <th>Balance</th>
                  </tr>
                  {data?.map((res) => {
                    return (
                      <tr key={res?.key}>
                        <td>{res?.user_detail}</td>
                        <td>{res?.Balance}</td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className="super_ledger item2">
              <div>Dena</div>
              <div>280.59</div>
            </div>
            <div>
              <div className="table_section">
                <table className="">
                  <tr>
                    <th>User Detail</th>
                    <th>Balance</th>
                  </tr>
                  {data?.map((res) => {
                    return (
                      <tr key={res?.key}>
                        <td>{res?.user_detail}</td>
                        <td>{res?.Balance}</td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className="super_ledger item3">
              <div>Clear</div>
              <div>0</div>
            </div>
            <div>
              <div className="table_section">
                <table className="">
                  <tr>
                    <th>User Detail</th>
                    <th>Balance</th>
                  </tr>
                  {data?.map((res) => {
                    return (
                      <tr key={res?.key}>
                        <td>{res?.user_detail}</td>
                        <td>{res?.Balance}</td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            </div>
          </Col>
        </Row>

        <Divider />

        <Pagination
          className="pagination_main ledger_pagination"
          defaultCurrent={1}
          total={50}
        />
      </Card>
    </>
  );
};

export default ClientLedger;
