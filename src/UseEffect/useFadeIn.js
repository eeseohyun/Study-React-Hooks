// 애니메이션 hooks를 만들어 보자
import { useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
	if (typeof duration !== "number" || typeof delay !== "number") {
		return;
	}
	const element = useRef();
	useEffect(() => {
		if (element.current) {
			const { current } = element;
			current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
			current.style.opacity = 1;
		}
	}, []);
	return { ref: element, style: { opacity: 0 } };
};

const useFadeInApp = () => {
	const FadeInH1 = useFadeIn(1, 2);
	const FadeInH2 = useFadeIn(5, 10);
	return (
		<div>
			<h1 {...FadeInH1}>Hi</h1>
			<h2 {...FadeInH2}>Welcome to this page!</h2>
		</div>
	);
};

export default useFadeInApp;
