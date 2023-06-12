import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Wallet from './pages/Wallet'
import Card from './pages/Card'
import Search from './pages/Search'
import ChartTreding from './pages/ChartTreding'
import Crypto from './components/Crypto/Crypto'
import { FavoritesProvider } from './context/favorites'

function App() {
  return (
    <FavoritesProvider>
    <div className='min-h-screen flex justify-between flex-col'>
      <BrowserRouter>
        <div className='flex flex-col gap-8'>
        <Routes>
          <Route path='' element={<Wallet />}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/chart_treding'  element={<ChartTreding/>}/>
          <Route path='/card' element={<Card/>}/>
          <Route path="/search/:id" element={<Crypto/>} />
        </Routes>
        </div>
        <Nav />
      </BrowserRouter>
    </div>
    </FavoritesProvider>
  )
}
export default App