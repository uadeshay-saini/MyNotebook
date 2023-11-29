import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom'
import NoteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import Modal from "./Modal";
import NBG from "./NBG.jpg"
const Notes = (props) => {
  const context = useContext(NoteContext);
  const { notes, addNotes, getNotes } = context;
  const { showAlert, setName, setProgress } = props;
  let navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('token')){
      setProgress(30);
      getNotes();
      setName(localStorage.getItem('name'))
      setProgress(100);
      console.log(localStorage.getItem('name'))

    }else{
      
        // navigate("/login")

    }
    //eslint-disable-next-line
  }, []);

  // from NOTE ITEMS
  const { deleteNote, modalVariable, setModalVariable, editNote } = context;

  let [note, setNote] = useState({
    _id: "",
    etitle: "",
    edescription: "",
    etag: "default",
  });

  let y ={};

let x = 2;
useEffect(() => {
  // This code will run when the 'note' state is updated.
  console.log(note._id);
}, [note]);

  const updateNote = (currentNote) => {
    if(x>1){
      setNote({
        _id: currentNote._id,
        etitle: currentNote.title,
        edescription: currentNote.description,
        etag: currentNote.tag,
      });
    }
      console.log(note);
      console.log(currentNote);
      console.log(y);
      
      
      ShowModal();
    };
    
    const onChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };
  const hideModal = () => {
    setModalVariable("hidden");
    console.log(note);
  };

  // const handleClick = async (note) => {
  //   note.preventDefault();
  //   await editNote(note._id, note.etitle, note.edescription, note.etag);
  //   console.log(note)
  //   hideModal();
  // };
  
  const handleClick = async (event) => {
    event.preventDefault();
    try {
      setProgress(30);
      await editNote(note._id, note.etitle, note.edescription, note.etag);
      console.log(note);
      hideModal();
      setProgress(100);
      props.showAlert("teal", "You Have Updated Your Note Successfully", "Keep Writing!!")
    } catch (error) {
      console.error('Error:', error);
      props.showAlert("red", "Some Error Happened", "Retry Updating Again")
    }
  };

  const ShowModal = async (element) => {
    // setNote({id:element._id, title: element.title, description: element.description, tag: element.tag })
    // console.log(element)
    // console.log(element._id)

    setModalVariable("");
  };

  useEffect(() => {
    const handleBackdropClick = (event) => {
      if (event.target.classList.contains("modal") && modalVariable === "") {
        hideModal(); // Call your function to close the modal
      }
    };

    document.addEventListener('click', handleBackdropClick);

    return () => {
      document.removeEventListener('click', handleBackdropClick);
    };
  }, [modalVariable, hideModal]);
  return (
    <div  className="w-full  bg-no-repeat bg-cover bg-fixed" style={{ backgroundImage: `url(${NBG})`}}>

    <div>
      {localStorage.getItem('token') === null ? <div></div> : 
    <div>
      <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className={`modal ${modalVariable} fixed top-1/2 left-1/2 transform  z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0  backdrop-filter backdrop-blur-lg max-h-full`}
      >
        <div className="relative w-full max-w-md mx-auto">
          <div className="relative bg-black-800 rounded-lg  dark:bg-gray-700">
            <button
              onClick={hideModal}
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="authentication-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-300 dark:text-white">
                Update Note
              </h3>
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#">
                  <div>
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium leading-6 text-gray-300"
                    >
                      Title
                    </label>
                    <div className="mt-2">
                      <input
                        value={note.etitle}
                        id="etitle"
                        name="etitle"
                        type="text"
                        onChange={onChange}
                        minLength={5}
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium leading-6 text-gray-300"
                      >
                        Description
                      </label>
                    </div>
                    <div className="mt-2">
                      <textarea
                        value={note.edescription}
                        id="edescription"
                        name="edescription"
                        type="text"
                        minLength={5}
                        onChange={onChange}
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="tag"
                        className="block text-sm font-medium leading-6 text-gray-300"
                      >
                        Tag
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        value={note.etag}
                        id="etag"
                        name="etag"
                        type="text"
                        minLength={3}
                        onChange={onChange}
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={
                        handleClick                     
                      }
                      disabled={note.etitle.length<5 || note.edescription.length<5 || note.etag.length<3}
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
<div className="p-4">
      <AddNote showAlert={showAlert}/>
      </div>
      {/* {!localStorage.getItem('token')?<div><div>: <div></div>} */}
      
      <h2 className="flex text-3xl font-bold content-center text-gray-200 pb-12 pl-5 justify-items-center">Your Notes Are Here :-</h2>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        {notes.length === 0 && <div className="flex text-2xl font-bold content-center h-60 m-7 text-gray-500 pb-12 pl-5 justify-items-center">"No notes to display"</div>}
        {notes.map((notes) => {
          return (
            <NoteItem
              key={notes._id}
              hideModal={hideModal}
              updateNote={updateNote}
              ShowModal={ShowModal}
              notes={notes}
              showAlert={showAlert}
            />
          );
        })}
      
      </div>
    </div>}
    </div>
    </div>
  );
};

export default Notes;
