const express = require("express")
const router = express.Router()
const indexCtrl = require("../controller/indexCtrl")
const passport = require("passport")
const middleware = require("../controller/middleware")

router.get("/authentic", indexCtrl.home)

router.get("/", (req, res)=>{
    res.redirect("/authentic")
})

router.get("/authentic/about", indexCtrl.about)

router.get("/authentic/contact", indexCtrl.contact)

router.get("/authentic/services", indexCtrl.service)

router.get("/authentic/projects", indexCtrl.projects)

router.get("/authentic/post", indexCtrl.newProject)

router.post("/authentic/post",  indexCtrl.newProjectCtrl)

router.get("/authentic/signup", indexCtrl.signup)

router.post("/authentic/signup", indexCtrl.signupCtrl)

router.get("/authentic/admin", indexCtrl.login)

router.post("/authentic/login", passport.authenticate("local",{
    successRedirect: "/authentic/post",
    failureRedirect: "/authentic/admin" 
 }))

module.exports = router