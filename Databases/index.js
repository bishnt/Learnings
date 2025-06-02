const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require('./routes/admin.js');
const userRouter = require('./routes/user.js');

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Server is working');
  });

app.use(bodyParser.json);

app.use("/admin", adminRouter);

app.use("/user", userRouter);

app.listen(3000, () => {
    console.log('Connected to the port');
})