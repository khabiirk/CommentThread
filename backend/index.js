const express = require('express');
const app = express();
const cors = require('cors');
const Comment = require('./models/comment');

app.use(express.static('build'));
app.use(cors());
app.use(express.json());

app.get('/api/comments', (req, res) => {
    var list = []
    Comment.find({}).then(result => {
        result.forEach(element => {
            list.push(element)
        });
        res.json(list)
    })
})

app.get('/api/comments/:id', (req, res) => {
    const id = req.params.id
    Comment.findById(id).then(p => {
        res.json(p)
    })

})

app.post('/api/comments', (req, res) => {
    const body = req.body
    if(!body.name) {
        return res.status(400).json({
            error: 'name missing'
        })
    }
    if(!body.comment) {
        return res.status(401).json({
            error: 'Comment missing'
        })
    }

    const newComment = new Comment({
        name: body.name,
        comment: body.comment,
        date: body.date,
        parent: body.parent
    })

    newComment.save().then(savedComment => {
        res.json(savedComment)
    })
 
})

app.delete('api/comments/:id', (req, res, next) => {
    const id = req.params.id
    Comment.findByIdAndRemove(id)
        .then(result => {
            res.status(204).end()
        })
        .catch(error => next(error))


})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})