const express = require("express");
const http = require("http");
const hbs = require("hbs");
const path = require("path");

const app = express();
app.set("view engine", "hbs");
app.set("view options", { layout: "layouts/layout" });
hbs.registerPartials(path.join(__dirname, "../../views/partials"));

app.use("/contact", (request, response) =>
{
    response.render("contact.hbs", {
        title: "Мои контакты",
        email: "gavgav@mycorp.com",
        phone: "+1234567890",
        // layout: "layouts/layout"
    });
});

app.use("/", (request, response) =>
{
    response.render("home.hbs", /*{ layout: "layouts/layout" }*/);
});

const httpServer = http.createServer(app);
const port = process.env.PORT || 3000;
httpServer.listen(port, () => { console.log("Server started. Port: " + port); });
