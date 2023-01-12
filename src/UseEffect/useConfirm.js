//사용자가 무언갈 하기전에 확인하는 작업

const useConfirm = (message = "", onConfirm, onCancel) => {
	if (!onConfirm || typeof onConfirm !== "function") {
		return;
	}
	if (onCancel && typeof onCancel !== "function") {
		return;
	}
	const confirmAction = () => {
		if (confirm(message)) {
			onConfirm();
		} else {
			onCancel();
		}
	};
	return confirmAction;
};

const useConfirmApp = () => {
	const deleted = () => {
		console.log("Complete Delete");
	};
	const cancel = () => {
		console.log("Cancel Delete");
	};
	const confirmDelete = useConfirm("정말로 삭제하시겠습니까?", deleted, cancel);
	return (
		<div>
			<button onClick={confirmDelete}>Delete</button>
		</div>
	);
};

export default useConfirmApp;
