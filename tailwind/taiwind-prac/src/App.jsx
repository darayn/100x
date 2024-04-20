import { useState } from 'react'
import './App.css'
import { RevenueCard } from './components/Revenue'

function App() {
  const [count, setCount] = useState(0)
  const nextPayout = {
    nextPayoutDate : new Date(new Date().getTime() + (2 * 60 * 60 * 1000)),
  }
  return (
    <>
      <div className='grid grid-cols-3'>
      <RevenueCard
          title={"Next Payout"}
          amount={"92,312.20"}
          orderCount={29}
          nextPayout={nextPayout}></RevenueCard>
        <RevenueCard
          title={"Amount Pending"}
          amount={"92,312.20"}
          orderCount={29}></RevenueCard>
        <RevenueCard
          title={"Amount Pending"}
          amount={"23,92,312.20"}
          ></RevenueCard>
      </div>
    </>
  )
}

export default App
