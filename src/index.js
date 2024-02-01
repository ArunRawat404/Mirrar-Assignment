const express = require("express");
const { PORT } = require("./config/server_config");
const connect = require("./config/db_config.js");

const app = express();

app.listen(PORT, async () => {
    console.log(`Server is up and running on PORT ${PORT}`);
    await connect();
    console.log("DB connected");
}) 