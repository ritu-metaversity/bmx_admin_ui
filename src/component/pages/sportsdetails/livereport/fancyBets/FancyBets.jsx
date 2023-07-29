import { Card } from "antd";
import React from "react";

const FancyBets = ({ setShowFancyBets }) => {
  return (
    <>
      <Card
        style={{
          margin: "0px",
          width: "100%",
        }}
        className="sport_detail completed_fancy"
        title="Fancy Bets - [ 0 ]"
        extra={
          <button onClick={() => setShowFancyBets(false)}>Match Bets</button>
        }>
        <div className="table_section">
          <table className="">
            <tr>
              <th>Rate</th>
              <th>Volume</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Team</th>
              <th>Client</th>
              <th>Agent</th>
              <th>Date</th>
              <th>Loss</th>
              <th>Profit</th>
            </tr>

            <tr>
              <td>48</td>
              <td className="text_success">100</td>
              <td>1000.00</td>
              <td className="text_danger">No</td>
              <td>6 over runs MNY(MNY vs SEO)adv</td>
              <td>C154403 client2</td>
              <td>A154401</td>
              <td>25 Jul 12:45:22 PM</td>
              <td>1000.00</td>
              <td>1000.00</td>
            </tr>

            <tr>
              <td style={{ fontSize: "20px", padding:"12px" }} colSpan={10}>
                No Bets available on this session
              </td>
            </tr>
          </table>
        </div>
      </Card>
      <br />
      <br />
    </>
  );
};

export default FancyBets;
