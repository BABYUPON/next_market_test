import Image from "next/image"

const getSingleItem = async(id) => {
    //console.log(id)
    const response = await fetch(`http://localhost:3000/api/item/readsingle/${id}`)
    const jsonData = await response.json()
    const singleItem = jsonData.singleItem
    return singleItem
    //console.log(jsonData)
}
const ReadSingleItem = async(context) => {
    //console.log(context)
    const { id } = await context.params;
    console.log(id)

    const singleItem = await getSingleItem(id)
    console.log("singleItemは", singleItem)
    return (
        <div>
            <div>
                <h1 className="h1-style">個別アイテムページだ</h1>
                <Image src={singleItem.image} width={750} height={500} alt="item-image" priority/>
            </div>
            <div>
                <h1>{singleItem.title}</h1>
                <h2>{singleItem.price}</h2>
                <hr/>
                <p>{singleItem.description}</p>
            </div>
        </div>
    )
}

export default ReadSingleItem