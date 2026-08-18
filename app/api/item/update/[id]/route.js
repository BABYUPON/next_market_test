import { NextResponse } from "next/server"
//import connectDB from "../../../../utils/database"
//import { ItemModel } from "../../../../utils/schemaModels"

export async function POST(request,context){

    const reqBody = await request.json()
    console.log(reqBody)
    console.log(reqBody.email)

    try{
        console.log(reqBody.email)
        //await connectDB()
        //singleItem = await ItemModel.findById(context.params.id)
        //if(singleItem.email == reqBody.email){ 
        if("dummy@gmail.com" === reqBody.email){ 
            //await ItemModel.updateOne({_id: context.param.id},reqBody)
            return NextResponse.json({message:"アイテム編集成功"})
        }else{
            return NextResponse.json({message:"他の人が作成したアイテムです"})
        }
    }catch{
        return NextResponse.json({message:"アイテム編集失敗"})
    }
 }