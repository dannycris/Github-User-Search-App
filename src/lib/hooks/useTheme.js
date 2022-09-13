import { useState } from 'react';

export const useTheme = () => {
	const [theme, setTheme] = useState('dark');

	return { theme, setTheme };
};

export const getTheme = (style, theme) => {
	const kind = {
		dark: style.dark,
		light: style.light
	};
	return kind[theme];
};
