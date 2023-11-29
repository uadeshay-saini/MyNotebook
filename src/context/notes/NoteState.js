import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  // const host = "http://localhost:5000"
    const host = "https://mynotebook-backend-2gb6.onrender.com"
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  const [modalVariable, setModalVariable] = useState("hidden");
  const [addNotesModalVariable, setAddNotesModalVariable] = useState("hidden");
const [loadingGif, setLoadingGif] = useState(false);

  //fetching api for the first time
  const getNotes = async ()=>{
    try{
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      }
    });
  const json = await response.json();
  console.log(json)
  setNotes(json)

    } catch (error) {
      console.error('Error:', error);
    }
  }

  //add a note
  const addNote = async (title, description, tag)=>{
    try{
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag})
    }
    );
    const note = await response.json();
    setNotes(notes.concat(note))
  } catch (error) {
    console.error('Error:', error);
  }
}



  //delete a note
  const deleteNote = async (id)=>{
    try{
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      }}
    );
    const json = response.json();
    console.log(json)
    // console.log(json)
    const newNotes = notes.filter((note)=>{return note._id!==id})
    setNotes(newNotes)
  } catch (error) {
    console.error('Error:', error);
  }
}



  //edit a note
  // const editNote = async (id, title, description, tag)=>{
  //   //logic to fetch from api
  //   const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
  //     method: 'PUT',
  //     headers: {
  //       "Content-Type": "application/json",
  //       "auth-token": localStorage.getItem('token')
  //     },
  //     body: JSON.stringify({title, description, tag})
  //   });
  //  const json = await response.json();

  //  let newNotes = JSON.parse(JSON.stringify(notes))
  //   //logic to edit the element
  //   for (let index = 0; index < newNotes.length; index++) {
  //     const element = newNotes[index];
  //     if(element._id === id){
  //       newNotes.title = title;
  //       newNotes.description = description;
  //       newNotes.tag = tag
  //       break;
  //     }
  //   }
  //   setNotes(newNotes)
  // }
  const editNote = async (id, title, description, tag) => {
    try {
      console.log(id, title, description, tag)
      // Construct the URL with the parameters
      const url = `${host}/api/notes/updatenote/${id}`;
      
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify({ title, description, tag })
      });
  
      if (response.ok) {
        // Update the notes state after a successful API call
        const updatedNotes = notes.map(note => {
          if (note._id === id) {
            return { ...note, title, description, tag };
          }
          return note;
        });
  
        setNotes(updatedNotes);
      } else {
        // Handle the case where the API call was not successful
        console.error('Failed to update the note');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <NoteContext.Provider value={{notes, setNotes, addNote, deleteNote, editNote, getNotes, modalVariable, setModalVariable, addNotesModalVariable, setAddNotesModalVariable, loadingGif, setLoadingGif}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
