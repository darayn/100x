import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <div style={{backgroundColor: 'red'}}>one</div>
      <div style={{backgroundColor: 'green'}}>two</div>
      <div style={{backgroundColor: 'yellow'}}>three</div>
    </div>
    <div className="flex justify-between">
    <div style={{backgroundColor: 'red'}}>one</div>
      <div style={{backgroundColor: 'green'}}>two</div>
      <div style={{backgroundColor: 'yellow'}}>three</div>
    </div>
    <div className="grid grid-cols-5">
      <div className='bg-red-500'>one</div>
      <div className='bg-yellow-500'>two</div>
      <div className='bg-purple-500'>three</div>
      <div className='bg-pink-500'>three</div>
      <div className='bg-blue-500'>three</div>
      <div className='bg-green-500'>three</div>
    </div>
    <div className="grid grid-cols-12">
      <div className='bg-red-500 col-span-4'>one</div>
      <div className='bg-yellow-500 col-span-2'>two</div>
      <div className='bg-purple-500 col-span-4'>three</div>
      <div className='bg-pink-500 col-span-1'>three</div>
      <div className='bg-blue-500 col-span-1'>three</div>
    </div>
    <div className="bg-red-500 md:bg-blue-500">
      hi there
    </div>


    <div className="md:grid grid-cols-3">
      <div className="bg-red-500">hi</div>
      <div className="bg-red-500">there</div>
      <div className="bg-red-500">dhanesh</div>
    </div>
    </>
  )
}

export default App
