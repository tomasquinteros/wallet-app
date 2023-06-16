import useFetch from "../hooks/useFetch"
export default function FetchPricesID (id) {
    console.log(id)
    const { response } = useFetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}&order=market_cap_desc&per_page=2&page=1&sparkline=false&price_change_percentage=24h&locale=en&precision=8`)
    return response
}