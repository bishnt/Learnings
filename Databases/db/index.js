const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Bishrant:HelloWorld@123@cluster0.nyty3tb.mongodb.net/');

const AdminSchema = new mongoose.Schema({
    
})

const UserSchema = new mongoose.Schema({

})

const CourseSchema = new mongoose.Schema({

})

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}