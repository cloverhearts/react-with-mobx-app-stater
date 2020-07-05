import React, { createContext, useContext } from 'react'
import { useLocalStore } from 'mobx-react-lite';

const moduleContexts = require.context('./', true, /^\.\/.*\/index\.js$/)
const modules = moduleContexts.keys().map(modulePath => {
    const moduleName = modulePath.replace('./', '').replace('/index.js', '')
    return { name: moduleName ,store: moduleContexts(modulePath).default}
})

export const StoreContext = createContext()

export function useStoreAction(storeName) {
    const storeModel = useContext(StoreContext)
    const module = modules.find(module => module.name === storeName)
    const targetStore = storeModel[storeName]
    const storeAction = {}
    storeAction[storeName] = { state: targetStore.state, actions: module.store.actions(targetStore) }
    return storeAction[storeName]
}

export const StoreContextProvider = ({ children }) => {
    const source = modules.reduce((source, module) => {
        source[module.name] = module.store
        return source
    } , {})
    const store = useLocalStore(_ => {
        return {
            ...source
        }
    });

    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider
