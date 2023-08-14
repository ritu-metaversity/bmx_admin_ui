import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSportPlusMinusQuery } from "../../../../../store/service/SportDetailServices";

const PlusMinusTable = () => {
  const { state } = useLocation()
  const parmes = useParams()
  const { data } = useSportPlusMinusQuery({
    eventId: parmes?.id,
    marketId: state?.first,
    userId: state?.secondUserid

  })
// console.log(,"sdfsdfdfs")
  //   {
  //     "eventId": 32498837 **
  //     "marketId" : ["4.2036001304-F2"], (Optional)
  //     "userId" : ["Ujala016"] (Optional)
  // }

  console.log(state?.state?.dataNameee, "dsfsddfsfsd")


  return (
    <>
      <table className="plus-table">
        <tbody>
          {data?.data && Object.keys(data.data).map(
            item => <RecursiveTable data={data.data[item]} title={item} />
          )}
        </tbody>

      </table>
    </>
  );
};

export default PlusMinusTable;


const RecursiveTable = ({ data, title }) => {
  const [arrayState, setArrayState] = useState([])
  console.log(data, "huihiuhiuh")
  useEffect(() => {

    let returnArr = []

    if (data?.groupName === "subadmin") {
      returnArr.push(<tr className="master_color">
        <td>&nbsp;</td>
        <td>Sub Admin </td>
        <td colSpan={30}>
          <strong>MA14106 - {title}</strong>
        </td>
      </tr>)
    } else if (data?.groupName === "supermaster") {
      returnArr.push(<tr className="agent_color">
        <td colSpan={2}>&nbsp;</td>
        <td>SUPER Master </td>
        <td colSpan={28}>
          <strong>A154552 - {title}</strong>
        </td>
      </tr>)
    } else if (data?.groupName === "master") {
      returnArr.push(<tr className="super_color">
        <td colSpan={3}>&nbsp;</td> <td>MASTER </td>
        <td colSpan={27}>
          <strong>SA154548 - {title}</strong>
        </td>
      </tr>
      )
    } else if (data?.groupName === "dealer") {
      returnArr.push(<tr className="super_color">
        <td colSpan={3}>&nbsp;</td> <td>Agent </td>
        <td colSpan={25}>
          <strong>SA154548 - {title}</strong>
        </td>
      </tr>
      )
    }

    if (data) {
      Object.keys(data).forEach(item => {
        if (!["groupName", "total", "users"].includes(item)) {
          returnArr = [...returnArr, <RecursiveTable data={data[item]} title={item} />]
        } else if (item === "users") {
          const clientRows = (Object.keys(data[item]).map(userKey => <>
            <tr className="border_tr">
              <td>
                <strong>C154555-{userKey}</strong>
              </td>
              <td>{data[item][userKey].matchAmount}</td>
              <td>{data[item][userKey].sessionAmount}</td>
              <td>
                <strong>{data[item][userKey].totalAmount}</strong>
              </td>
              <td>{data[item][userKey].dealer?.matchComm}</td>
              <td>{data[item][userKey].dealer?.sessionComm}</td>
              <td>
                <strong>{data[item][userKey].dealer?.totalComm}</strong>
              </td>
              <td>{data[item][userKey].dealer?.netAmount}</td>
              <td>{data[item][userKey].dealer?.shareAmount}</td>
              <td
                style={{
                  borderRightWidth: 2,
                  borderRightColor: "rgb(174, 174, 174)",
                }}>
                <strong>{data[item][userKey].dealer?.finalAmount}</strong>
              </td>
              <td>{data[item][userKey].master?.matchComm}</td>
              <td>{data[item][userKey].master?.sessionComm}</td>
              <td>
                <strong>{data[item][userKey].master?.totalComm}</strong>
              </td>
              <td>{data[item][userKey].master?.netAmount}</td>
              <td>{data[item][userKey].master?.shareAmount}</td>
              <td
                style={{
                  borderRightWidth: 2,
                  borderRightColor: "rgb(174, 174, 174)",
                }}>
                <strong>{data[item][userKey].master?.finalAmount}</strong>
              </td>
              <td>{data[item][userKey].superMaster?.matchComm}</td>
              <td>{data[item][userKey].superMaster?.sessionComm}</td>
              <td>
                <strong>{data[item][userKey].superMaster?.totalComm}</strong>
              </td>
              <td>{data[item][userKey].superMaster?.netAmount}</td>
              <td>{data[item][userKey].superMaster?.shareAmount}</td>
              <td
                style={{
                  borderRightWidth: 2,
                  borderRightColor: "rgb(174, 174, 174)",
                }}>
                <strong>{data[item][userKey].superMaster?.finalAmount}</strong>
              </td>
              <td>{data[item][userKey].subAdmin?.matchComm}</td>
              <td>{data[item][userKey].subAdmin?.sessionComm}</td>
              <td>
                <strong>{data[item][userKey].subAdmin?.totalComm}</strong>
              </td>
              <td>{data[item][userKey].subAdmin?.netAmount}</td>
              <td>{data[item][userKey].subAdmin?.shareAmount}</td>
              <td
                style={{
                  borderRightWidth: 2,
                  borderRightColor: "rgb(174, 174, 174)",
                }}>
                <strong>{data[item][userKey].subAdmin?.finalAmount}</strong>
              </td>


            </tr>
          </>))
          const dynamicHeader =
            <tr style={{ textAlign: "center", color: "#545454" }}>
              <td> &nbsp; </td>
              <th className="sub_agent_heading" colSpan={9}>
                DEALER PLUS MINUS
                {console.log(item, "dasdasdas")}
              </th>
              <th className="sub_agent_heading" colSpan={6}>
                MASTER PLUS MINUS
              </th>
              <th className="sub_agent_heading" colSpan={6}>
                SUPERMASTER PLUS MINUS
              </th>
              <th className="sub_agent_heading" colSpan={6}>
                SUBADMIN PLUS MINUS
              </th>
            </tr>

          const dynamicSubHeader =
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
              <td
                style={{
                  borderRightWidth: 2,
                  borderRightColor: "rgb(174, 174, 174)",
                }}>
                <strong>FINAL</strong>
              </td>
            </tr>
          console.log(data[item], "as as");
          returnArr = [...returnArr, dynamicHeader, dynamicSubHeader, ...clientRows]
        }

      })
      if (data.total) {
        const totalRows = <>
          <tr className="border_tr">
            <td>&nbsp;</td>
          </tr>
          <tr className="border_tr">
            <td>
              <strong>{data.groupName} .TOTAL</strong>
            </td>
            <td>{data?.total?.matchAmount}</td>
            <td>{data?.total?.sessionAmount}</td>
            <td>{data?.total?.totalAmount}</td>
            <td>{data?.total?.dealer?.matchComm}</td>
            <td>{data?.total?.dealer?.sessionComm}</td>
            <td>{data?.total?.dealer?.totalComm}</td>
            <td>{data?.total?.dealer?.netAmount}</td>
            <td>{data?.total?.dealer?.shareAmount}</td>

            <td
              style={{
                borderRightWidth: 2,
                borderRightColor: "rgb(174, 174, 174)",
              }}>
              {data?.total?.dealer?.finalAmount}
            </td>
            <td>{data?.total?.master?.matchComm}</td>
            <td>{data?.total?.master?.sessionComm}</td>
            <td>{data?.total?.master?.totalComm}</td>
            <td>{data?.total?.master?.netAmount}</td>
            <td>{data?.total?.master?.shareAmount}</td>
            <td
              style={{
                borderRightWidth: 2,
                borderRightColor: "rgb(174, 174, 174)",
              }}>
              {data?.total?.master?.finalAmount}
            </td>
            <td>{data?.total?.superMaster?.matchComm}</td>
            <td>{data?.total?.superMaster?.sessionComm}</td>
            <td>{data?.total?.superMaster?.totalComm}</td>
            <td>{data?.total?.superMaster?.netAmount}</td>
            <td>{data?.total?.superMaster?.shareAmount}</td>
            <td
              style={{
                borderRightWidth: 2,
                borderRightColor: "rgb(174, 174, 174)",
              }}>{data?.total?.superMaster?.finalAmount}
            </td>
            <td>{data?.total?.subAdmin?.matchComm}</td>
            <td>{data?.total?.subAdmin?.sessionComm}</td>
            <td>{data?.total?.subAdmin?.totalComm}</td>
            <td>{data?.total?.subAdmin?.netAmount}</td>
            <td>{data?.total?.subAdmin?.shareAmount}</td>
            <td
              style={{
                borderRightWidth: 2,
                borderRightColor: "rgb(174, 174, 174)",
              }}>
              {data?.total?.subAdmin?.finalAmount}
            </td>

          </tr></>
        returnArr = [...returnArr, totalRows]
      }
    }
    setArrayState(returnArr)
  }, [data])


  return arrayState;
  if (data)
    return <></>
}