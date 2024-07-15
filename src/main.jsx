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

// import i18n from './i18n';
import PrivateRoute from "./components/PrivateRoute.jsx";
import screen from "./screens/index.js";
import NotFoundScreen from "./screens/NotFoundScreen.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<screen.HomeScreen />} />
      <Route path="/" element={<screen.HomeScreen />} />
      <Route path="/login" element={<screen.LoginScreen />} />
      <Route
        path="/employer_register"
        element={<screen.EmployerRegistration />}
      />
      <Route path="/worker_register" element={<screen.WorkerRegistration />} />
      {/* Registered users */}
      <Route path="" element={<PrivateRoute />}>
        {/* <Route path="" element={<screen.Layout />}> */}
          <Route path="/dashboard" element={<screen.DashboardScreen />} />
        {/* </Route> */}
      </Route>
      <Route path="" element={<PrivateRoute/>}>
        {/* <Route path="" element={<screen.Layout />}> */}
        <Route path="/findJob" element={<screen.FindJob />} />
        <Route path="/findJob/detail" element={<screen.JobDetailScreen />} />
        {/* </Route> */}
      </Route>

      {/* Catch all other routes */}
      <Route path="*" element={<screen.NotFoundScreen />} /> {/* Add the 404 route */}
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
