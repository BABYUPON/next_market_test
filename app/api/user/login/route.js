import { NextResponse } from "next/server"
import { SignJWT } from "jose"
//import connectDB from "../../../utils/database"
//import { UserModel } from "../../../utils/schemaModels"

export async function POST(request){

    const reqBody = await request.json()
    console.log(reqBody)

    try{
       //console.log(await request.json())
        //await connectDB()
        //const savedUserData = await UserModel.findOne({email: reqBody.email})
       //console.log(savedUserData)
        //if(savedUserData){
            //if(reqBody.password == savedUserData.password ){
            if(reqBody.password == "sima123"){
            //if(true){
                console.log("trueだった")
                const secretKey = new TextEncoder().encode("next-market-app-book")
                console.log("チェック1")
                const payload = {
                    email: reqBody.email
                }
                console.log("チェック2")
                const token = await new SignJWT(payload)
                                        .setProtectedHeader({alg: "HS256"})
                                        .setExpirationTime("1d")
                                        .sign(secretKey)
                console.log("チェック3")
                return NextResponse.json({message:"ログイン成功",token: token})
           }else{
                return NextResponse.json({message:"ログイン失敗:パスワードが間違っています"})
           }
        //}else{
        //    return NextResponse.json({message:"ログイン失敗:ユーザー登録をしてください"})
        //}
    }catch{
        return NextResponse.json({message:"ログイン失敗"})
    }
 }