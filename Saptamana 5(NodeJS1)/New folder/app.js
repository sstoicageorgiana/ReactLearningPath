import express from "express";

const app = express();

//routes
app.get("/", (req, res) => res.send("hello Social3Server!"));
app.use();

//start the server - listen to port
app.listen(process.env.Port || 5000);

app.get("/", (req, res) => res.send());
