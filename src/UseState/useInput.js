import React, { useState } from "react";

const useInput = (initialValue, validator) => {
	const [value, setValue] = useState(initialValue);
	const onChange = (event) => {
		const {
			target: { value },
		} = event;

		let willUpdate = true;
		if (typeof validator === "function") {
			willUpdate = validator(value);
		}
		if (willUpdate) {
			setValue(value);
		}
	};
	return { value, onChange };
};
const useInputApp = () => {
	const maxLen = (value) => value.length <= 10;
	const name = useInput("", maxLen);
	return (
		<div>
			<h1>Welcome</h1>
			<input placeholder="name" {...name} />
		</div>
	);
};

export default useInputApp;
