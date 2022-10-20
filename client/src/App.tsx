import Router from "./Router";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import axios from "axios";

function App() {
  return (
    <Provider store={store}>
      <Router />;
      <ToastContainer theme="dark" position="bottom-right" />
    </Provider>
  );
}

export default App;
