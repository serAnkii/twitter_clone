import dbConnect from "@/app/utils/db";
import {Tweetmodel} from "@/app/models/tweet.js"
import { NextResponse } from "next/server";

export async function POST(req,res){
    try{
        const body = req.json;
        await dbConnect();
        await Tweetmodel.create(body);

        return NextResponse.json({
            message:"tweeted sucessfully"
       },{
       status:200}
       )
    }
    catch(e){
        return NextResponse.json({
            message:"Try again"
       },
       {
       status:500
    }
       )
    }
    
}