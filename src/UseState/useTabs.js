import React, { useState } from "react";

const contents = [
	{
		tab: "Secton 1",
		content: "Do you know React?",
	},
	{
		tab: "Section 2",
		content: "Do you know React State Hook?",
	},
];

const useTabs = (initialTab, allTabs) => {
	const [currentIndex, setCurrentIndex] = useState(initialTab);
	if (!allTabs || Array.isArray(allTabs)) {
		return;
	}
	return {
		currentItem: allTabs[currentIndex],
		changeItem: setCurrentIndex,
	};
};

const useTabsApp = () => {
	const { currentItem, changeItem } = useTabs(0, contents);
	return (
		<div>
			{contents.map((section, index) => (
				<button onClick={() => changeItem(index)}>{section.tab}</button>
			))}
			<div>{currentItem.content}</div>
		</div>
	);
};

export default useTabsApp;
