const usePreventLeave = () => {
	const listener = (event) => {
		event.preventDefault();
		event.returnValue = ""; //이벤트에 대한 기본 작업이 금지되었는지 여부를 알려줌
	};
	const enablePrevent = () => window.addEventListener("beforeunload", listener);
	const disablePrevent = () =>
		window.removeEventListener("beforeunload", listener);
	return { enablePrevent, disablePrevent };
};

const usePreventApp = () => {
	const { enablePrevent, disablePrevent } = usePreventLeave();

	return (
		<div>
			<button onClick={enablePrevent}>Protect</button>
			<button onClick={disablePrevent}>UnProtect</button>
		</div>
	);
};

export default usePreventApp;
