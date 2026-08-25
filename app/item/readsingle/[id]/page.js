import Image from "next/image"

const getSingleItem = async(id) => {
    //console.log(id)
    const response = await fetch(`http://localhost:3000/api/item/readsingle/${id}`)
    const jsonData = await response.json()
    //console.log(jsonData)
}
const ReadSingleItem = async(context) => {
    //console.log(context)
    const { id } = await context.params;
    console.log(id)
    const data = getSingleItem(id)
    
    console.log("dataは", data)
    return (
        <div>
            <div>
                <h1 className="h1-style">個別アイテムページだ</h1>
                <Image src={data.image} width={750} height={500} alt="item-image" priority/>
            </div>
            <div>
                <h1>{data.title}</h1>
                <h2>{data.price}</h2>
                <hr/>
                <p>{data.description}</p>
            </div>
        </div>
    )
}

export default ReadSingleItem