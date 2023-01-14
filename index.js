//Imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();
const path = require('path')

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/public", express.static(path.join(__dirname, "public")));

//Database connection
const mongoUri = "mongodb://localhost:27017/videos-project";
try {
    mongoose.connect(mongoUri, {
        useNewUrlParser: true,
    });
    console.log("Connected to mongodb");
} catch (error) {
    console.log("Not Connected " + error);
}

//Routes
const mediaRoutes = require('./routes/mediaRoute');
app.use('/backend/api/media', mediaRoutes);

//Server
const PORT = 3005;
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})