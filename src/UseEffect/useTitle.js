import React, { useState, useEffect } from "react";

const useTitle = (initialTitle) => {
	const [title, setTitle] = useState(initialTitle);
	//html의 title을 얻어온후 함수 state에서 변경된 title로 innertext해주는 함수
	const updateTitle = () => {
		const htmlTitle = document.querySelector("title");
		htmlTitle.innerText = title;
	};
	useEffect(updateTitle, [title]);
	return setTitle;
};

const useTitleApp = () => {
	const titleUpdater = useTitle("Loading..."); //default 값으로 loading...
	setTimeout(() => titleUpdater("Home", 5000));
	return (
		<div>
			<div>Use useTitle!</div>
		</div>
	);
};

export default useTitleApp;
