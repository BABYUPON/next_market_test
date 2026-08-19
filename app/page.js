const getAllItems = async() =>{
    const response = await fetch("http://localhost:3000/api/item/readall")
    const jsonData = await response.json()
    console.log(jsonData)
}

const ReadAllItems = () =>{
    getAllItems()
    return(
        <div>
            <h1 className="h1-style">こんにちは</h1>
            <h3>さようなら</h3>
        </div>
    )
}

export default ReadAllItems