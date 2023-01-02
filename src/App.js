import "./App.css";
import useInput from "./useInput/useInput";

const App = () => {
	const maxLen = (value) => value.length <= 10;
	const name = useInput("", maxLen);
	return (
		<div>
			<h1>Welcome</h1>
			<input placeholder="name" {...name} />
		</div>
	);
};

export default App;
