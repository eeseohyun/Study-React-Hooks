import React, { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
	if (typeof onBefore !== "function") {
		return;
	}
	const handle = (event) => {
		//console.log(event);
		const { clientY } = event;
		//위로갈때만 적용
		if (clientY <= 0) {
			onBefore();
		}
	};
	useEffect(() => {
		document.addEventListener("mouseleave", handle);
		return () => document.removeEventListener("mouseleave", handle);
	}, []);
};

const useBeforeLeaveApp = () => {
	const doNotLeave = () => {
		alert("최저가 상품들을 놓치시겠습니까?");
	};
	useBeforeLeave(doNotLeave);
	return (
		<div>
			<h1>🔆 오늘의 최저가 상품 🔆</h1>
		</div>
	);
};

export default useBeforeLeaveApp;
