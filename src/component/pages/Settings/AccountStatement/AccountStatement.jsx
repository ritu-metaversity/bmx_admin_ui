import "./AccountStatement.scss";
import { Card, Tabs, DatePicker } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import AllStatement from "./AllStatement/AllStatement";
import moment from "moment";
import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { globalSelector } from "../../../../store/global/slice";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;

const AccountStatement = () => {
  const timeBefore = moment().subtract(14, "days").format("YYYY-MM-DD");
  const time = moment().format("YYYY-MM-DD");
  const [dateData, setDateData] = useState([timeBefore, time]);

  const { id } = useParams();

  const nav = useNavigate();
  const handleBackClick = () => {
    nav(-1);
  };
  const onChange = (date, dateString) => {
    setDateData(dateString);
  };
  const items = useMemo(
    () => [
      {
        key: "1",
        label: `All`,
        children: <AllStatement gameType={1} dateData={dateData} />,
      },
      {
        key: "2",
        label: `P&L`,
        children: <AllStatement gameType={1} dateData={dateData} />,
      },
      {
        key: "3",
        label: `PDC`,
        children: <AllStatement gameType={1} dateData={dateData} />,
        type: 1,
      },
      {
        key: "4",
        label: `Comm.`,
        children: <AllStatement gameType={1} dateData={dateData} />,
        type: 1,
      },
      {
        key: "5",
        label: `Account`,
        children: <AllStatement gameType={1} dateData={dateData} />,
        type: 1,
      },
    ],
    [dateData]
  );

  const data = useSelector(globalSelector);

  
  const pName = window.location.pathname
  console.log(pName, "dfsafdf")

  return (
    <>
      <div  className={pName == "/markets"?"":"match_slip"}>
        <div>
          <Card
            style={{
              margin: "0px",
              width: "100%",
            }}
            className="sport_detail "
            title={`Transactions (${
              data?.data === undefined ? 0 : data?.data
            })`}
            extra={<button onClick={handleBackClick}>Back</button>}>
            <div className="main_acc_section">
              <div className="datepicker">
                <RangePicker
                  defaultValue={[dayjs(timeBefore), dayjs(time)]}
                  style={{ marginBottom: "12px" }}
                  onChange={onChange}
                />
              </div>
              <div className="tab_section transtion_tab">
                <Tabs destroyInactiveTabPane type="card" items={items} />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AccountStatement;
