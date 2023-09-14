import React from 'react'
import Random from './components/Random'
import Tag from './components/Tag'

const App = () => {
  return (
    <div className=' relative flex flex-col w-full h-screen background '>
      <h1 className='bg-white rounded-lg text-center mt-[40px]
      ml-[25px] mr-[25px] px-10 py-2 text-3xl font-bold'>RANDOM GIFS</h1>

      <div className='flex flex-col items-center gap-y-10 mt-[40px]'>
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}

export default App
