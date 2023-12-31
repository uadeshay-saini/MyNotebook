const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser')
const Notes  =  require('../models/Notes');
const { body, validationResult } = require('express-validator');

//to get notes out of database and server
router.get('/fetchallnotes', fetchuser, async (req, res) =>{
    try{const notes = await Notes.find({user: req.user.id});
    res.json(notes)
    }catch(error){
        res.status(500).send("some error occurred"); 
    }
    
}) 

//to add new notes 
router.post('/addnote', fetchuser, 
    [
    body('title', 'Enter a valid title').isLength({min: 3}),
    body('description', 'Description must be atleast 5 characters').isLength({min: 5})
    ], 
     async (req, res) =>{
        try{
        const{title, description, tag } = req.body;
        //if any error report them
        const errors = validationResult(req);
        if (!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
        }
        const note = new Notes({
            title, description, tag, user: req.user.id
        }) 
        const savedNote = await note.save()
        res.json(savedNote)
        }catch(error){
            res.status(500).send("some error occurred");
        }
})

// to update existing notes
router.put('/updatenote/:id', fetchuser,  async (req, res) =>{
        try{
            const {title, description, tag} = req.body;
            // create a new note object
            let newNote = {};
            if(title){newNote.title = title};
            if(description){newNote.description = description};
            if(tag){newNote.tag = tag}
            
            let note = await Notes.findById(req.params.id);
            if(!note){return res.status(404).send("Not found")};

            if(note.user.toString() !== req.user.id){
               return res.status(401).send("not allowed")
            }
            note = await Notes.findByIdAndUpdate(req.params.id, {$set: newNote}, {new: true});
            res.json({note});

        }catch(error){
            res.status(500).send("some error occurred");

        }
     })

    //  router.delete('/deletenote/:id', fetchuser,  async (req, res) =>{
    //     try{
          
            
    //         let note = await Notes.findById(req.params.id);
    //         if(!note){return res.status(404).send("Not found")};

    //         if(note.user.toString() !== req.user.id){
    //            return res.status(401).send("not allowed")
    //         }
    //         note = await Notes.findByIdAndDelete(req.params.id, {$set: newNote}, {new: true});
    //         res.json({"success": "note has been deleted", note: note});

    //     }catch(error){
    //         res.status(500).send(error);

    //     }
    //  })

    // ROUTE 4: Delete an existing Note using: DELETE "/api/notes/deletenote". Login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {
        // Find the note to be delete and delete it
        let note = await Notes.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") }

        // Allow deletion only if user owns this Note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Notes.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been deleted", note: note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports  =  router





