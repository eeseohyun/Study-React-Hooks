import { useState, useEffect } from "react";

const useScroll = () => {
	const [state, setState] = useState({ x: 0, y: 0 });
	const onScroll = () => {
		//console.log(window.scrollY)
		setState({ x: window.scrollX, y: window.scrollY });
	};
	useEffect(() => {
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return state;
};

const useScrollApp = () => {
	const { y } = useScroll();
	return (
		<div>
			<h1 style={{ color: y > 100 ? "red" : "blue" }}>Hello</h1>
		</div>
	);
};

export default useScrollApp;
