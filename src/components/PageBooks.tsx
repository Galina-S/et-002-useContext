import {useContext} from 'react';
import { AppContext } from '../AppContext';

export const PageBooks = () => {
	
	const { books } = useContext< any >(AppContext);
	console.log(books)

	return (
		<div className = "pageBooks">
		{books.length === 0 ? 
			(<p>Loading...</p>)
			: ( <div className="books">
					{books.map((book: any) => {
						return (
							<div className="book" key={book.id}>
								<img src={`https://edwardtanguay.vercel.app/share/images/techBooks/${book.idCode}.jpg`}/>
								<div className="info">
									<div className="title">{book.title}</div>
									<div className="description">
										{book.description}
									</div>
								</div>
							</div>
						);
					})}
				</div>)
		}
		</div>
	);
};	