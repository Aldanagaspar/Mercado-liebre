const express = require("express");
const path = require("path");

const app = express();
const publicPath= path.resolve(__dirname, './public');

const PORT = process.env.PORT || 3001;


app.listen(PORT, () => {
    console.log("\n¡Servidor en línea!");
    console.log(`Iniciado en el puerto ${PORT}`);
    console.log("Ingresá a localhost:3030 para empezar a visualizar el sitio");
});


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/home.html"));
});
app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/login.html"));
});
app.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/register.html"));
});

app.use(express.static(publicPath));