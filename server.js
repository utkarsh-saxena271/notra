const express = require('express')
const connectToDB = require('./src/db/db');
const noteModel = require('./src/models/note.model');


const app = express();
app.use(express.json());
connectToDB();


// APIs
// create
app.post('/notes',async (req,res)=>{
    const {title, content} = req.body

    await noteModel.create({
        title,content
    })
    res.json({
        message : 'note created successfully'})
})

// read
app.get('/notes',async (req,res)=>{
    const notes = await noteModel.find()
    res.json({
        message:'notes fetched successfully',
        notes
    })

})

// update
app.patch('/notes/:id', async (req,res)=>{

    const noteId = req.params.id;
    const {title} = req.body;
    await noteModel.findOneAndUpdate({
        _id: noteId,
       
    }, {
        title:title
    })

    res.json({
        'message' : 'note updated'
    })
})





// delete
app.delete('/notes/:id', async (req,res)=>{

    const noteId = req.params.id;
    await noteModel.findOneAndDelete({
        _id: noteId
    })

    res.json({
        'message' : 'note deleted'
    })
})




app.listen(3000,()=>{
    console.log('server running on port 3000')
})