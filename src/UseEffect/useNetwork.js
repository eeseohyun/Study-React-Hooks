import { useEffect } from "react";

const useNetwork = (onChange) => {
	const [status, setStatus] = useState(navigator.onLine);
	const handleChange = () => {
		if (typeof onChange === "function") {
			onChange(navigator.onLine);
		}
		setStatus(navigator.online);
	};
	useEffect(() => {
		window.addEventListener("online", handleChange);
		window.addEventListener("offline", handleChange);
		() => {
			window.removeEventListener("online", handleChange);
			window.removeEventListener("offline", handleChange);
		};
	}, []);
	return status;
};

const useNetworkApp = () => {
	const networkChange = (online) => {
		console.log(online ? "네트워크 연결 확인" : "네트워크 연결 확인 요망");
	};
	const onLine = useNetwork(networkChange);
	return (
		<div>
			<h1>{onLine ? "Online" : "Offline"}</h1>
		</div>
	);
};
