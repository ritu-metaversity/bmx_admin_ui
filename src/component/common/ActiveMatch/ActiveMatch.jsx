import { Card, Empty, Pagination, Spin } from "antd";
import React from "react";
import { useActiveMatchQuery } from "../../../store/service/ActiveMatcheService";
import "./ActiveMatch.scss";
import { useNavigate } from "react-router-dom";

const ActiveMatch = () => {
  const { data, isLoading } = useActiveMatchQuery();
  const nav = useNavigate();

  const handleDetails = (id) => {
    nav(`/Events/${id}/live-report`);
  };

  return (
    <div className="active_slip login_report">
      <Card
        style={{
          margin: "0px",
          width: "100%",
        }}
        className="sport_detail active_match_name"
        title="Active Matches">
        {isLoading ? (
          <Spin className="loading_active" tip="Loading..." size="large">
            <div className="content" />
          </Spin>
        ) : (
          <div className="table_section statement_tabs_data">
            <table className="">
              <tr>
                <th>S/N</th>
                <th>Name</th>
                <th>Open Date</th>
                <th>Competition</th>
                <th>Inplay</th>
                <th>Details</th>
              </tr>
              {data?.data?.map((res, id) => {
                return (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{res?.matchName}</td>
                    <td>{res?.openDate}</td>
                    <td>??</td>
                    <td>
                      {res?.inPlay && (
                        <button className="inplay">INPLAY</button>
                      )}
                    </td>
                    <td>
                      <p
                        style={{ cursor: "pointer" }}
                        onClick={() => handleDetails(res?.matchId)}>
                        Details
                      </p>
                    </td>
                  </tr>
                );
              })}
            </table>
            {data?.length == 0 ? (
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            ) : (
              ""
            )}
          </div>
        )}
      </Card>
    </div>
  );
};

export default ActiveMatch;
