import {useContext} from 'react';
import { AppContext } from '../AppContext';

export const PageWelcome = () => {

	const { books } = useContext< any >(AppContext);

	return (
		<>
			<p>Welcome to this site.</p>
			<p>In our club we are reading 
				{books.length == 0?
				(<span> ...loading books ...  books.</span>)
				: (<span> {books.length} books.</span>)}
				</p>
		</>
	);
}; 