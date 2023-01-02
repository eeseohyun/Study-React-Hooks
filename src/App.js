import "./App.css";
import React from "react";
import useInputApp from "./UseState/useInput";
import useTabsApps from "./UseState/useTabs";

const App = () => {
	return (
		<>
			<div>
				use useInput : <useInputApp />
			</div>
			<div>
				use useTabs : <useTabsApp />
			</div>
		</>
	);
};

export default App;
