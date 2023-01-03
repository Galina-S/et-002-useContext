import './App.scss';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { PageWelcome } from './components/PageWelcome';
import { PageBooks } from './components/PageBooks';
import { PageFlashcards } from './components/PageFlashcards';
import { useContext } from 'react';
import { AppContext} from './AppContext';

function App() {
	const {appTitle} = useContext< any >(AppContext);

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
