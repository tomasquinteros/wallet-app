import TopComponent from '../components/Wallet/TopComponent'
import Balance from '../components/Wallet/Balance'
import GraphCard from '../components/Wallet/Graph'
import TredingCrypto from '../components/Wallet/TredingCrypto'

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