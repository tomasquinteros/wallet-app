import { createContext, useState } from "react";
import { favoritesInitialState } from "../GlobalsVariables";
export const FavoritesContext = createContext()

export const FavoritesProvider = ({children}) => {
    const [favorites, setFavorites] = useState(favoritesInitialState)
    const updateLocalStorage = (state) => {
        window.localStorage.setItem('favorites', JSON.stringify(state))
    }
    const addToFavorites = (crypto) => {
        console.log(crypto)
        const newFavorites = prevState => ([...prevState, {...crypto}])
        setFavorites(newFavorites)
    }
    const removeFromFavorites = (crypto) => {
        const newFavorites = favorites.filter(item => item.id !== crypto.id)
        setFavorites(newFavorites)
    }
    updateLocalStorage(favorites)
    return (
        <FavoritesContext.Provider value={{favorites, addToFavorites, removeFromFavorites}} >
            {children}
        </FavoritesContext.Provider>
    )
}
