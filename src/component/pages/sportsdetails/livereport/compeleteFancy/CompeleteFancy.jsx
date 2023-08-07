import { Card, Empty, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setData } from "../../../../../store/global/slice";
import { useCompleteFancyQuery } from "../../../../../store/service/compeleteFancyServices";

const CompeleteFancy = () => {
  const [marketId, setMarketId] = useState("");
  const [completeFancy, setCompleteFancy] = useState([]);

  const dispatch = useDispatch();
  const nav = useNavigate();

  const { id } = useParams();

  const {
    data: completeFancyData,
    isLoading,
    isFetching,
  } = useCompleteFancyQuery({
    matchid: Number(id),
  });
  useEffect(() => {
    setCompleteFancy(completeFancyData?.data);
  }, [completeFancyData]);

  const handleShowBets = (val) => {
    setMarketId(val);
    dispatch(setData(val));
    nav(`/Events/${id}/pl/live-report`);
  };

  console.log(completeFancy?.length, "sdfsdfd");

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
          extra={<button>Refresh</button>}>
          <div className="table_section ant-spin-nested-loading">
            
            <table className="">
              <tr>
                <th>Title</th>
                <th>P&L</th>
                <th>Won By</th>
                <th>Net P&L</th>
                <th>Action</th>
              </tr>
              {isLoading || isFetching ? (
                <div className="spin_icon comp_spin">
                  <Spin size="large" />
                </div>
              ) : (
                ""
              )}
              {completeFancy?.map((res) => {
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
                  {completeFancy?.length == undefined && (
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
