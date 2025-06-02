const {  Router } = require("express");
const userMiddleware = require("../middleware/user.js");
const router = Router();

router.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.create({
        username: username,
        password: password
    })
    .then(() => {
        res.json({
            msg: "Admin Succesfully created"
        })
    })

});

router.post('/courses', async (req,res) => {
    const response = await Course.find({});
    res.json({
        courses: response
    })    


});

//difficult part(understand this better)
router.post('/courses/:courseId', userMiddleware, (req, res) => {
    const courseId = req.params.courseId;
    const username = req.headers.username;
    User.updateOne({
        username: username
    }, {
        purchasedCourses: {
            "$push": courseId
        }
    });
    res.json({msg: "purchase complete"})

});

router.get('/purchasedCourses', userMiddleware, (req, res) => {

});

module.exports = router;