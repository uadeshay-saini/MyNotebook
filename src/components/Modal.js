import React, { useContext, useState} from "react";
import NoteContext from "../context/notes/NoteContext";

const Modal = (props) => {
    const context = useContext(NoteContext);
    const { modalVariable, setModalVariable, editNote } = context;
    const { notes } = props;
    const [note, setNote] = useState({ title: "", description: "", tag: "default" });

// const ShowModal =()=>{
//     setModalVariable("") 
// }
const hideModal =()=>{
  setModalVariable("hidden")
  console.log(note)

}

const handleClick = async(element) => {
    // element.preventDefault();
   await editNote(element._id, element.title, element.description, element.tag);
   hideModal();
   console.log(note._id)
  };

  const onChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };

  return (
        <>   
{/* <button  className="showModal block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  Toggle modal
</button>  */}
<div id="authentication-modal" tabIndex="-1" aria-hidden="true" className={`modal ${modalVariable} fixed top-0 left-20 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
    <div className="relative w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button onClick={hideModal} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" >
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Title
            </label>
            <div className="mt-2">
              <input
              // value={note.title}
                id="title"
                name="title"
                type="text"
                onChange={onChange}
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Description
              </label>
            </div>
            <div className="mt-2">
              <input
              // value={note.description}
                id="description"
                name="description"
                type="text"
                onChange={onChange}
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="tag"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Tag
              </label>
            </div>
            <div className="mt-2">
              <input
              // value={note.tag}
                id="tag"
                name="tag"
                type="text"
                onChange={onChange}
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              onClick={()=>{handleClick(notes)}}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Update Note
            </button>
          </div>
        </form>

      </div>
            </div>
        </div>
    </div>
</div> 
</>  
  )
}

export default Modal