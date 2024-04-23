const express = require('express');
const dbconnection = require("./config/db");
const routes = require("./routes/feedback");
const cors = require("cors");
const bodyParser = require("body-parser");


const app = express();
app.use(cors({ origin: true, credentials: true}));

// DB connection
dbconnection();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware for parsing JSON bodies
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("Hello World!"));
app.use("/api/feedback", routes);

const PORT = 3000;

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
