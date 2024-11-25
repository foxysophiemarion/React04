
import React, { createContext, useReducer, useContext } from 'react';


const TOGGLE_THEME = 'TOGGLE_THEME';

const ThemeContext = createContext();

// Начальное состояние
const initialState = {
	isDarkMode: false, // false - светлая тема, true - темная тема
};

// Редьюсер
const themeReducer = (state, action) => {
	switch (action.type) {
		case TOGGLE_THEME:
			return {
				...state,
				isDarkMode: !state.isDarkMode,
			};
		default:
			return state;
	}
};

// Провайдер
export const ThemeProvider = ({ children }) => {
	const [state, dispatch] = useReducer(themeReducer, initialState);

	return (
		<ThemeContext.Provider value={{ state, dispatch }}>
			{children}
		</ThemeContext.Provider>
	);
};

// Хук для доступа к теме
export const useTheme = () => {
	return useContext(ThemeContext);
};
