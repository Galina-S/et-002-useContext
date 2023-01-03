import axios from 'axios';
import { useState, useEffect } from 'react';

import { createContext } from 'react';

export interface IAppContext {
    appTitle: string;
    books: any;
}

interface IAppProvider {
    children: React.ReactNode;
}
export const AppContext = createContext<IAppContext | null>(null);

const booksUrl = 'https://edwardtanguay.vercel.app/share/techBooks.json';


export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
    const [books, setBooks] = useState([]);
    const appTitle = "The Berlin Study Group";

    useEffect(()=> {
       setTimeout(()=> {
        (async () => {
            setBooks((await axios.get(booksUrl)).data);
        })();
    }, 3000);
    }, [])

    return (
        <AppContext.Provider value={{
            appTitle,
            books
            }}>
            {children}
        </AppContext.Provider>
    );
};