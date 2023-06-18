import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Wallet from './pages/Wallet'
import Card from './pages/Card'
import Search from './pages/Search'
import ChartTreding from './pages/ChartTreding'
import Crypto from './components/Crypto/Crypto'
import { FavoritesProvider } from './context/favorites'
import { CardProvider } from './context/cards'
import FormCard from './components/Card/FormCard'

function App() {
    return (
        <FavoritesProvider>
            <CardProvider>
                <div className='min-h-screen flex justify-between flex-col max-w-md m-auto'>
                    <BrowserRouter>
                        <div className='flex flex-col gap-8'>
                            <Routes>
                                <Route path='' element={<Wallet />} />
                                <Route path='/search' element={<Search />} />
                                <Route path='/chart_treding' element={<ChartTreding />} />
                                <Route path='/card' element={<Card />} />
                                <Route path="/search/:id" element={<Crypto />} />
                                <Route path='/card/form' element={<FormCard/>} />
                            </Routes>
                        </div>
                        <Nav />
                    </BrowserRouter>
                </div>
            </CardProvider>
        </FavoritesProvider>
    )
}
export default App