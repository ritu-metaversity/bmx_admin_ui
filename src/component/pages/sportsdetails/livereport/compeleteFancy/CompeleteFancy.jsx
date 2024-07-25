import { Card, Empty } from "antd";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const CompeleteFancy = () => {
  const { pathname } = useLocation();

  const nav = useNavigate();

  const { id } = useParams();
  const handleShowBets = (val) => {
    nav(`/Events/${id}/pl/live-report`, { state: { id: val } });
  };
  const completeFancyData = [];
  return (
    <>
      <div>
        <Card
          style={{
            margin: "12px",
            width: "100%",
          }}
          className="sport_detail completed_fancy"
          title="Completed fancy"
          extra={
            <div>
              <button>Refresh</button>
              {pathname?.includes("completed-fancy-slips") && (
                <button style={{ marginLeft: "10px" }} onClick={() => nav(-1)}>
                  Back
                </button>
              )}
            </div>
          }>
          <div className="table_section ant-spin-nested-loading">
            <table className="">
              <tr>
                <th>Title</th>
                <th>P&L</th>
                <th>Won By</th>
                <th>Net P&L</th>
                <th>Action</th>
              </tr>

              {(completeFancyData.length != null ||
                completeFancyData.length == 0) && (
                <tr>
                  <td>Total</td>
                  <td className="text_success">0</td>
                  <td></td>
                  <td className="text_success">0</td>
                  <td></td>
                </tr>
              )}

              {completeFancyData?.map((res) => {
                return (
                  <tr key={res?.key}>
                    <td>{res?.selectionname}</td>
                    <td
                      className={`${
                        res?.pnl < 0 ? "text_danger" : "text_success"
                      }`}>
                      {res?.pnl}
                    </td>
                    <td>{res?.result}</td>
                    <td
                      className={`${
                        res?.pnl < 0 ? "text_danger" : "text_success"
                      }`}>
                      {res?.netpnl}
                    </td>
                    <td>
                      <button
                        className="show_bets"
                        onClick={() => handleShowBets(res?._id)}>
                        Show Bets
                      </button>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={5}>
                  {completeFancyData?.data?.list?.length == undefined && (
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                  )}
                </td>
              </tr>
            </table>
          </div>
        </Card>
      </div>
    </>
  );
};

export default CompeleteFancy;
