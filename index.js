const express = require("express");
const app = express();
const cors = require("cors");
const videosRoutes = require("./routes/videos");
require("dotenv").config();


app.use(express.static("public"));

const { SERVER_URL, PORT} = process.env;

app.use(cors({ origin: SERVER_URL }));

app.use(express.json());


app.use("/videos", videosRoutes);


app.listen(8080, () => {
  console.log(`server is runnig on port ${PORT}`);
});  