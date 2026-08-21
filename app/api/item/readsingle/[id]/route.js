import { NextResponse } from "next/server"
//import connectDB from "../../../../utils/database"
//import { ItemModel } from "../../../../utils/schemaModels"

export async function GET(request,context){
    console.log(context)
     try{
        //await connectDB()
        //const singleItem = await ItemModel.findById(context.params.id)
        const singleItem = {"_id":"65478ff981349fcd3162bf87","title":"色えんぴつ","image":"/img2.jpg","price":"1500","description":"使いやすい色えんぴつです。Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse maximus est tellus, eget porta leo tristique a. Donec hendrerit massa leo, id tempus dolor vulputate et. Pellentesque consectetur dolor placerat euismod pellentesque. Integer scelerisque, augue ac ullamcorper sodales, neque lectus tristique turpis, id luctus lectus lorem eu tortor. In imperdiet semper accumsan. Etiam pellentesque libero et scelerisque vehicula. Nam quis justo mi. Cras erat ex, rhoncus id blandit id, commodo ac leo. In hac habitasse platea dictumst.","email":"kuma@gmail.com","__v":0}
        console.log(singleItem)
        return NextResponse.json({message:"アイテム読み取り成功（シングル）", singleItem: singleItem})
        //return NextResponse.json({message:"アイテム読み取り成功（シングル）"})
    }catch{
        return NextResponse.json({message:"アイテム読み取り失敗（シングル）"})
    }

}