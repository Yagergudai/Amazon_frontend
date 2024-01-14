import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route, json } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import React, { useEffect, useState } from "react";
import { auth } from "./Firebase";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
import Nav from "./Nav";

const key = loadStripe(
  "pk_test_51OXw74JniwVC0mlJDYNMf8P8WLFP4E8waYSV4jfwFL14bCiMYpXi2iBHR9nzLNXUviae9lAo4JlCMIvMsE7lNqR700p8icF3SZ"
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user just logged in /the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Routes>
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Nav/>
                <Checkout />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={key}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Nav/>
                <Home />
              </>
            }
          />
          <Route
            path="/Orders"
            element={
              <>
                <Header />
                <Nav/>
                <Orders />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
