import { useState } from 'react'
import './App.css'
import { RevenueCard } from './components/Revenue'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='grid grid-cols-3'>
        <RevenueCard
          title={"Amount Pending"}
          amount={"92,312.20"}
          orderCount={29}></RevenueCard>
      </div>
    </>
  )
}

export default App
