import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Services from "./Services";
import Appointment from "./Appointments";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<App />
		<Services />
		<Appointment />
	</BrowserRouter>,
);
