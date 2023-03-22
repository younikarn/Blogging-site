const express =require("express");
const app= express();
const Port =process.env.Port || 8000;


app.use(express.json({extended: false}));

app.get("/",(req, res) => res.send("hello, world"));
app.post("/",(req, res) => res.send('Hello ${req.body.name}'));

app.listen(Port, () => console.log('server started at port ${Port}'));