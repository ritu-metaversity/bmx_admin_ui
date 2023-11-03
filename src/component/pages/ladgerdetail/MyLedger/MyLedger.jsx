import { Card, Col, DatePicker, Table } from "antd";
import "./MyLedger.scss";
import { useMyLedgerMutation } from "../../../../store/service/ledgerServices";
import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import DownloadReport from "../../../common/DownloadReport/DownloadReport";
// import xlsx from "json-as-xlsx"
// import {XLSX} from "sheetjs"
// import { utils, writeFile } from "xlsx-js-style";

const columns = [
  {
    title: "Date",
    dataIndex: "dateStr",
    key: "  ",
  },
  {
    title: "Collection Name",
    dataIndex: "collectionName",
    key: "collectionName",
  },
  {
    title: "Debit",
    dataIndex: "debit",
    key: "debit",
    align: "right",
  },
  {
    title: "Credit",
    dataIndex: "credit",
    key: "credit",
    align: "right",
  },

  {
    title: "Balance",
    dataIndex: "balance",
    key: "balance",
    align: "right",
    render: (text, record) => <span>{Math.abs(record?.balance)}</span>,
  },
  {
    title: "Payment Type",
    dataIndex: "paymentType",
    key: "paymentType",
    render: (text, record) => (
      // console.log(record, "dsdscsd")
      <span>
        {`${record?.paymentType} ${
          record?.showDate ? `- ${record?.dateOnlyStr}` : ""
        } ${record?.isRollBack ? "- RollBack" : ""}`}
      </span>
    ),
  },
  {
    title: "Remark",
    dataIndex: "remarks",
    key: "remarks",
  },
  {
    title: "Rollback",
    dataIndex: "isRollback",
    key: "isRollback",
    render: (text, record) => (
      // console.log(record?.isRollback, "dsasasds")
      <span>{record?.isRollback ? "Yes" : "No"}</span>
    ),
  },
];

const MyLedger = () => {
  const nav = useNavigate();
  const handleBackbtn = () => {
    nav(-1);
  };

  const timeBefore = moment().subtract(30, "days").format("YYYY-MM-DD");
  const time = moment().format("YYYY-MM-DD");
  const [dateData, setDateData] = useState([timeBefore, time]);

  const onChange = (date, dateString) => {
    setDateData(dateString);
  };

  const [trigger, { data, isLoading, isFetching }] = useMyLedgerMutation();

  useEffect(() => {
    trigger({
      startDate: dateData[0],
      endDate: dateData[1],
      index: 0,
      noOfRecords: 100,
      isDownloaded: false,
    });
  }, [dateData]);

  // const dataSource = data?.data?.list?.map((curElm) => {
  //   return {
  //     date: curElm?.date,
  //     collectionName: curElm?.collectionName,
  //     debit: curElm?.debit,
  //     credit: curElm?.credit,
  //     balance: Math.abs(curElm?.balance),
  //     paymentType: curElm?.paymentType,
  //     remarks: curElm?.remarks,
  //     isRollback: curElm?.isRollback ? "Yes" : "NO",
  //   };
  // });

  const headerField = [
    "Date",
    "Collection Name",
    "Debit",
    "Credit",
    "Balance",
    "Payment Type",
    "Remark",
    "Rollback",
  ];

  const lenadenaHeading = ["Lena", "Dena", "Balance"];



  // const arrBalance = [
  //   ["Lena", "Dena", "Balance"],
  //   [
  //     data?.data?.data?.credit?.toFixed(2),
  //     data?.data?.data?.debit?.toFixed(2),
  //     Math.abs(data?.data?.data?.balance?.toFixed(2)),
  //   ],
  // ];
  
  // const arrBalance1= [{
  //   lena:data?.data?.data?.credit?.toFixed(2),
  //   dena:data?.data?.data?.debit?.toFixed(2),
  //   balance:data?.data?.data?.balance?.toFixed(2)
  // }]

  // const downloadFile = () => {
  //   const origin = 3;
  //   let worksheet = utils.json_to_sheet(dataSource, {
  //     origin,
  //       header:[
  //       "Date",	"Collection Name",	"Debit",	"Credit",	"Balance",	"Payment Type",	"Remark",	"Rollback"
  //     ]
  //   });

  //   console.log(worksheet, "hui");
  //   utils.sheet_add_aoa(worksheet, arrBalance, { origin: 0 });
  //   utils.sheet_add_aoa(
  //     worksheet,
  //     [
  //       [
  //         "Date",
  //         "Collection Name",
  //         "Debit",
  //         "Credit",
  //         "Balance",
  //         "Payment Type",
  //         "Remark",
  //         "Rollback",
  //       ],
  //     ],

  //     { origin: 3 }
  //   );

  //   for (let i = origin; i < dataSource.length + origin; ++i) {
  //     console.log(i, "i", `D${i + 2}`);
  //     worksheet[`C${i + 2}`].s = {
  //       font: {
  //         color: { rgb: "FF0000" },
  //       },
  //     };
  //     worksheet[`D${i + 2}`].s = {
  //       font: {
  //         color: { rgb: "008000" },
  //       },
  //     };
  //   }

  //   worksheet["A2"].s = {
  //     font: {
  //       color: { rgb: "FF0000" },
  //     },
  //   };
  //   worksheet["B2"].s = {
  //     font: {
  //       color: { rgb: "008000" },
  //     },
  //   };
  //   worksheet["C2"].s = {
  //     font: {
  //       color: { rgb: arrBalance[1][2]<0 ?"FF0000": "00FF00" },
  //     },
  //   };

  
  
  //   const wb = utils.book_new();
  //   utils.book_append_sheet(wb, worksheet, "Data");

  //   writeFile(wb, "SheetJSReactAoO.xlsx");
  // };


  return (
    <>
      <Card
        className="sport_detail ledger_data"
        title="My Ledger"
        extra={<button onClick={handleBackbtn}>Back</button>}>
        <div className="my_ledger">
          <Col lg={8} xs={24} className="match_ladger">
            <DatePicker.RangePicker
              style={{ margin: "10px 0px 10px 0px" }}
              defaultValue={[dayjs(timeBefore), dayjs(time)]}
              onChange={onChange}
            />
          </Col>
          <div>
            <h3 style={{ padding: "5px", color: "rgb(51, 181, 28)" }}>
              Lena : {data?.data?.data?.credit?.toFixed(2)}
            </h3>
          </div>
          <div>
            <h3 style={{ padding: "5px", color: "rgb(214, 75, 75)" }}>
              Dena : {data?.data?.data?.debit?.toFixed(2)}
            </h3>
          </div>

          <div>
            <h3
              className={
                data?.data?.data?.balance > 0 ? "text_danger" : "text_success"
              }>
              Balance: {Math.abs(data?.data?.data?.balance?.toFixed(2))}{" "}
              {data?.data?.data?.balance > 0 ? "( Dena )" : "( Lena )"}
            </h3>
          </div>
          {/* <button onClick={downloadFile}>Download</button> */}
          <div>
            <DownloadReport
              lenadenaHeading={lenadenaHeading}
              reportType="MyLedger"
              reportName="MyLedger"
              headerField={headerField}
            />
          </div>
        </div>
        <div className="table_section">
          <Table
            className="live_table limit_update"
            bordered
            columns={columns}
            loading={isFetching || isLoading}
            pagination={{
              defaultPageSize: 50,
              pageSizeOptions: [50, 100, 150, 200, 250],
            }}
            dataSource={data?.data?.list}
          />
        </div>
      </Card>
      {/* <button className="download"><AiOutlineArrowDown/></button> */}
    </>
  );
};

export default MyLedger;
