import "./Statement.scss";
import { Card, Tabs, DatePicker} from "antd";
import { useNavigate } from "react-router-dom";
import AllData from "./All/AllData";
import ProfitLoss from "./P&L/ProfitLoss";
import PDC from "./pdc/PDC";
import Comm from "./Comm/Comm";
import Account from "./Account/Account";
import React, { useMemo, useState } from "react";
import moment from "moment";

// const handleChange = (value) => {
//   console.log(`selected ${value}`);
// };

const { RangePicker } = DatePicker;



const Statement = () => {
  const timeBefore = moment().subtract(14, "days").format("YYYY-MM-DD");
  const time = moment().format("YYYY-MM-DD");
  const [dateData, setDateData] = useState([timeBefore,time])
  const nav = useNavigate();
  const handleBackClick = () => {
    nav("/Events/sports-details");
  };

  const onChange = (e,date,dateString) => {
    setDateData(dateString);

  };


  const items = useMemo(()=>[
    {
      key: "1",
      label: `All`,
      children: <AllData dateData={dateData}/>,
    },
    {
      key: "2",
      label: `P&L`,
      children: <AllData dateData={dateData}/>,
    },
    {
      key: "3",
      label: `PDC`,
      children: <AllData dateData={dateData}/>,
    },
    {
      key: "4",
      label: `Comm.`,
      children: <AllData dateData={dateData}/>,
    },
    {
      key: "5",
      label: `Account`,
      children: <AllData dateData={dateData}/>,
    },
  ],[dateData]);

  return (
    <>
      <div className="match_slip">
        <div>
          <Card
            style={{
              margin: "0px",
              width: "100%",
            }}
            className="sport_detail acc_name"
            title="List Of All Transactions ( 9 )"
            extra={<button onClick={handleBackClick}>Back</button>}>
            <div className="">
              <RangePicker onChange={onChange}/>
            </div>
            <div className="tab_section">
              <Tabs onChange={onChange}  type="card" items={items} />
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Statement;
