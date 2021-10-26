const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
const dotenv = require("dotenv");

const User = require("./models/user");

dotenv.config();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

const productRoutes = require("./routes/product");
const categoryRoutes = require("./routes/category");
const ownerRoutes = require("./routes/owner");

app.use("/api", productRoutes);
app.use("/api", categoryRoutes);
app.use("/api", ownerRoutes);

mongoose.connect("mongodb+srv://root:test123@cluster0.kweyw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true },
    err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Conneted to database ");
        }
    });

app.get("/", (req, res) => {
    res.json("Hello Amazon clone");
});

app.post("/", function(req, res) {
    let user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;

    user.save(err => {
        if (err) {
            res.json(err);
        } else {
            res.json("Succesfully Saved");
        }

    });

});
app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("succesfully working on the local host dont worry");
});