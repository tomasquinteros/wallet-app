import { useContext } from "react";
import { FavoritesContext } from "../context/favorites";

export function useFavorites () {
    console.log(useContext(FavoritesContext))
    const favorites = useContext(FavoritesContext)
    return favorites
}