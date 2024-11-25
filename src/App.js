
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './component/HomePage';
import AboutPage from './component/AboutPage';
import { ThemeProvider, useTheme } from './context/themeContext';
import ThemeToggle from './component/ThemeToggle';

function App() {
	return (
		<ThemeProvider>
			<AppContent />
		</ThemeProvider>
	);
}

const AppContent = () => {
	const { state } = useTheme();

	return (
		<div className={`App ${state.isDarkMode ? 'dark' : ''}`}>
			<h2>Children. Роутинг в React</h2>
			<ThemeToggle />
			<Router>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;

