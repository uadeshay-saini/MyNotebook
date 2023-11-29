import React, { useContext} from "react";
import NoteContext from "../context/notes/NoteContext";
import Delete from "./Delete";
import Edit from "./Edit";
const NoteItem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote  } = context;
  
  const { notes, updateNote, showAlert } = props;

const dateString = `${notes.date}`;
const date = new Date(dateString);

const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

  return (
    <>
 

      <div className="flex h-screen w-full items-center justify-center m-5 h-5/6">
        <div className="w-full rounded-xl p-10 shadow-2xl shadow-blue-200 md:w-8/8 lg:w-6/6 bg-gray">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          

            <div className="w-full col-span-1 lg:col-span-10">
              <div className="text-center lg:text-left">
                <h2 className="text-1xl lg:text-right text-zinc-400">
                 Tag:- {notes.tag}
                </h2>
              </div>
              <div className="text-center lg:text-left">
                <h2 className="text-2xl font-bold text-zinc-300">
                  {notes.title}
                </h2>
              </div>
              <div className="text-center lg:text-left">
                {/* <p className="mt-2 font-semibold text-zinc-200">{notes.user}</p> */}
                <p className="mt-4 font-semibold text-zinc-400">{formattedDate}</p>
                <p className="mt-4 text-zinc-200">{notes.description}</p>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <button
                  onClick={ ()=>{updateNote(notes)}}

                  className="flex px-3 py-2 items-center justify-center shadow-2xl shadow-gray-500 rounded-xl border-2 border-black bg-white  font-semibold text-blue-500 hover:bg-gray-500 hover:text-white"
                >
                  <Edit />
                </button>

                <button
                  onClick={() => {
                    deleteNote(notes._id);
                    showAlert("teal", "You Have DELETED Your Note Successfully", "Keep Writing!!")

                  }}
                  className=" flex items-center justify-center shadow-2xl shadow-gray-500 rounded-xl border-2 border-black bg-white  font-semibold text-blue-500 hover:bg-gray-500 hover:text-white"
                >
                  <Delete />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

 
    </>
  );
};

export default NoteItem;
