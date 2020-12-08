const passport = require("passport")
const Project = require("../models/projectModel")
const User = require("../models/userModel")


const home = (req, res) => {
    res.render("index")
}

const about = (req, res) =>{
    res.render("about")
}

const contact = (req, res) =>{
    res.render("contact")
}

const service = (req, res) => {
    res.render("services")
}

const projects = (req, res) => {
    res.render("projects")
}

const newProject = (req, res) => {
    res.render("post")
}

const newProjectCtrl = (req, res) => {
    let title = req.body.title
    let video = req.body.video
    let description = req.body.description
    let image = req.body.image
    let newProduct = ({title:title, description:description, image:image, video:video})
    Project.create(newProduct, (err, project)=>{
        if(err){
            console.log(err)
        }else{
            res.redirect("/authentic/post")
        }
    })
}


const signup = (req, res) =>{
    res.render("signup")
}

    const signupCtrl = (req, res) => {
        let email = req.body.email
        let username = req.body.username
        let newUser = new User({username:username, email:email})
        User.register(newUser, req.body.password, (err, user) => {
            if(err){
                console.log(err)
            }
            passport.authenticate("local")(req, res, () =>{
                res.redirect("/authentic/post")
                console.log(user)
            })    
        })
    }

const login = (req, res) => {
    res.render("login")
}


module.exports = {
    home,
    about,
    contact,
    service,
    projects,
    newProject,
    newProjectCtrl,
    signup,
    signupCtrl,
    login
}