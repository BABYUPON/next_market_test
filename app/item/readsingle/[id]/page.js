const getSingleItem = (id) => {
    console.log(id)
    //const response = fetch("")
}
const ReadSingleItem = (context) => {
    console.log(context)
    getSingleItem(context.params.id)
    return (
        <h1>個別アイテムページだ</h1>
    )
}

export default ReadSingleItem