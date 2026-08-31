import { NextResponse } from "next/server"
//import connectDB from "../../../../utils/database"
//import { ItemModel } from "../../../../utils/schemaModels"

export async function DELETE(request,context){
    try{
   //console.log(await request.json())
    //await connectDB()
    //await ItemModel.deleteOne({_id: context.param.id})
    return NextResponse.json({message:"アイテム削除が成功"})
    }catch{
    return NextResponse.json({message:"アイテム削除が失敗"})
    }
 }