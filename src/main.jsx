import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import store from "./store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "./components/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header/ >
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
