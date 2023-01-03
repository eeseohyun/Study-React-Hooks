import React, { useState, useEffect, useRef } from "react";

const useClick = (onclick) => {
	const name = useRef(); //h1 컴포넌트를 참고
	const onClick = () => {
		alert("Hi!");
	};
	useEffect(() => {
		//componentDidmount or Update 시 호출 (함수 - h1 컴포넌트에 name.current가 있는지 확인하고 조건 만족시, click이벤트 부여 )
		if (name.current) {
			name.current.addEventListener("click", onClick);
		}
		//componentWillUnmount일 시, 실행
		return () => {
			if (name.current) {
				name.current.removeEventListener("click", onClick);
			}
		};
	}, []);
	return name;
};

const useClickApp = () => {
	const title = useClick();
	return (
		<div>
			<h1 ref={title}>Hello</h1>
		</div>
	);
};

export default useClickApp;
