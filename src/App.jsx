/* eslint-disable react-refresh/only-export-components */
import "./App.scss";
import Main from "./component/common/main/Main";
import { notification } from "antd";

let apiRef;
export const openNotification = (mess) => {
    apiRef?.success({
      message: mess,
      description: "Success",
      closeIcon: false,
      placement: "top",
    });
  };

export const openNotificationError = (mess) => {
    apiRef?.error({
      message: mess,
      closeIcon: false,
      placement: "top",
    });
  };
function App() {
  
  const [api,contextHolder ] = notification.useNotification();
  apiRef=api;
 
  
  return (
      <div>
        {contextHolder}
        <Main />{" "}
      </div>
  );
}

export default App;
