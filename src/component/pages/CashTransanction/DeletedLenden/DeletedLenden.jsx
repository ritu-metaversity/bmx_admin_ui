import {
    Card, Empty,
  } from "antd";
  import React from "react";
import { useFetchDeleteTransectionQuery } from "../../../../store/service/transactionServices";
import { useParams } from "react-router-dom";
import moment from "moment";

  
  const DeletedLenden = () => {

    const handleBackbtn = ()=>{

    }

    const {id} = useParams()

  const {data, isError} =useFetchDeleteTransectionQuery({
    userId:id
  }, {refetchOnMountOrArgChange:true});


  // console.log(data?.data, "fetchDeletedUser");


    

    return (
      <>
        <Card
          className="sport_detail ledger_data"
          title="Deleted Lenden"
          extra={<button onClick={handleBackbtn}>Back</button>}>
           <div className="table_section" style={{paddingBottom: "20px"}}>
        <table className="">
          <tr>
            <th>Date</th>
            <th>Post Date</th>
            <th>Collection Name </th>
            <th className="text-right">Debit</th>
            <th className="text-right">Credit</th>
            <th>Payment Type</th>
            <th>Remark</th>
            <th>Done By</th>
            <th>Deleted By</th>
          </tr>
          {data?.data?.map((res) => {
            console.log(res, "dsdsadas")
            return (
              <tr key={res?.key}>
                <td>{moment(res?.date).format("DD-MM-YYYY, h:mm a")}</td>
                <td>{moment(res?.date).format("DD-MM-YYYY, h:mm a")}</td>
                <td>{res?.collectionName}</td>
                <td className="text-right">{res?.debit}</td>
                <td className="text-right">{res?.credit}</td>
                <td className="text-right">{res?.balance}</td>
                <td>{res?.paymentType}</td>
                <td>{res?.remarks}</td>
                <td>{res?.parentId}</td>
              </tr>
            );
          })}
          <tr>
            <td colSpan={9}>
                {isError && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
        

            </td>
          </tr>
        </table>
      </div>
        </Card>
  
      </>
    );
  };
  
  export default DeletedLenden;
  