import {useContext} from 'react';
import { AppContext, IAppContext } from '../AppContext';
import { NavLink } from 'react-router-dom';


export const PageWelcome = () => {

	const { books, flashcards  } = useContext<IAppContext>(AppContext);

	return (
		<>
			<p>Welcome to this site.</p>
			<p>In our club we are reading <NavLink to="/books">{books.length} books</NavLink> learning <NavLink to="/flashcards">{flashcards.length} flashcards</NavLink>.</p>
		</>
	);
}; 