import './App.css'
import TopComponent from './components/TopComponent'
import Nav from './components/Nav'
import Balance from './components/Balance'
import GraphCard from './components/Graph'
import TredingCrypto from './components/TredingCrypto'

function App() {
  return (
    <div className='min-h-screen flex justify-between flex-col'>
      <div className='flex flex-col gap-8'>
      <TopComponent/>
      <Balance />
      <GraphCard />
      <TredingCrypto />
      </div>
      <Nav />
    </div>
  )

}
export default App