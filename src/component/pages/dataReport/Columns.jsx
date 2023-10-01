export const columns = [
    {
      title: "User",
      dataIndex: "userid",
      key: "userid",
    },
    {
      title: "Type",
      dataIndex: "action",
      key: "action",
      render: (text, record) => (
        <span>
         {(record?.action)?.slice(7)}
        </span>
      ),
    },
    {
      title: "Old",
      dataIndex: "old",
      key: "old",
    },
    {
      title: "New",
      dataIndex: "newvalue",
      key: "newvalue",
    },
    {
      title: "Done By",
      dataIndex: "actionby",
      key: "actionby",
    },
    {
      title: "Date",
      dataIndex: "createdon",
      key: "createdon",
    },
    {
      title: "IP",
      dataIndex: "ipaddress",
      key: "ipaddress",
    },
  ];