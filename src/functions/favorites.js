export const checkProductInFavorites = (crypto, favorites) => {
    return favorites.some(crypt => crypt.id === crypto.id)
}