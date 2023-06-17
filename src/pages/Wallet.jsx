import TopComponent from '../components/Wallet/TopComponent'
import Balance from '../components/Wallet/Balance'
import GraphCard from '../components/Wallet/Graph'
import TredingCrypto from '../components/Wallet/TredingCrypto'
import useFetch from "../hooks/useFetch"

export default function Wallet () {
    const { response } = useFetch("https://api.coingecko.com/api/v3/search/trending")
    const { coins }  = response
    return (
        <>
            <TopComponent/>
            <Balance />
            <GraphCard coins={coins}/>
            <TredingCrypto coins={coins}/>
        </>
    )
} 