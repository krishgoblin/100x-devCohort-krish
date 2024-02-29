const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin,Course } = require('../db');
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username; 
    const password = req.body.password; 

    await Admin.create({
        username,
        password
    })
    res.json({msg:"Admin created"});
});

router.post('/courses', adminMiddleware, async (req, res) => {  
    // Implement course creation logic
    const title = req.body.title;  //we do not to do auth here as it is already being done by middleware.
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    // kayede se zod bhi apply karna chahiye
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    });
    res.json({msg:"Course added" , CourseId: newCourse._id});
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic

    const allcourses = await Course.find({});

    res.json({courses: allcourses});

});

module.exports = router;