import "./App.scss";
import Routesss from "./Routesss";
import LayOut from "./component/layout/Layout";
import Signin from "./component/common/signin/Signin";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Main from "./component/common/main/Main";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Main />{" "}
      </div>
    </Provider>
  );
}

export default App;
