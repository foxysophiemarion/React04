import React from 'react';
import { useTheme } from '../context/themeContext';

const ThemeToggle = () => {
	const { state, dispatch } = useTheme();

	return (
		<button onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
			Переключить на {state.isDarkMode ? 'светлую' : 'темную'} тему
		</button>
	);
};

export default ThemeToggle;
