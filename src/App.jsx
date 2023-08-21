import "./App.scss";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Main from "./component/common/main/Main";
import { useEffect } from "react";
import 'react-notifications/lib/notifications.css';

function App() {

  useEffect(() => {
    document.title = window.location.hostname;
  }, []);
  return (
    <Provider store={store}>
      <div>
        <Main />{" "}
      </div>
    </Provider>
  );
}

export default App;
