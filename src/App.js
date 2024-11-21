import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './component/HomePage';
import AboutPage from './component/AboutPage';

function App() {
	return (
		<div className="App">
			<h2>Children. Роутинг в React</h2>
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
