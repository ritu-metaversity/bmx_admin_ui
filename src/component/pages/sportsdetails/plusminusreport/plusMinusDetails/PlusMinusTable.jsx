import React from "react";

const PlusMinusTable = () => {
  return (
    <>
      <table className="plus-table">
        <tbody>
          <tr className="master_color">
            <td>&nbsp;</td>
            <td>MASTER </td>
            <td colSpan={30}>
              <strong>MA14106 - jbl</strong>
            </td>
          </tr>
          <tr className="super_color">
            <td colSpan={3}>&nbsp;</td> <td>SUPER </td>
            <td colSpan={28}>
              <strong>SA154548 - super1</strong>
            </td>
          </tr>
          <tr className="agent_color">
            <td colSpan={4}>&nbsp;</td>
            <td>AGENT </td>
            <td colSpan={27}>
              <strong>A154552 - power1</strong>
            </td>
          </tr>
          <tr style={{ textAlign: "center", color: "#545454" }}>
            <td> &nbsp; </td>
            <th className="sub_agent_heading" colSpan={10}>
              AGENT PLUS MINUS
            </th>
            <th className="sub_agent_heading" colSpan={7}>
              SUPER PLUS MINUS
            </th>
            <th className="sub_agent_heading" colSpan={7}>
              MASTER PLUS MINUS
            </th>
          </tr>
          <tr style={{ textAlign: "center" }} className="border_tr">
            <td>
              <strong>CLIENT</strong>
            </td>
            <td>
              <strong>M AMT</strong>
            </td>
            <td>
              <strong>SESS.</strong>
            </td>
            <td>
              <strong>TOT. AMT</strong>
            </td>
            <td>
              <strong>M. COM</strong>
            </td>
            <td>
              <strong>S. COM</strong>
            </td>
            <td>
              <strong>TOL. COM</strong>
            </td>
            <td>
              <strong>NET AMT</strong>
            </td>
            <td>
              <strong>SHR AMT</strong>
            </td>
            <td>
              <strong>MOB. APP</strong>
            </td>
            <td
              style={{
                borderRightWidth: 2,
                borderRightColor: "rgb(174, 174, 174)",
              }}>
              <strong>FINAL</strong>
            </td>
            <td>
              <strong>M. COM</strong>
            </td>
            <td>
              <strong>S. COM</strong>
            </td>
            <td>
              <strong>TOL. COM</strong>
            </td>
            <td>
              <strong>NET AMT</strong>
            </td>
            <td>
              <strong>SHR AMT</strong>
            </td>
            <td>
              <strong>MOB. APP</strong>
            </td>
            <td
              style={{
                borderRightWidth: 2,
                borderRightColor: "rgb(174, 174, 174)",
              }}>
              <strong>FINAL</strong>
            </td>
            <td>
              <strong>M. COM</strong>
            </td>
            <td>
              <strong>S. COM</strong>
            </td>
            <td>
              <strong>TOL. COM</strong>
            </td>
            <td>
              <strong>NET AMT</strong>
            </td>
            <td>
              <strong>SHR AMT</strong>
            </td>
            <td>
              <strong>MOB. APP</strong>
            </td>
            <td
              style={{
                borderRightWidth: 2,
                borderRightColor: "rgb(174, 174, 174)",
              }}>
              <strong>FINAL</strong>
            </td>
          </tr>
          <tr className="border_tr">
            <td>
              <strong>C154555-client1</strong>
            </td>
            <td>0.00</td>
            <td>100.00</td>
            <td>
              <strong>100.00</strong>
            </td>
            <td>0.00</td>
            <td>1.90</td>
            <td>
              <strong>1.90</strong>
            </td>
            <td>98.10</td>
            <td>9.81</td>
            <td>0.00</td>
            <td
              style={{
                borderRightWidth: 2,
                borderRightColor: "rgb(174, 174, 174)",
              }}>
              <strong>88.29</strong>
            </td>
            <td>0.00</td>
            <td>1.90</td>
            <td>
              <strong>1.90</strong>
            </td>
            <td>98.10</td>
            <td>9.81</td>
            <td>0.00</td>
            <td
              style={{
                borderRightWidth: 2,
                borderRightColor: "rgb(174, 174, 174)",
              }}>
              <strong>88.29</strong>
            </td>
            <td>0.00</td>
            <td>3.00</td>
            <td>
              <strong>3.00</strong>
            </td>
            <td>97.00</td>
            <td>91.18</td>
            <td>0.00</td>
            <td
              style={{
                borderRightWidth: 2,
                borderRightColor: "rgb(174, 174, 174)",
              }}>
              <strong>5.82 </strong>
            </td>
          </tr>
          <tr className="border_tr">
            <td>&nbsp;</td>
          </tr>
          <tr className="border_tr">
            <td>
              <strong>Ag.TOTAL</strong>
            </td>
            <td>0.00</td>
            <td>100.00</td>
            <td>100.00</td>
            <td>0.00</td>
            <td>1.90</td>
            <td>1.90</td>
            <td>98.10</td>
            <td>9.81</td>
            <td>0.00</td>
            <td
              style={{
                borderRightWidth: 2,
                borderRightColor: "rgb(174, 174, 174)",
              }}>
              88.29
            </td>
            <td>0.00</td>
            <td>1.90</td>
            <td>1.90</td>
            <td>98.10</td>
            <td>9.81</td>
            <td>0.00</td>
            <td
              style={{
                borderRightWidth: 2,
                borderRightColor: "rgb(174, 174, 174)",
              }}>
              88.29
            </td>
            <td>0.00</td>
            <td>3.00</td>
            <td>3.00</td>
            <td>97.00</td>
            <td>91.18</td>
            <td>0.00</td>
            <td
              style={{
                borderRightWidth: 2,
                borderRightColor: "rgb(174, 174, 174)",
              }}>
              5.82
            </td>
          </tr>
          <tr className="border_tr">
            <td>&nbsp;</td>
          </tr>
          <tr className="border_tr">
            <td>
              <strong>SAg.TOTAL</strong>
            </td>
            <td>0.00</td>
            <td>100.00</td>
            <td>100.00</td>
            <td>0.00</td>
            <td>1.90</td>
            <td>1.90</td>
            <td>98.10</td>
            <td>9.81</td>
            <td>0.00</td>
            <td
              style={{
                borderRightWidth: 2,
                borderRightColor: "rgb(174, 174, 174)",
              }}>
              88.29
            </td>
            <td>0.00</td>
            <td>1.90</td>
            <td>1.90</td>
            <td>98.10</td>
            <td>9.81</td>
            <td>0.00</td>
            <td
              style={{
                borderRightWidth: 2,
                borderRightColor: "rgb(174, 174, 174)",
              }}>
              88.29
            </td>
            <td>0.00</td>
            <td>3.00</td>
            <td>3.00</td>
            <td>97.00</td>
            <td>91.18</td>
            <td>0.00</td>
            <td
              style={{
                borderRightWidth: 2,
                borderRightColor: "rgb(174, 174, 174)",
              }}>
              5.82
            </td>
          </tr>
          <tr className="border_tr">
            <td>&nbsp;</td>
          </tr>
          <tr className="border_tr">
            <td>
              <strong>Ms.TOTAL</strong>
            </td>
            <td>0.00</td>
            <td>100.00</td>
            <td>100.00</td>
            <td>0.00</td>
            <td>1.90</td>
            <td>1.90</td>
            <td>98.10</td>
            <td>9.81</td>
            <td>0.00</td>
            <td
              style={{
                borderRightWidth: 2,
                borderRightColor: "rgb(174, 174, 174)",
              }}>
              88.29
            </td>
            <td>0.00</td>
            <td>1.90</td>
            <td>1.90</td>
            <td>98.10</td>
            <td>9.81</td>
            <td>0.00</td>
            <td
              style={{
                borderRightWidth: 2,
                borderRightColor: "rgb(174, 174, 174)",
              }}>
              88.29
            </td>
            <td>0.00</td>
            <td>3.00</td>
            <td>3.00</td>
            <td>97.00</td>
            <td>91.18</td>
            <td>0.00</td>
            <td
              style={{
                borderRightWidth: 2,
                borderRightColor: "rgb(174, 174, 174)",
              }}>
              5.82
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default PlusMinusTable;
