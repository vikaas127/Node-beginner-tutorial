const express = require('express');
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

connectDb();
app.use(express.json());

app.use("/api/contacts",require("./routes/contactRoutes"));
app.use("/api/users",require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(port,()=>{
	console.log(`Server running on port ${port}`);
})