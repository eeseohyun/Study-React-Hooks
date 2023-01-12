import defaultAxios from "axios";
import { useEffect, useState } from "react";

const useAxios = (opts, axiosInstance = defaultAxios) => {
	const [state, setState] = useState({
		loading: true,
		error: null,
		data: null,
	});
	if (!opts.url) {
		return;
	}
	useEffect(() => {
		axiosInstance(opts)
			.then((response) => {
				setState({
					...state,
					loading: false,
					data,
				});
			})
			.catch((error) => {
				setState({ ...state, loading: false, error });
			});
	}, []);
	return state;
};

const useAxiosApp = () => {
	const { loading, data, error } = useAxios({
		url: "https://yts.mx/api/v2/list_movies.json",
	});
	console.log(
		`Loading: ${loading}\nError: ${error}\nData: ${JSON.stringify(data)}`
	);
	return (
		<>
			<h1>Axios?</h1>
		</>
	);
};

export default useAxiosApp;
