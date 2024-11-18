import connectMongo from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST (request){
    const {title,description}=await request.json();
    await connectMongo();
    await Topic.create({title,description});
    return NextResponse.json({message:"Topic Created"},{status:201})
}

export async function GET () {
    await connectMongo();
   const topics= await Topic.find();
   return NextResponse.json({topics})
    
}
export async function DELETE(request) {
    const id=request.nextUrl.searchParams.get("id");
    await connectMongo();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message:"Topic Deleted"},{status:200});
}
