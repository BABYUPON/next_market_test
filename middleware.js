import { NextResponse } from "next/server"
import { jwtVerify, SignJWT } from "jose"


export async function middleware(request){
    console.log("ミドルウェア")
    const token = await request.headers.get("Authorization")?.split(" ")[1]
    //const token = "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImR1bW15QGdtYWlsLmNvbSIsImV4cCI6MTc4NzAzMTQyOH0.BLRWsmfcINRxgb16tJ3od--3nOmC0L7kJlTOUHUeeNw"
    if(!token){
        return NextResponse.json({message: "トークンがありません"})
    }
    try{
        const secretKey = new TextEncoder().encode("next-market-app-book")
        const decodedJwt =  await jwtVerify(token, secretKey)
        console.log("decodedJwt:", decodedJwt)
        return NextResponse.next()
    }catch{
        return NextResponse.json({message: "トークンが正しくないのでログインしてください"})
    }
    return NextResponse.next()
}

export const config = {
    matcher: ["/api/item/create","/api/item/update/:path*","/api/item/delete/:path*"],
}