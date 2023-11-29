import React, { useContext, useState, useEffect } from "react";
import NoteContext from "../context/notes/NoteContext";

const AddNote = (props) => {
  const context = useContext(NoteContext);
  const { addNote, addNotesModalVariable, setAddNotesModalVariable } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const { showAlert } = props;

  const handleClick = (element) => {
    element.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    showAlert("teal", "Your Note Is Added Successfully", "Keep Writing!!")
    hideModal();
  };

  const onChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };

  const ShowModal = async (element) => {
    setAddNotesModalVariable("");
  };
  const hideModal = () => {
    setAddNotesModalVariable("hidden");
  };

  useEffect(() => {
    const handleBackdropClick = (event) => {
      if (event.target.classList.contains("modal") && addNotesModalVariable === "") {
        hideModal(); // Call your function to close the modal
      }
    };

    document.addEventListener('click', handleBackdropClick);

    return () => {
      document.removeEventListener('click', handleBackdropClick);
    };
  }, [addNotesModalVariable, hideModal]);

  return (
    <div className="">
      {/* <div className="sm:mx-auto sm:w-full sm:max-w-sm">

        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-300">
          Enter the Note to Save
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium leading-6 text-gray-300"
            >
              Title
            </label>
            <div className="mt-2">
              <input
                id="title"
                name="title"
                type="text"
                minLength={5}
                value={note.title}
                onChange={onChange}
                autoComplete="email"
                required
                placeholder="Atleast 5 Characters"
                className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
              <input
                id="description"
                name="description"
                type="text"
                minLength={5}
                value={note.description}
                onChange={onChange}
                autoComplete="current-password"
                required
                placeholder="Atleast 5 Characters"
                className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                id="tag"
                name="tag"
                type="text"
                minLength={3}
                value={note.tag}
                onChange={onChange}
                required
                placeholder="Atleast 3 Characters"
                className="block w-full rounded-md border-0 p-2 py-1.5 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              onClick={handleClick}
              disabled={note.title.length<5 || note.description.length<5 || note.tag.length<3}
              className="bg-blue-900 flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Note
            </button>
            </div>
            </form>
          </div> */}

  <h2 className ="mt-5 flex text-gray-200 text-3xl font-bold justify-center items-center">Add Notes</h2>
<div className ="mt-4 p-5 flex justify-center items-center">
<button 
onClick={ShowModal}
  type="button"
  data-te-ripple-init
  data-te-ripple-color="light"
  className ="flex hover:bg-gray-300 rounded-full w-20 h-20 hover:text-gray-800 justify-center items-center rounded bg-gray-700  text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="w-8 h-8"
>
  <line x1="12" y1="5" x2="12" y2="19"></line>
  <line x1="5" y1="12" x2="19" y2="12"></line>
</svg>
  
</button>
</div>
      <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className={`modal ${addNotesModalVariable} lg:fixed top-1/2 left-1/2 transform  z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0  backdrop-filter backdrop-blur-lg max-h-full`}
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
                Add Note
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
                id="title"
                name="title"
                type="text"
                minLength={5}
                value={note.title}
                onChange={onChange}
                autoComplete="email"
                required
                placeholder="Atleast 5 Characters"
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
                id="description"
                name="description"
                type="text"
                minLength={5}
                value={note.description}
                onChange={onChange}
                autoComplete="current-password"
                required
                placeholder="Atleast 5 Characters"
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
                        
                id="tag"
                name="tag"
                type="text"
                minLength={3}
                value={note.tag}
                onChange={onChange}
                required
                placeholder="Atleast 3 Characters"
                        className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={
                        handleClick                     
                      }
                      disabled={note.title.length<5 || note.description.length<5 || note.tag.length<3}
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Add Note
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
