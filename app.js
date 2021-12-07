const path = require ("path")
const express = require('express');
const app = express();



app.set("port", process.env.PORT || 3000) 

app.listen(app.get("port"),()=> console.log ("Servidores corriendo"))

app.get("/", (req,res)=> res.sendFile(path.resolve(__dirname, "./views","index.html")))

app.use(express.static(path.resolve(__dirname,"./public")))