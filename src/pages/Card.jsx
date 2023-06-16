import CardComponent from '../components/Card/CardComponent'
import { PlusIcon } from '../components/Icons'
import { Link } from 'react-router-dom'
import useCard from '../hooks/useCard'
export default function Card () {
    let lastMov = ['', '', '']
    const {cards} = useCard()
    return (
        <div className='p-8 flex flex-col gap-4'>
            <div className='flex flex-col gap-4'>
                {
                    cards.length > 0 ?
                        cards.map((card, index) => <CardComponent key={index} card={card}/>)
                        : <></>
                }
            </div>
            <Link to={'/card/form'} className='flex gap-2 items-center justify-center bg-gray-300 rounded-md p-3 text-[#0a937e90] shadow-md'>
                Add new Card <PlusIcon />
            </Link>
            <div className='flex flex-col gap-6 mt-8'>
                <h2 className='text-gray-700 text-xl'>Last Movemets</h2>
                <div className='flex flex-col gap-5'>

                    {
                        lastMov.map((v, index) => 
                            <div key={index} className='bg-gray-200/80 h-14 rounded-md'>
                                {v}
                            </div>
                        ) 
                    }
                </div>
            </div>
        </div>
    )
}

