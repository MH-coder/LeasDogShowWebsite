const path = require("path");
const express = require("express");
const hbs = require("hbs");
const app = express();

const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

const staticPath = path.join(__dirname, '../public')
app.use(express.static(staticPath));

//  Setting view engine
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'hbs');


const partialsPath = path.join(__dirname, '../partials');
hbs.registerPartials(partialsPath);

app.get("/", (req, res)=>{
    res.render("index.hbs");
});

app.get("/about", (req, res)=>{
    res.render("about");
})

app.get("/programs", (req, res)=>{
    res.render("programs");
})

app.get("/organizer", (req, res)=>{
    res.render("organizer");
})

app.get('*', (req, res)=>{
    res.render("404");
})
app.listen(port, ()=>{
    console.log(`Listening to port ${port}`);
});