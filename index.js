require('dotenv').config();

const express = require("express");
const cors = require("cors");
const app = express();
const port = (process.env.PORT || 5050);
const customerApi = require("./app/api/customerApi");
const customerEventApi = require("./app/api/customerEventApi");
const userApi = require("./app/api/userApi");
const auth = require("./app/middlewares/auth");

app.use(cors());

app.use(express.json());

app.use("/api/customer", auth, customerApi);
app.use("/api/customerEvent", auth, customerEventApi);
app.use("/api/user", userApi);

app.listen(port);
