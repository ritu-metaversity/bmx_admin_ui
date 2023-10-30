import React, { useEffect, useState } from "react";
import { Modal, Table } from "antd";
import { useLazyAccountstatementQuery } from "../../../../../store/service/supermasteAccountStatementServices";
import { useDispatch } from "react-redux";
import { setData } from "../../../../../store/global/slice";
import AccountModals from "../AccountModals";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const AllStatement = ({ clientId, dateData, gameType }) => {
  const [trigger, { data, isFetching, isLoading }] =
    useLazyAccountstatementQuery();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [marketId, setMarketId] = useState("");
  const [remark, setRemark] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const AccData = {
      index: 0,
      noOfRecords: "200",
      fromDate: dateData[0],
      toDate: dateData[1],
      userid: clientId || id || "",
      type: gameType,
    };
    trigger(AccData);
  }, [data, gameType, clientId, dateData]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setData(data?.data?.dataList?.length));
  }, [data?.data]);

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Description",
      dataIndex: "fromto",
      key: "fromto",
    },
    {
      title: "Prev. Bal",
      dataIndex: "prevBal",
      key: "Prev. Bal",
    },
    {
      title: "CR",
      dataIndex: "credit",
      key: "credit",
      render: (text) => {
        return {
          children: <p className="text_success">{text}</p>,
        };
      },
    },

    {
      title: "DR",
      dataIndex: "debit",
      key: "debit",
      render: (text) => {
        return {
          children: <p className="text_danger">{text}</p>,
        };
      },
    },
    {
      title: "Comm+",
      dataIndex: "commPlus",
      key: "commPlus",
      render: (text) => {
        return {
          children: <p className="text_success">{text}</p>,
        };
      },
    },
    {
      title: "Comm-",
      dataIndex: "commMinus",
      key: "commMinus",
      render: (text) => {
        return {
          children: <p className="text_danger">{text}</p>,
        };
      },
    },
    {
      title: "Balance",
      dataIndex: "pts",
      key: "pts",
    },
    {
      title: "Remark",
      dataIndex: "remark",
      key: "remark",
    },
  ];

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handelAccountModals = (e, id, rem) => {
    e.preventDefault();
    setIsModalOpen(true);
    setMarketId(id);
    setRemark(rem);
  };
  // console.log(marketId, "Sdfsdafsdf")

  const date = new Date();
  const newDate = moment(date).format("DD-MM-YYYY");

  const dataSource = data?.data?.dataList?.map((curElm) => {
    console.log(curElm, "dscdsfc");
    return {
      date: curElm?.date,
      fromto: curElm?.fromto,
      prevBal: 0,
      credit: curElm?.credit,
      debit: curElm?.debit,
      commPlus: 0,
      commMinus: 0,
      pts: curElm?.pts,
      remark: curElm?.remark,
    };
  });

  const headerField = [
    "Date",
    "Description",
    "Prev. Bal",
    "CR",
    "DR",
    "Comm+",
    "Comm-",
    "Balance",
    "Remark",
  ];

  const downloadReport = () => {
    let data = JSON.stringify({
      data: dataSource,
      reportColumnName: headerField,
      reportType: "AccountStatementReport",
    });
    let config = {
      responseType: "blob",
      method: "post",
      maxBodyLength: Infinity,
      url: "https://api.247365.exchange/admin-new-apis/bmx/excel-file-download",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: data,
    };
    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        function download(blob) {
          const url = window.URL.createObjectURL(new Blob([blob]));
          const a = document.createElement("a");
          a.style.display = "none";
          a.href = url;
          a.setAttribute("download", `AccountStatementReport_${newDate}.xlsx`);
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
        }
        function showInOtherTab(blob) {
          download(blob, "myledger-report.xlsx");
        }
        showInOtherTab(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <button onClick={downloadReport} className="download account_download">
        <span>Download</span>
      </button>
      <div className="table_section statement_tabs_data">
        <div className="table_section">
          <Table
            className="live_table statemt_account agent_master"
            bordered
            rowClassName="c_pointer"
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => {
                  handelAccountModals(event, record?.marketid, record?.remark);
                },
              };
            }}
            loading={isFetching || isLoading}
            columns={columns}
            pagination={{
              defaultPageSize: 50,
              pageSizeOptions: [50, 100, 150, 200, 250],
            }}
            dataSource={
              data?.data?.dataList?.map((res) => ({
                ...res,
                commPlus: 0,
                commMinus: 0,
                prevBal: 0,
              })) || []
            }></Table>
        </div>
      </div>
      {marketId != "" && (
        <Modal
          title="Bet List"
          className="bet_list"
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}>
          <AccountModals marketId={marketId} remark={remark} id={id} />
        </Modal>
      )}
    </>
  );
};

export default AllStatement;
