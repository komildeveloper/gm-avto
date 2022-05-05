const express = require("express");
const { join } = require('path')

const router = require("./routes/routes");

const app = express();

app.use(express.json());

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use('/static', express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }));

app.use("/", router);
app.use("/*", (_, res) => res.sendStatus(404));

app.listen(9000, console.log(9000));
