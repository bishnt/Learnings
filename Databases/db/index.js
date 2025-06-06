const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Bishrant:HelloWorld%40123@cluster0.nyty3tb.mongodb.net/');

const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
    
})

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]

})

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String, //filename is string
    price: Number
})

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}