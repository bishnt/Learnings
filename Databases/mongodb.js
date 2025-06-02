//This file was created only to Learn


const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    accesibleItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Access'
    }],
});

const ItemSchema = new mongoose.Schema({
    title: String,
    price: 5999,
});

const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Item', ItemSchema);

//Create Items
User.create({
    username: req.body.username,
    password: req.body.password
})

//Read
User.findById("1");
User.findOne({
    username: "Bishrant"
})
User.find({
    username: "harkiart96@gmail.com"
})

User.updateOne(
    { "id": "1"},
    { $push: { purchasedCourses: courseId }}
)

//Update
User.updateOne({
    id: "1"
}, {
    password: "newPassword"
})

User.update({}, {
    premium: true
})
//Delete
User.deleteMany({})

User.deleteOne({
    username: "harkirat@gmail.com"
})
