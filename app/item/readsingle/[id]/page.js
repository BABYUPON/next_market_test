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
    const singleItem = await getSingleItem(id)
    console.log(singleItem)
    return (
        <div>
            <div>
                <h1 className="h1-style">個別アイテムページだ</h1>
                {singleItem.map(item => 
                    <Link href=""  key={item._id}>
                        <img src={item.image} width={750} height={500} alt="item-image" priority/>
                        <div>
                            <h2>{item.price}</h2>
                            <h3>{item.title}</h3>
                            <p>{item.description.substring(0,80)}</p>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default ReadSingleItem