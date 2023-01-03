import {useContext} from 'react';
import { AppContext, IAppContext, IBook } from '../AppContext';

export const PageBooks = () => {
	
	const { books } = useContext<IAppContext>(AppContext);

	return (
		<div className = "pageBooks">
		<p>We currently have {books.length} books:</p>
		{books.length === 0 ? 
			(<p>Loading...</p>)
			: ( <div className="books">
					{books.map((book: IBook) => {
						return (
							<div className="book" key={book.id}>
								<img src={`https://edwardtanguay.vercel.app/share/images/techBooks/${book.idCode}.jpg`}/>
								<div className="info">
									<div className="title">{book.title}</div>
									<div className="description">{book.description}</div>									
								</div>
							</div>
						);
					})}
				</div>)
		}
		</div>
	);
};	