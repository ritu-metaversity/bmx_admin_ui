import "./App.scss";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Main from "./component/common/main/Main";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    document.title = (window.location.hostname).split(".")[1];
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
