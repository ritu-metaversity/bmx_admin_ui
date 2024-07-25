import { Card, Empty } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";

const DeletedLenden = () => {
  const nav = useNavigate();
  const handleBackbtn = () => {
    nav(-1);
  };

  const { id } = useParams();

  const data = [];

  return (
    <>
      <Card
        className="sport_detail ledger_data"
        title="Deleted Lenden"
        extra={<button onClick={handleBackbtn}>Back</button>}>
        <div className="table_section" style={{ paddingBottom: "20px" }}>
          <table className="">
            <tr>
              <th>Date</th>
              <th>Post Date</th>
              <th>Collection Name </th>
              <th className="text-right">Debit</th>
              <th className="text-right">Credit</th>
              <th className="text-right">Balance</th>
              <th>Payment Type</th>
              <th>Remark</th>
              <th>Done By</th>
              <th>Deleted By</th>
            </tr>
            {data?.map((res) => {
              return (
                <tr key={res?.key}>
                  <td>{moment(res?.date).format("YYYY-MM-DD, h:mm a")}</td>
                  <td>{moment(res?.date).format("YYYY-MM-DD, h:mm a")}</td>
                  <td>{res?.collectionName}</td>
                  <td className="text-right">{res?.debit}</td>
                  <td className="text-right">{res?.credit}</td>
                  <td className="text-right">{res?.balance}</td>
                  <td>{res?.paymentType}</td>
                  <td>{res?.remarks}</td>
                  <td>{res?.doneBy}</td>
                  <td>{res?.deletedBy}</td>
                </tr>
              );
            })}
            {data?.length === 0 && (
              <tr>
                <td colSpan={10}>
                  <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                </td>
              </tr>
            )}
          </table>
        </div>
      </Card>
    </>
  );
};

export default DeletedLenden;
