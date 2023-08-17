import mongoose from "mongoose";

const tweetschema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
      },
    body:{
        type:String,
        required:true,
    }
    
    
});

const Tweetmodel = mongoose.model.Tweetmodel || mongoose.model('Tweetmodel',tweetschema)
