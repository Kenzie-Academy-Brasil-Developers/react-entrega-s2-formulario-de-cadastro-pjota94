import Routes from "./routes";
import Global from "./styles/Global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <>
      <Global />
      <Routes />
      <ToastContainer />
    </>
  );
}

export default App;
