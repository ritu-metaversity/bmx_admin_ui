import "./App.scss";
import Routesss from "./Routesss";
import LayOut from "./component/layout/Layout";
import Signin from "./component/common/signin/Signin";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <LayOut />
      </div>
    </Provider>
  );
}

export default App;
