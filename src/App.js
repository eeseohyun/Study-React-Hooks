import React from "react";
import UseInput from "../UseState/UseInput";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {
	return <>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}
				<Route path="/UseState/:id" element={<UseInput />}
				<Route path="/UseEffect" element={<App />}
				<Route path="/CustomHook" element={<App />}
				<Route path="/" element={<App />}
			</Routes>
		</BrowserRouter>
	</>;
};

export default App;
