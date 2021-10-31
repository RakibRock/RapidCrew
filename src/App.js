import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home";
import Services from "./components/Services/Services";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import AuthProvider from "./contexts/AuthProvider";
import OurProcess from "./Pages/OurProcess/OurProcess";
import MyOrders from "./Pages/Login/PrivateRoutes/MyOrders/MyOrders";
import ManageOrders from "./Pages/Login/PrivateRoutes/ManageOrders/ManageOrders";
import AddService from "./Pages/Login/PrivateRoutes/AddService/AddService";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import OrderReview from "./components/PrivateRoute/OrderReview/OrderReview";
import Booking from "./Pages/Booking/Booking/Booking";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="/ourProcess">
              <OurProcess></OurProcess>
            </Route>

            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>

            <PrivateRoute path="/manageOrders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>

            <PrivateRoute path="/orderReview">
              <OrderReview></OrderReview>
            </PrivateRoute>

            <Route path="/addService">
              <AddService></AddService>
            </Route>

            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
