//Importar Módulos
const express = require("express");
const hbs = require("hbs");

//Definir Variables
const app = express();
const port = 3000;

// hbs
hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

// Middlewares
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist"));
app.use("/js", express.static(__dirname + "/public/js"));

// Endpoints
app.get("/", (req, res) => {
  res.render("index", {
    products: ["banana", "cebollas", "lechuga", "papas", "pimenton", "tomate"],
  });
});

//Servidor escucha
app.listen(port, () =>
  console.log(`Servidor inicializado en el puerto localhost:${port}.`)
);
