import UserModel from "../models/User.js"
import bcrypt from "bcrypt"

class UserController {
    static home = (req, res) => {
        res.render("index")
    }

    static book = (req, res) => {
        res.render("book")
    }


    static register = (req, res) => {
        res.render("register")
    }

 
    static createUserDoc = async(req, res) => {
        const hashPassword = await bcrypt.hash(req.body.password, 10)
        try {

            // Create New User
            const doc = new UserModel({
                name: req.body.name,
                email: req.body.email,
                //password: req.body.password,
                password: hashPassword,

    
            })
            //Saving document
            await doc.save()
            res.redirect('/login')
            
        } catch (error) {
    
        }
    }

    static login = (req, res) => {
        res.render("login")
    }

    static verifyLogin = async (req, res)=> {
        try {
            const {email, password} = req.body
            console.log(email)
            const result = await UserModel.findOne({email:email})
            //console.log(result)

            if(result != null){
                const isMatch = await bcrypt.compare(password, result.password)
                if(result.email == email && isMatch){
                res.redirect('index')
                } else{
                    res.send("<h4>Email or password is not valid </h4>")
                } 
            } 

           


        } catch (error) {
            console.log(error)
        }
    }


}




export default UserController