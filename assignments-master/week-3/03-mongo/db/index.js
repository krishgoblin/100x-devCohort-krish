const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:AlaVT6erHxR4su0q@cluster0.88idb2s.mongodb.net/Course_selling');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    imageLink: String,
    price: Number
});

const Course = mongoose.model('Course', CourseSchema);

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    purchasedCourses: [{    //array of objects
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'        //refered to courses
    }]

});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);

module.exports = {
    Admin,
    User,
    Course
}