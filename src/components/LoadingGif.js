import React, {useContext, useState} from 'react'
import lloadingGif from './LoadingGif.gif'
import NBG from './NBG.jpg'
import NoteContext from '../context/notes/NoteContext'
const LoadingGif = () => {
  
  const context = useContext(NoteContext);
  const {  loadingGif } = context;
  let [count, setCount] = useState(0)

const timerId = setInterval(() => {
  setCount((count) = count + 1 )

  if(!loadingGif){
    clearInterval(timerId)
  }
}, 2400);

  return (
    <div  className="w-full bg-no-repeat relative bg-cover bg-fixed" style={{ backgroundImage: `url(${NBG})`}}>

    <div className='rounded-full  flex  items-center justify justify-center'>
     <div className="flex justify absolute justify-center  text-2xl font-bold content-center text-gray-200 pb-12 pl-5 "> Until Loads lets count Laps:-{count}</div>
        <img alt='' className='w-full   shadow-2xl shadow-gray-100 rounded-full mx-auto flex max-w-screen-sm  ' src={lloadingGif}></img>

    </div>

    </div>
  )
}

export default LoadingGif