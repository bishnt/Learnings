const {  Router } = require("express");
const userMiddleware = require("../middleware/user.js");
const router = Router();

router.post('/signup', (req, res) => {

});

router.post('/courses', (req,res) => {

});

router.post('/courses/:courseId', userMiddleware, (req, res) => {

});

router.get('/purchasedCourses', userMiddleware, (req, res) => {

});

module.exports = router;