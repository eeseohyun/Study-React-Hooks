import { useState, useEffect, useRef } from "react";

const useFullscreen = () => {
	const element = useRef();
	const handleFullscreen = () => {
		if (element.current) {
			element.current.requestFullscreen();
		}
	};
	//fullscreen 창 나가기
	const handleExit = () => {
		const checkScreenSize = document.fullscreenElement;
		if (checkScreenSize !== null) {
			document.exitFullscreen();
		}
	};
	return { element, handleFullscreen, handleExit };
};

const useFullscreenApp = () => {
	const { element, handleFullscreen, handleExit } = useFullscreen();
	return (
		<div style={{ height: "1000vh" }}>
			<img
				ref={element}
				src="https://oceanwp.org/wp-content/uploads/edd/2018/06/full-screen-image.png"
			/>
			<button onClick={handleFullscreen}>확대</button>
			<button onClick={handleExit}>나가기</button>
		</div>
	);
};

export default useFullscreenApp;
