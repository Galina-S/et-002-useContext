import { createContext } from 'react';

export interface IAppContext {
    appTitle: string;
}

interface IAppProvider {
    children: React.ReactNode;
}
export const AppContext = createContext<any>(null);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
    
    const appTitle = "The Berlin Study Group";

    return (
        <AppContext.Provider value={{appTitle}}>
            {children}
        </AppContext.Provider>
    );
};