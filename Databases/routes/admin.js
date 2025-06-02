const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db")
const router = Router();

router.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    Admin.create({
        username: username,
        password: password
    })
    .then(() => {
        res.json({
            msg: "Admin Succesfully created"
        })
    })


});

router.post('/courses', adminMiddleware, (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;

    Course.create({
        title,
        description,
        imageLink,
        price
    })
    res.json({msg: 'Course created'})

});

router.get('/courses', adminMiddleware, async (req, res) => {
    const response = await Course.find({});
    res.json({
        courses: response
    })    

});

module.exports = router;