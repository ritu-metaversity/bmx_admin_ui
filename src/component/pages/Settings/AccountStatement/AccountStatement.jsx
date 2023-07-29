import "./AccountStatement.scss";
import { Card, Tabs,  DatePicker} from "antd";
import { useNavigate } from "react-router-dom";
import AllStatement from "./AllStatement/AllStatement";
import moment from "moment";
import {React, useMemo, useState } from "react";
// import AllData from "./All/AllData";
// import ProfitLoss from "./P&L/ProfitLoss";
// import PDC from "./pdc/PDC";
// import Comm from "./Comm/Comm";
// import Account from "./Account/Account";

// const handleChange = (value) => {
//   console.log(`selected ${value}`);
// };

const { RangePicker } = DatePicker;



const AccountStatement = () => {

  const timeBefore = moment().subtract(14, "days").format("YYYY-MM-DD");
  const time = moment().format("YYYY-MM-DD");
  const [dateData, setDateData] = useState([timeBefore,time])
  // const [gameType, setGameType] = useState("")

  const nav = useNavigate();
  const handleBackClick = () => {
    nav("/Events/sports-details");
  };
  const onChange = (date,dateString) => {
    setDateData(dateString);
  };
  const items = useMemo(()=>[
    {
      key: "1",
      label: `All`,
      children: <AllStatement gameType={1} dateData={dateData}/>,
    },
    {
      key: "2",
      label: `P&L`,
      children: <AllStatement gameType={1} dateData={dateData}/>,
    },
    {
      key: "3",
      label: `PDC`,
      children: <AllStatement gameType={1} dateData={dateData}/>,
      type:1,
    },
    {
      key: "4",
      label: `Comm.`,
      children: <AllStatement gameType={1} dateData={dateData}/>,
      type:1,
    },
    {
      key: "5",
      label: `Account`,
      children: <AllStatement gameType={1} dateData={dateData}/>,
      type:1,
    },
  ], [dateData])

  return (
    <>
      <div className="match_slip">
        <div>
          <Card
            style={{
              margin: "0px",
              width: "100%",
            }}
            className="sport_detail pnl"
            title="Transactions ( 54 )"
            extra={<button onClick={handleBackClick}>Back</button>}>
            <div className="main_acc_section">
              <div className="datepicker">
                <RangePicker  onChange={onChange}/>
              </div>
              <div className="tab_section transtion_tab">
                <Tabs destroyInactiveTabPane  type="card" items={items} />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AccountStatement;
