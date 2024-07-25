/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Modal, Table } from "antd";
import AccountModals from "../AccountModals";
import { useParams } from "react-router-dom";

import DownloadReport from "../../../../common/DownloadReport/DownloadReport";

const dataList = [];

const AllStatement = ({
  isModalOpen,
  setIsModalOpen,
  clientId,
  dateData,
  gameType,
}) => {
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [marketId, setMarketId] = useState("");
  const [remark, setRemark] = useState("");

  const { id } = useParams();

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
    setIsModalOpen1(false);
    setIsModalOpen(false);
  };

  const handelAccountModals = (e, id, rem) => {
    e.preventDefault();
    setIsModalOpen(true);
    setMarketId(id);
    setRemark(rem);
  };


  return (
    <>
      <div className="account_download">
        <DownloadReport
          isModalOpen={isModalOpen1}
          setIsModalOpen={setIsModalOpen1}
        />
      </div>
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
            columns={columns}
            pagination={{
              defaultPageSize: 50,
              pageSizeOptions: [50, 100, 150, 200, 250],
            }}
            dataSource={
              dataList?.map((res) => ({
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
