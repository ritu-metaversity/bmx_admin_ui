import { React, useState } from "react";
// import { Divider, Radio, Table } from "antd";
import "./PlusMinusDetails.scss";
import { Checkbox, Col, Row, Table } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { globalSelector } from "../../../../../store/global/slice";
import PlusMinusTable from "./PlusMinusTable";

const PlusMinusDetails = () => {
  const handleBackClick = () => {};

  const sportName = useSelector(globalSelector);

  return (
    <>
      <div className="main_live_section">
        <div className="_match">
          <div className="sub_live_section live_report">
            <div
              style={{ padding: "5px 8px", fontSize: "22px" }}
              className="team_name">
              {sportName?.data}
            </div>
            <div className="show_btn">
              <button>Show</button>
              <button onClick={handleBackClick}>Back</button>
            </div>
          </div>
          <div className="main_table_section">
          <PlusMinusTable/>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlusMinusDetails;
