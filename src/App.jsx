import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'; // Ensure this import is included to style the toast notifications

function App() {
  return (
    <>
      <ToastContainer />
      <Outlet />
    </>
  );
}

export default App;
