import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./RoulettePlusMinus.scss";
import { useEffect, useState } from "react";


const RoulettePlusMinus = () => {
  const nav = useNavigate();
  const handleBackClick = () => {
    nav(-1);
  };

  const data ={}

 
  const { state } = useLocation();
  const { id } = useParams();



  const uType = 5;

  return (
    <>
      <div className="main_live_section list_supers">
        <div className="_match">
          <div className="sub_live_section live_report">
            <div
              style={{ padding: "5px 8px", fontSize: "22px" }}
              className="team_name">
              <p>{`${
                uType == 5
                  ? "Sub Admin "
                  : uType == 0
                  ? "Super Master "
                  : uType == 1
                  ? "Master "
                  : uType == 2
                  ? "Agent "
                  : ""
              } Company Report`}</p>
              <p style={{ fontSize: "16px" }}>
                {`${state?.isAuraDetails} ${state?.rouletteDate}`}{" "}
              </p>
            </div>
            <div className="show_btn">
              <button onClick={handleBackClick}>Back</button>
            </div>
          </div>
        </div>
        <div>
          <div className="table_section" style={{overflowX:"auto", position:"relative"}}>
            {/* <Table
              className="live_table roulette_table"
              bordered
              columns={columns}
              loading={isFetching || isLoading}
              dataSource={plusMinusData}
              rowClassName={(record) => {
                return record?.userId == "Total" ? "dateHiglight" : "";
              }}
              // pagination={false}
            /> */}

            
              <table className="plus-table plus_minus_sec">
                <tbody>
                  {
                    Object.keys(data).map((item, id) => (
                      <RecursiveTable
                        key={id}
                        data={data[item]}
                        title={item}
                      />
                    ))}
                </tbody>
              </table>
              {/* {isLoading && (
                <div className="plus_spin">
                  <Spin size="large" />
                </div>
              )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default RoulettePlusMinus;

const RecursiveTable = ({ data, title }) => {
  const [arrayState, setArrayState] = useState([]);

  const uType = localStorage.getItem("userType");
  useEffect(() => {
    let returnArr = [];

    if (data?.groupName === "subadmin") {
      returnArr.push(
        <tr className="sub_color">
          <td>&nbsp;</td>
          <td style={{ whiteSpace: "nowrap" }}>Sub Admin </td>
          <td colSpan={34}>
            <strong>{title}</strong>
          </td>
        </tr>
      );
    } else if (data?.groupName === "supermaster") {
      returnArr.push(
        <tr className="master_color">
          <td colSpan={2}>&nbsp;</td>
          <td style={{ whiteSpace: "nowrap" }}>SUPER Master </td>
          <td colSpan={32}>
            <strong>{title}</strong>
          </td>
        </tr>
      );
    } else if (data?.groupName === "master") {
      returnArr.push(
        <tr className="super_color">
          <td colSpan={3}>&nbsp;</td> <td>MASTER </td>
          <td colSpan={31}>
            <strong>{title}</strong>
          </td>
        </tr>
      );
    } else if (data?.groupName === "agent") {
      returnArr.push(
        <tr className="agent_color">
          <td colSpan={4}>&nbsp;</td> <td>Agent </td>
          <td colSpan={29}>
            <strong>{title}</strong>
          </td>
        </tr>
      );
    }
    if (data) {
      Object.keys(data).forEach((item) => {
        if (!["groupName", "total", "users"].includes(item)) {
          returnArr = [
            ...returnArr,
            <RecursiveTable data={data[item]} title={item} />,
          ];
        } else if (item === "users") {
          const clientRows = Object.keys(data[item]).map((userKey) => (
            <>
              <tr className="border_tr">
                <td>
                  <strong>{userKey}</strong>
                </td>
                {/* <td
                  className={
                    uType == 5 || uType == 0 || uType == 1 || uType == 2
                      ? ""
                      : "d_none"
                  }>
                  {data[item][userKey].matchAmount?.toFixed(2)}
                </td>
                <td
                  className={
                    uType == 5 || uType == 0 || uType == 1 || uType == 2
                      ? ""
                      : "d_none"
                  }>
                  {data[item][userKey].sessionAmount?.toFixed(2)}
                </td> */}
                <td
                  style={{
                    borderRightWidth: 2,
                    borderRightColor: "rgb(174, 174, 174)",
                  }}
                  className={
                    uType == 5 || uType == 0 || uType == 1 || uType == 2
                      ? ""
                      : "d_none"
                  }>
                  <strong>{data[item][userKey].totalAmount?.toFixed(2)}</strong>
                </td>

                {/* <td
                  className={
                    uType == 5 || uType == 0 || uType == 1 || uType == 2
                      ? ""
                      : "d_none"
                  }>
                  {data[item][userKey]?.matchComm?.toFixed(2)}
                </td> */}
                {/* <td
                  className={
                    uType == 5 || uType == 0 || uType == 1 || uType == 2
                      ? ""
                      : "d_none"
                  }>
                  {data[item][userKey]?.sessionComm?.toFixed(2)}
                </td> */}

                <td
                  style={{
                    borderRightWidth: 2,
                    borderRightColor: "rgb(174, 174, 174)",
                  }}
                  className={
                    uType == 5 || uType == 0 || uType == 1 || uType == 2
                      ? ""
                      : "d_none"
                  }>
                  {data[item][userKey]?.totalComm?.toFixed(2)}
                </td>

                {/* <td
                  className={
                    uType == 5 || uType == 0 || uType == 1 || uType == 2
                      ? ""
                      : "d_none"
                  }>
                  {data[item][userKey]?.dealer?.matchComm?.toFixed(2)}
                </td> */}
                {/* <td
                  className={
                    uType == 5 || uType == 0 || uType == 1 || uType == 2
                      ? ""
                      : "d_none"
                  }>
                  {data[item][userKey]?.dealer?.sessionComm?.toFixed(2)}
                </td> */}
                <td
                  className={
                    uType == 5 || uType == 0 || uType == 1 || uType == 2
                      ? ""
                      : "d_none"
                  }>
                  <strong>
                    {data[item][userKey]?.dealer?.totalComm?.toFixed(2)}
                  </strong>
                </td>
                <td
                  className={
                    uType == 5 || uType == 0 || uType == 1 || uType == 2
                      ? ""
                      : "d_none"
                  }>
                  {data[item][userKey]?.dealer?.netAmount?.toFixed(2)}
                </td>
                <td
                  className={
                    uType == 5 || uType == 0 || uType == 1 || uType == 2
                      ? ""
                      : "d_none"
                  }>
                  {data[item][userKey]?.dealer?.shareAmount?.toFixed(2)}
                </td>
                <td
                  className={
                    uType == 5 || uType == 0 || uType == 1 || uType == 2
                      ? ""
                      : "d_none"
                  }
                  style={{
                    borderRightWidth: 2,
                    borderRightColor: "rgb(174, 174, 174)",
                  }}>
                  <strong>
                    {data[item][userKey]?.dealer?.finalAmount?.toFixed(2)}
                  </strong>
                </td>
                {/* <td
                  className={
                    uType == 5 || uType == 0 || uType == 1 ? "" : "d_none"
                  }>
                  {data[item][userKey]?.master?.matchComm?.toFixed(2)}
                </td> */}
                {/* <td
                  className={
                    uType == 5 || uType == 0 || uType == 1 ? "" : "d_none"
                  }>
                  {data[item][userKey]?.master?.sessionComm?.toFixed(2)}
                </td> */}
                <td
                  className={
                    uType == 5 || uType == 0 || uType == 1 ? "" : "d_none"
                  }>
                  <strong>
                    {data[item][userKey]?.master?.totalComm?.toFixed(2)}
                  </strong>
                </td>
                <td
                  className={
                    uType == 5 || uType == 0 || uType == 1 ? "" : "d_none"
                  }>
                  {data[item][userKey]?.master?.netAmount?.toFixed(2)}
                </td>
                <td
                  className={
                    uType == 5 || uType == 0 || uType == 1 ? "" : "d_none"
                  }>
                  {data[item][userKey]?.master?.shareAmount?.toFixed(2)}
                </td>
                <td
                  className={
                    uType == 5 || uType == 0 || uType == 1 ? "" : "d_none"
                  }
                  style={{
                    borderRightWidth: 2,
                    borderRightColor: "rgb(174, 174, 174)",
                  }}>
                  <strong>
                    {data[item][userKey]?.master?.finalAmount?.toFixed(2)}
                  </strong>
                </td>
                {/* <td className={uType == 5 || uType == 0 ? "" : "d_none"}>
                  {data[item][userKey]?.superMaster?.matchComm?.toFixed(2)}
                </td> */}
                {/* <td className={uType == 5 || uType == 0 ? "" : "d_none"}>
                  {data[item][userKey]?.superMaster?.sessionComm?.toFixed(2)}
                </td> */}
                <td className={uType == 5 || uType == 0 ? "" : "d_none"}>
                  <strong>
                    {data[item][userKey]?.superMaster?.totalComm?.toFixed(2)}
                  </strong>
                </td>
                <td className={uType == 5 || uType == 0 ? "" : "d_none"}>
                  {data[item][userKey]?.superMaster?.netAmount?.toFixed(2)}
                </td>
                <td className={uType == 5 || uType == 0 ? "" : "d_none"}>
                  {data[item][userKey]?.superMaster?.shareAmount?.toFixed(2)}
                </td>
                <td
                  className={uType == 5 || uType == 0 ? "" : "d_none"}
                  style={{
                    borderRightWidth: 2,
                    borderRightColor: "rgb(174, 174, 174)",
                  }}>
                  <strong>
                    {data[item][userKey]?.superMaster?.finalAmount?.toFixed(2)}
                  </strong>
                </td>
                {/* <td className={uType != 5 ? "d_none" : ""}>
                  {data[item][userKey]?.subAdmin?.matchComm?.toFixed(2)}
                </td> */}
                {/* <td className={uType != 5 ? "d_none" : ""}>
                  {data[item][userKey]?.subAdmin?.sessionComm?.toFixed(2)}
                </td> */}
                <td className={uType != 5 ? "d_none" : ""}>
                  <strong>
                    {data[item][userKey]?.subAdmin?.totalComm?.toFixed(2)}
                  </strong>
                </td>
                <td className={uType != 5 ? "d_none" : ""}>
                  {data[item][userKey]?.subAdmin?.netAmount?.toFixed(2)}
                </td>
                <td className={uType != 5 ? "d_none" : ""}>
                  {data[item][userKey]?.subAdmin?.shareAmount?.toFixed(2)}
                </td>
                <td
                  className={uType != 5 ? "d_none" : ""}
                  style={{
                    borderRightWidth: 2,
                    borderRightColor: "rgb(174, 174, 174)",
                  }}>
                  <strong>
                    {data[item][userKey]?.subAdmin?.finalAmount?.toFixed(2)}
                  </strong>
                </td>
              </tr>
            </>
          ));
          const dynamicHeader = (
            <tr style={{ textAlign: "center", color: "#545454" }}>
              <th
                colSpan={2}
                className={
                  data?.groupName === "agent"
                    ? "agentBackgroundColor"
                    : data?.groupName === "master"
                    ? "masterBackgroundColor"
                    : data?.groupName === "supermaster"
                    ? "superBackgroundColor"
                    : data?.groupName === "subadmin"
                    ? "subBackgroundColor"
                    : ""
                }>
                {" "}
                {title}
              </th>
              <th
                className={`sub_agent_heading ${
                  uType == 0 || uType == 1 || uType == 2 || uType == 5
                    ? ""
                    : "d_none"
                }`}
                >
                CLIENT PLUS MINUS
              </th>
              <th
                className={`sub_agent_heading ${
                  uType == 0 || uType == 1 || uType == 2 || uType == 5
                    ? ""
                    : "d_none"
                }`}
                colSpan={4}>
                AGENT PLUS MINUS
              </th>
              <th
                className={`sub_agent_heading ${
                  uType == 0 || uType == 1 || uType == 5 ? "" : "d_none"
                }`}
                colSpan={4}>
                MASTER PLUS MINUS
              </th>
              <th
                className={`sub_agent_heading ${
                  uType == 0 || uType == 5 ? "" : "d_none"
                }`}
                colSpan={4}>
                SUPERMASTER PLUS MINUS
              </th>
              <th
                className={`sub_agent_heading ${uType != 5 ? "d_none" : ""}`}
                colSpan={4}>
                SUBADMIN PLUS MINUS
              </th>
            </tr>
          );

          const dynamicSubHeader = (
            <tr style={{ textAlign: "center" }} className="border_tr">
              <td>
                <strong>CLIENT</strong>
              </td>
              {/* <td
                className={
                  uType == 5 || uType == 0 || uType == 1 || uType == 2
                    ? ""
                    : "d_none"
                }>
                <strong>C AMT</strong>
              </td> */}
              {/* <td
                className={
                  uType == 5 || uType == 0 || uType == 1 || uType == 2
                    ? ""
                    : "d_none"
                }>
                <strong>SESS.</strong>
              </td> */}
              <td
                style={{
                  borderRightWidth: 2,
                  borderRightColor: "rgb(174, 174, 174)",
                }}
                className={
                  uType == 5 || uType == 0 || uType == 1 || uType == 2
                    ? ""
                    : "d_none"
                }>
                <strong>CASINO AMT</strong>
              </td>
              {/* <td
                className={
                  uType == 5 || uType == 0 || uType == 1 || uType == 2
                    ? ""
                    : "d_none"
                }>
                <strong>C. COM</strong>
              </td> */}
              {/* <td
                className={
                  uType == 5 || uType == 0 || uType == 1 || uType == 2
                    ? ""
                    : "d_none"
                }>
                <strong>S. COM</strong>
              </td> */}
              <td
                style={{
                  borderRightWidth: 2,
                  borderRightColor: "rgb(174, 174, 174)",
                }}
                className={
                  uType == 5 || uType == 0 || uType == 1 || uType == 2
                    ? ""
                    : "d_none"
                }>
                <strong>CASINO COM </strong>
              </td>
              {/* <td
                className={
                  uType == 5 || uType == 0 || uType == 1 ? "" : "d_none"
                }>
                <strong>C. COM</strong>
              </td> */}
              {/* <td
                className={
                  uType == 5 || uType == 0 || uType == 1 ? "" : "d_none"
                }>
                <strong>S. COM</strong>
              </td> */}
              <td
                className={
                  uType == 5 || uType == 0 || uType == 1 ? "" : "d_none"
                }>
                <strong>CASINO COM</strong>
              </td>
              <td
                className={
                  uType == 5 || uType == 0 || uType == 1 ? "" : "d_none"
                }>
                <strong>NET AMT</strong>
              </td>
              <td
                className={
                  uType == 5 || uType == 0 || uType == 1 ? "" : "d_none"
                }>
                <strong>SHR AMT</strong>
              </td>
              <td
                className={
                  uType == 5 || uType == 0 || uType == 1 ? "" : "d_none"
                }
                style={{
                  borderRightWidth: 2,
                  borderRightColor: "rgb(174, 174, 174)",
                }}>
                <strong>FINAL</strong>
              </td>
              {/* <td
                className={
                  uType == 5 || uType == 0 || uType == 1 ? "" : "d_none"
                }>
                <strong>C. COM</strong>
              </td> */}
              {/* <td
                className={
                  uType == 5 || uType == 0 || uType == 1 ? "" : "d_none"
                }>
                <strong>S. COM</strong>
              </td> */}
              <td
                className={
                  uType == 5 || uType == 0 || uType == 1 ? "" : "d_none"
                }>
                <strong>CASINO COM</strong>
              </td>
              <td
                className={
                  uType == 5 || uType == 0 || uType == 1 ? "" : "d_none"
                }>
                <strong>NET AMT</strong>
              </td>
              <td
                className={
                  uType == 5 || uType == 0 || uType == 1 ? "" : "d_none"
                }>
                <strong>SHR AMT</strong>
              </td>
              <td
                className={
                  uType == 5 || uType == 0 || uType == 1 ? "" : "d_none"
                }
                style={{
                  borderRightWidth: 2,
                  borderRightColor: "rgb(174, 174, 174)",
                }}>
                <strong>FINAL</strong>
              </td>
              {/* <td className={uType == 5 || uType == 0 ? "" : "d_none"}>
                <strong>C. COM</strong>
              </td> */}
              {/* <td className={uType == 5 || uType == 0 ? "" : "d_none"}>
                <strong>S. COM</strong>
              </td> */}
              <td className={uType == 5 || uType == 0 ? "" : "d_none"}>
                <strong>CASINO COM</strong>
              </td>
              <td className={uType == 5 || uType == 0 ? "" : "d_none"}>
                <strong>NET AMT</strong>
              </td>
              <td className={uType == 5 || uType == 0 ? "" : "d_none"}>
                <strong>SHR AMT</strong>
              </td>
              <td
                className={uType == 5 || uType == 0 ? "" : "d_none"}
                style={{
                  borderRightWidth: 2,
                  borderRightColor: "rgb(174, 174, 174)",
                }}>
                <strong>FINAL</strong>
              </td>
              {/* <td className={uType != 5 ? "d_none" : ""}>
                <strong>C. COM</strong>
              </td> */}
              {/* <td className={uType != 5 ? "d_none" : ""}>
                <strong>S. COM</strong>
              </td> */}
              <td className={uType != 5 ? "d_none" : ""}>
                <strong>CASINO COM</strong>
              </td>
              <td className={uType != 5 ? "d_none" : ""}>
                <strong>NET AMT</strong>
              </td>
              <td className={uType != 5 ? "d_none" : ""}>
                <strong>SHR AMT</strong>
              </td>
              <td
                className={uType != 5 ? "d_none" : ""}
                style={{
                  borderRightWidth: 2,
                  borderRightColor: "rgb(174, 174, 174)",
                }}>
                <strong>FINAL</strong>
              </td>
            </tr>
          );
          returnArr = [
            ...returnArr,
            dynamicHeader,
            dynamicSubHeader,
            ...clientRows,
          ];
        }
      });
      if (data?.total) {
        const totalRows = (
          <>
            <tr className="border_tr">
              <td>&nbsp;</td>
            </tr>
            <tr className="border_tr">
              <td>
                <strong>{data.groupName} .TOTAL</strong>
              </td>
              {/* <td
                className={
                  uType == 5 || uType == 0 || uType == 1 || uType == 2
                    ? ""
                    : "d_none"
                }>
                {data?.total?.matchAmount?.toFixed(2)}
              </td> */}
              {/* <td
                className={
                  uType == 5 || uType == 0 || uType == 1 || uType == 2
                    ? ""
                    : "d_none"
                }>
                {data?.total?.sessionAmount?.toFixed(2)}
              </td> */}
              <td
                style={{
                  borderRightWidth: 2,
                  borderRightColor: "rgb(174, 174, 174)",
                }}
                className={
                  uType == 5 || uType == 0 || uType == 1 || uType == 2
                    ? ""
                    : "d_none"
                }>
                {data?.total?.totalAmount?.toFixed(2)}
              </td>

              {/* <td
                className={
                  uType == 5 || uType == 0 || uType == 1 || uType == 2
                    ? ""
                    : "d_none"
                }>
                {data?.total?.matchComm?.toFixed(2)}
              </td> */}
              {/* <td
                className={
                  uType == 5 || uType == 0 || uType == 1 || uType == 2
                    ? ""
                    : "d_none"
                }>
                {data?.total?.sessionComm?.toFixed(2)}
              </td> */}
              <td
                style={{
                  borderRightWidth: 2,
                  borderRightColor: "rgb(174, 174, 174)",
                }}
                className={
                  uType == 5 || uType == 0 || uType == 1 || uType == 2
                    ? ""
                    : "d_none"
                }>
                {data?.total?.totalComm?.toFixed(2)}
              </td>

              {/* <td
                className={
                  uType == 5 || uType == 0 || uType == 1 || uType == 2
                    ? ""
                    : "d_none"
                }>
                {data?.total?.dealer?.matchComm?.toFixed(2)}
              </td> */}
              {/* <td
                className={
                  uType == 5 || uType == 0 || uType == 1 || uType == 2
                    ? ""
                    : "d_none"
                }>
                {data?.total?.dealer?.sessionComm?.toFixed(2)}
              </td> */}
              <td
                className={
                  uType == 5 || uType == 0 || uType == 1 || uType == 2
                    ? ""
                    : "d_none"
                }>
                {data?.total?.dealer?.totalComm?.toFixed(2)}
              </td>
              <td
                className={
                  uType == 5 || uType == 0 || uType == 1 || uType == 2
                    ? ""
                    : "d_none"
                }>
                {data?.total?.dealer?.netAmount?.toFixed(2)}
              </td>
              <td
                className={
                  uType == 5 || uType == 0 || uType == 1 || uType == 2
                    ? ""
                    : "d_none"
                }>
                {data?.total?.dealer?.shareAmount?.toFixed(2)}
              </td>
              <td
                className={
                  uType == 5 || uType == 0 || uType == 1 || uType == 2
                    ? ""
                    : "d_none"
                }
                style={{
                  borderRightWidth: 2,
                  borderRightColor: "rgb(174, 174, 174)",
                }}>
                {data?.total?.dealer?.finalAmount?.toFixed(2)}
              </td>
              {/* <td
                className={
                  uType == 5 || uType == 0 || uType == 1 ? "" : "d_none"
                }>
                {(data?.total?.master?.matchComm).toFixed(2)}
              </td> */}
              {/* <td
                className={
                  uType == 5 || uType == 0 || uType == 1 ? "" : "d_none"
                }>
                {(data?.total?.master?.sessionComm).toFixed(2)}
              </td> */}
              <td
                className={
                  uType == 5 || uType == 0 || uType == 1 ? "" : "d_none"
                }>
                {(data?.total?.master?.totalComm).toFixed(2)}
              </td>
              <td
                className={
                  uType == 5 || uType == 0 || uType == 1 ? "" : "d_none"
                }>
                {data?.total?.master?.netAmount?.toFixed(2)}
              </td>
              <td
                className={
                  uType == 5 || uType == 0 || uType == 1 ? "" : "d_none"
                }>
                {data?.total?.master?.shareAmount?.toFixed(2)}
              </td>
              <td
                className={
                  uType == 5 || uType == 0 || uType == 1 ? "" : "d_none"
                }
                style={{
                  borderRightWidth: 2,
                  borderRightColor: "rgb(174, 174, 174)",
                }}>
                {data?.total?.master?.finalAmount?.toFixed(2)}
              </td>
              {/* <td className={uType == 5 || uType == 0 ? "" : "d_none"}>
                {data?.total?.superMaster?.matchComm?.toFixed(2)}
              </td> */}
              {/* <td className={uType == 5 || uType == 0 ? "" : "d_none"}>
                {data?.total?.superMaster?.sessionComm?.toFixed(2)}
              </td> */}
              <td className={uType == 5 || uType == 0 ? "" : "d_none"}>
                {data?.total?.superMaster?.totalComm?.toFixed(2)}
              </td>
              <td className={uType == 5 || uType == 0 ? "" : "d_none"}>
                {data?.total?.superMaster?.netAmount?.toFixed(2)}
              </td>
              <td className={uType == 5 || uType == 0 ? "" : "d_none"}>
                {data?.total?.superMaster?.shareAmount?.toFixed(2)}
              </td>
              <td
                className={uType == 5 || uType == 0 ? "" : "d_none"}
                style={{
                  borderRightWidth: 2,
                  borderRightColor: "rgb(174, 174, 174)",
                }}>
                {data?.total?.superMaster?.finalAmount?.toFixed(2)}
              </td>
              {/* <td className={uType != 5 ? "d_none" : ""}>
                {data?.total?.subAdmin?.matchComm?.toFixed(2)}
              </td> */}
              {/* <td className={uType != 5 ? "d_none" : ""}>
                {data?.total?.subAdmin?.sessionComm?.toFixed(2)}
              </td> */}
              <td className={uType != 5 ? "d_none" : ""}>
                {data?.total?.subAdmin?.totalComm?.toFixed(2)}
              </td>
              <td className={uType != 5 ? "d_none" : ""}>
                {data?.total?.subAdmin?.netAmount?.toFixed(2)}
              </td>
              <td className={uType != 5 ? "d_none" : ""}>
                {data?.total?.subAdmin?.shareAmount?.toFixed(2)}
              </td>
              <td
                className={uType != 5 ? "d_none" : ""}
                style={{
                  borderRightWidth: 2,
                  borderRightColor: "rgb(174, 174, 174)",
                }}>
                {data?.total?.subAdmin?.finalAmount?.toFixed(2)}
              </td>
            </tr>
          </>
        );
        returnArr = [...returnArr, totalRows];
      }
    }
    setArrayState(returnArr);
  }, [data]);

  return arrayState;
  if (data) return <></>;
};
