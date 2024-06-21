import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Posts from '../models/Posts.js';
import User from '../models/User.js';
export const register = async (req, res) => {
    try{
        const {
        firstname,
        lastname,
        email,
        password,
        picturePath,
         } =   req.body;
        // check email 
        const exist  = await User.findOne({email});
        if(exist) {
            return res.status(500).json({
                error: "Email is taken already"
            })
        }
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        const  newUser = new User ({
        firstname,
        lastname,
        email,
        password:passwordHash,
        picturePath,
        });

        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    }  catch(err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
    
}

export const login = async (req, res) => {
    try{
        const {email, password} = req.body;

        const user = await User.findOne({email:email});
        if (!user) return res.status(400).json({ msg: "User does not exist." });
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({msg:"Invalid credentials."});

        const token = jwt.sign({
            id:user._id,
            firstname:user.firstname,
            lastname:user.lastname,
            password:user.password,
            picturePath:user.picturePath,
            email:user.email,
        }, process.env.JWT_SECRET);
        res.status(200).json({token});
    } catch(err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
}


export const profile = async  (req, res) =>  {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        const {...rest} = Object.assign({}, user.toJSON());
        return res.status(201).json(rest);
      } catch (err) {
        res.status(404).json({ message: err.message });
      }
}


/// updata

export const userUpdata= async  (req, res) =>  {
    try {
        
        const { id } = req.params;

             
        if(id){
            const body = req.body;

            // update the data
            User.updateOne({_id:id}, body)
            .then(() => {
                
                res.status(201).json({message : "Record Updated...!"});
            }) .catch((err) => {
                console.log(err);
              });
     

        }else{
            return res.status(401).json({ error : "User Not Found...!"});
        }

    } catch (error) {
        return res.status(401).json({ error });
    }
}


/// POST 

export const Post= async  (req, res) =>  {
    try {
     const {picturePath, title, desc} = req.body;

     const  newUser = new Posts ({
        picturePath,
        title,
        desc,
        });

        const savedPost = await newUser.save();
        res.status(200).json(savedPost);
    } catch (error) {
        return res.status(401).json({ error });
    }
}

export const GetPosts = async (req, res) => {
    try{
        res.json(await Posts.find());

    } catch(error) {
        return res.status(401).json({ error });

    }
}



