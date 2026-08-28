"use client"
import { use, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

const DeleteItem = (context) => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [email, setEmail] = useState("")

    const router = useRouter()
    //const { id } = await context.params;
    const params = use(context.params); 
    const { id } = params;

    useEffect(() => {
        const getSingleItem = async(id) => {
            //console.log(id)
            const response = await fetch(`http://localhost:3000/api/item/readsingle/${id}`, {cache: "no-store"})
            const jsonData = await response.json()
            const singleItem = jsonData.singleItem  //☆jsonデータの中のsingleItemを取り出せる
            //return singleItem ☆編集ではこれいらない
            setTitle(singleItem.title)
            setPrice(singleItem.price)
            setImage(singleItem.image)
            setDescription(singleItem.description)
            setEmail(singleItem.email)
        }
        getSingleItem(id)
        //getSingleItem(id)
    }, [context])

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const response = await fetch(`http://localhost:3000/api/item/delete/${id}`,{
                method: "DELETE",
                headers: {
                    "Accept": "applecation/json",
                    "Content-Type": "application/json",
                    "Authorization": `barere ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                   email: "kuma@gmail.com"
                })
            })
            const jsonData = await response.json()
            console.log("jsonDataは",jsonData)
            alert(jsonData.message)
            router.push("/")
            router.refresh()
        }catch{
            alert("アイテム削除失敗")
        }
    }

    return (
        <div>
            <h1>アイテム削除</h1>
            <form onSubmit={handleSubmit}>
                <h2>{title}</h2>
                <Image src={image} width={750} height={500} alt="item-image" priority/>
                <h3>\{price}</h3>
                <p>{description}</p>
               <button>削除</button>
            </form>
        </div>
    )
}
export default DeleteItem