import React from "react";
import ReactDOM from "react-dom";
import SignInSide from "./SignInSide";
import SignUpSide from "./SignUpSide";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles.css";

export default function auth() {
  return (
      <div className="auth">
        <SignInSide></SignInSide>
      </div>
  );
}
