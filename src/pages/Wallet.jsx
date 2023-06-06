import TopComponent from '../components/TopComponent'
import Balance from '../components/Balance'
import GraphCard from '../components/Graph'
import TredingCrypto from '../components/TredingCrypto'

export default function Wallet () {
    return (
        <>
            <TopComponent/>
            <Balance />
            <GraphCard />
            <TredingCrypto />
        </>
    )
} 