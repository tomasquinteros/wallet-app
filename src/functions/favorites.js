export const checkProductInFavorites = (id, favorites) => {
    return favorites.some(value => value.id === id)
}