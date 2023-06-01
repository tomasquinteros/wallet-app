import './App.css'
import Nav from './components/Nav'
import Balance from './components/Balance'
import TredingCrypto from './components/TredingCrypto'

function App() {
  return (
    <div className='min-h-screen flex justify-between flex-col bg-slate-300'>
      <div className='flex flex-col gap-8'>
      <Balance />
      <TredingCrypto />
      </div>
      <Nav />
    </div>
  )

}
export default App
