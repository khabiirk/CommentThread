const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false)
const url = 'mongodb+srv://fullstack:2rnPBTIipXuBegFp@cluster0.jeihe.mongodb.net/MessageBoard?retryWrites=true&w=majority';

console.log('connecting to ', url);

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(result => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB', error.message)
    })

const commentSchema = new mongoose.Schema({
    name: String,
    comment: String,
    date: String,
    parent: String
});

commentSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
}
);

module.exports = mongoose.model('Comment', commentSchema);