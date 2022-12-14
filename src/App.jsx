import './App.scss';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { PageWelcome } from './pages/PageWelcome';
import { PageBooks } from './pages/PageBooks';
import { PageFlashcards } from './pages/PageFlashcards';
import { AppContext } from './AppContext';
import { useContext } from 'react';

function App() {
	const {appTitle} = useContext(AppContext);
	return (
		<div className="App">
			<h1>{appTitle}</h1>
			<nav>
				<NavLink to="/welcome">Welcome</NavLink>
				<NavLink to="/books">Books</NavLink>
				<NavLink to="/flashcards">Flashcards</NavLink>
			</nav>

			<Routes>
				<Route path="/welcome" element={<PageWelcome />} />
				<Route path="/books" element={<PageBooks />} />
				<Route path="/flashcards" element={<PageFlashcards />} />
				<Route path="/" element={<Navigate to="/welcome" replace />} />
			</Routes>
		</div>
	);
}

export default App;
