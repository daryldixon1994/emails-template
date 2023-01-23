const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();

/// view engine setup
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");


//body parser middleware
app.use(express.urlencoded({ extended: false }));

//static folder
app.use("/public", express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
    res.render("contact", { layout: false });
});

app.get("/adminEmailNotAMember", (req, res) => {
    res.render("adminEmailNotAMember", {
        layout: false,
        text: "THIS IS THE NEW ABOUT PAGE, WELCOME",
    });
});
app.get("/userEmailNotAMember", (req, res) => {
    res.render("userEmailNotAMember", {
        layout: false,
        text: "THIS IS THE NEW ABOUT PAGE, WELCOME",
    });
});
app.get("/adminEmailAngstMember", (req, res) => {
    res.render("adminEmailAngstMember", {
        layout: false,
        text: "THIS IS THE NEW ABOUT PAGE, WELCOME",
    });
});
app.get("/userEmailAngstMember", (req, res) => {
    res.render("userEmailAngstMember", {
        layout: false,
        text: "THIS IS THE NEW ABOUT PAGE, WELCOME",
    });
});
app.get("/adminPremiumNewUser", (req, res) => {
    res.render("adminPremiumNewUser", {
        layout: false,
        text: "THIS IS THE NEW ABOUT PAGE, WELCOME",
    });
});
app.get("/userPremiumNewUser", (req, res) => {
    res.render("userPremiumNewUser", {
        layout: false,
        text: "THIS IS THE NEW ABOUT PAGE, WELCOME",
    });
});



// app.get("/pug", (req, res) => {
//     res.render("home");
// });
app.listen(5000, () => {
    console.log("server is running");
});
