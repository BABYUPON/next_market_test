import Image from "next/image"

const getSingleItem = async(id) => {
    //console.log(id)
    const response = await fetch('http://localhost:3000/api/item/readsingle/${id}')
    const jsonData = await response.json()
    //console.log(jsonData)
}
const ReadSingleItem = async(context) => {
    //console.log(context)
    const { id } = await context.params;
    console.log(id)
    const   singleItem = {
        title: ' ',        
        image: ' ',
        price: '0',    
        description: ' ',
        email: ' ',
        __v: 0}
    singleItem = await getSingleItem(id)
    console.log(singleItem)
    return (
        <div>
            <div>
                <h1 className="h1-style">個別アイテムページだ</h1>
                <Image src={singleItem?.image} width={750} height={500} alt="item-image" priority/>
            </div>
            <div>
                <h1>{singleItem?.title}</h1>
                <h2>{singleItem?.price}</h2>
                <hr/>
                <p>{singleItem?.description}</p>
            </div>
        </div>
    )
}

export default ReadSingleItem