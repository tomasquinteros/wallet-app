import useFetch from "../hooks/useFetch"
export default function DlsPrice () {

    const { response } = useFetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1&page=1&sparkline=false&locale=en")

    return { response }
}