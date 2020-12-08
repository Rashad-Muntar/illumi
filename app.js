const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const path = require("path")
const mongoose = require("mongoose")
const bodyParser  = require("body-parser")
const passport = require("passport")
const User = require("./app_server/models/userModel")
const localStrategy = require("passport-local")
const passportLocalMongoose = require("passport-local-mongoose")



mongoose.connect("mongodb://localhost/AUTHENTIC", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
.then(() =>{
    console.log("mongo connected")
})
.catch((err) => {
    console.log("Could not connect to database")
})

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "app_server", "views"))
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname + '/public')))
app.use(require("express-session")({
    secret: "thjghdgfd",
    resave: false,
    saveUninitialized: false
}))



app.use(passport.initialize())
app.use(passport.session())

passport.use(new localStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())



const indexRouter = require("./app_server/routes/indexRoute")

app.use(indexRouter)

        app.listen(PORT, () =>{
            console.log("server running")
        })