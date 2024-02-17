import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import NavBar from './components/navBar';
import store from './redux/store';
import Footer from './components/footer';
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
    <NavBar/>
    <Footer/>
      </>

    ),
  },

]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider
      router={router}
    >
      <App />
    </RouterProvider>
  </Provider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
