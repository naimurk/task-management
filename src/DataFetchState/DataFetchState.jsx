import { createContext, useState } from "react";

export const FetchContext = createContext(null)
const DataFetchState = ({children}) => {
    const [fetchData , setFetchData]=useState(false)
    return (
        <FetchContext.Provider value={[fetchData , setFetchData]}>
            {children}
        </FetchContext.Provider>
    );
};

export default DataFetchState;