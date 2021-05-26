import React from "react";
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Logout from "./components/Logout";
import Forms from "./components/Form";
import Appointment from "./components/Appointment";

// import PreLoader1 from './components/PreLoader1';
import Signup from "./views/Signup/Signup";
import Signupuser from "./views/Signup/Signupuser";
import PrivateRoute from "./components/HOC/PrivateRoute";
import Alldoctor from "./views/Doctorpage/Alldoctor";
import Hospital from "./views/Hospital/Hospital";
import LoginPage from "./views/LoginPage/LoginPage";
import LandingPage from "./views/LandingPage/LandingPage";
import Doctor from "./views/Doctorpage/Doctor";
import Modal from "./views/Doctorpage/Modal";

function App() {
  return (
    <div className="App">
      {/* <PreLoader2 /> */}
      {/* <PreLoader1 /> */}

      <Router>
        <Switch>
          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/appointment" component={Appointment} />
          <PrivateRoute path="/doctor" component={Doctor} />
          <PrivateRoute path="/hospital" component={Hospital} />
          <PrivateRoute path="/alldoctor" component={Alldoctor} />

          <Route path="/landingpage" component={LandingPage} />
          <header className="App-header">
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
          </header>

          <Route path="/logout" component={Logout} />

          {/* <Route path="/signup" component={Signup} /> */}
          <Route path="/signup" component={Signupuser} />
          <Route path="/form" component={Forms} />

          <Route path="/loginpage" component={LoginPage} />
        </Switch>
      </Router>
      {/* </header> */}
    </div>
  );
}

export default App;
