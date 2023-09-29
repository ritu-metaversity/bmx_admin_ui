export const column = [
    {
      title: "User",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "Match Name",
      dataIndex: "matchName",
      key: "matchName",
      render: (text, record) => (
        <span>
         {record?.showDate ? (record?.matchName) + " " + (record?.dateOnly):record?.matchName}
        </span>
      ),
    },
    {
      title: "Comm Diya",
      dataIndex: "commDiya",
      key: "commDiya",
      render: (text, record) => (
        <span>
         {(record?.commDiya) == null ?"0.00":Number(record?.commDiya)?.toFixed(2)}
        </span>
      ),
    },
    {
      title: "Comm Liya",
      dataIndex: "comm",
      key: "comm",
    },
    // {
    //   title: "Done By",
    //   dataIndex: "actionby",
    //   key: "actionby",
    // },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    // {
    //   title: "IP",
    //   dataIndex: "ipaddress",
    //   key: "ipaddress",
    // },
  ];