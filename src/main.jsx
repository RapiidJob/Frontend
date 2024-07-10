import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./app/store.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
import EmployerRegistration from "./screens/EmployerRegistration.jsx";
import WorkerRegistration from "./screens/WorkerRegistration.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/employer_register" element={<EmployerRegistration />} />
      <Route path="/worker_register" element={<WorkerRegistration />} />
      {/* Registered users */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/hiddenpage" element={<HomeScreen />} />
      </Route>
      
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
