import { createContext, useContext, useReducer } from 'react'
// we're gonna use the CONTEXT API!
//this is an easy boilerplate to get you up and running with the context api. remember to also look at all the code in reducer.js

export const DataLayerContext = createContext()

export const DataLayer = ({ initialState, reducer, children }) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
)

export const useDataLayerValue = () => useContext(DataLayerContext)
