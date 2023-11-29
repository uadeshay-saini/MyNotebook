import React, {useContext, useState, useEffect} from 'react'
import lloadingGif from './LoadingGif.gif'
import NBG from './NBG.jpg'
import NoteContext from '../context/notes/NoteContext'
const LoadingGif = () => {
  
  const context = useContext(NoteContext);
  const {  loadingGif, setLoadingGif } = context;
  let i = 0;
  let [count, setCount] = useState(0)

const timerId = setInterval(() => {
  setCount((count) = count + 1 )

  if(!loadingGif){
    clearInterval(timerId)
  }
}, 2400);

  return (
    <div  className="w-full bg-no-repeat relative bg-cover bg-fixed" style={{ backgroundImage: `url(${NBG})`}}>

    <div className='rounded-full  flex   justify justify-center'>
     <div className="flex justify absolute justify-center items-center h-screen text-2xl font-bold content-center text-gray-200 pb-12 pl-5 "> Until Loads lets count the Laps :-{count}</div>
        <img className='w-full   shadow-2xl shadow-gray-100 rounded-full mx-auto flex max-w-screen-sm  ' src={lloadingGif}></img>

    </div>

    </div>
  )
}

export default LoadingGif