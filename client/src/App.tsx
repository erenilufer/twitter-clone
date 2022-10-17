import Router from "./Router";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Provider store={store}>
      <Router />;
      <ToastContainer theme="dark" position="bottom-right" />
    </Provider>
  );
}

export default App;
