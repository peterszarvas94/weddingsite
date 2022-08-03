import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Hungarian from "./pages/Hungarian";
import English from "./pages/English";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/*" element={<Home />} />
					<Route path="/hu" element={<Hungarian />} />
					<Route path="/en" element={<English />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
