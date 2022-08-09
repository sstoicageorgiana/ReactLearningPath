import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
    },
    text:{
        type: String,
        required: true,
    },
    name: {
        type : String,
    },
    password: {
        type: String, 
        require: true,
    },
    avatar: {
        type: String, 
    },
    likes:[
        {user: { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
               }
        }
    ],
    date: {
        type: Date, 
        default: Date.now,
    }
})

export default mongoose.model('Post', postSchema);  