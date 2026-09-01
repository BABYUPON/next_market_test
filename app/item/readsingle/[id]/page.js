import Image from "next/image"
import Link from "next/link"

const getSingleItem = async(id) => {
    //console.log(id)
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/item/readsingle/${id}`)
    const jsonData = await response.json()
    const singleItem = jsonData.singleItem  //☆jsonデータの中のsingleItemを取り出せる
    return singleItem //☆忘れてた
    //console.log(jsonData)
}
const ReadSingleItem = async(context) => {
    //console.log(context)
    const { id } = await context.params;
    console.log(id)

    const singleItem = await getSingleItem(id)
    console.log("singleItemは", singleItem)
    return (
        <div className="grid-container-si">
            <div>
                <h1 className="h1-style">個別アイテムページだ</h1>
                <Image src={singleItem.image} width={750} height={500} alt="item-image" priority/>
            </div>
            <div>
                <h1>{singleItem.title}</h1>
                <h2>{singleItem.price}</h2>
                <hr/>
                <p>{singleItem.description}</p>
                <div>
                    <Link href={`/item/update/${singleItem._id}`}>アイテム編集</Link>
                    <Link href={`/item/delete/${singleItem._id}`}>アイテム削除</Link>
                </div>
            </div>
        </div>
    )
}

export default ReadSingleItem