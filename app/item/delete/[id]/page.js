import MyPage from "./myPage"

export async function generateMetadata(params){
    //const { id } = await context.params;
    const { id } = await params;
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/item/readsingle/${id}`, {cache: "no-store"})
    const jsonData = await response.json()
    const singleItem = jsonData.singleItem 
    return{
        title: singleItem.title,
        description: singleItem.description
    }
}

//const DeleteItem = () => {
export default async function DeleteItem ({params}) {
    const { id } = params;
    //const { id } = context.params;
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/item/readsingle/${id}`, {cache: "no-store"})
    const jsonData = await response.json()
    return <MyPage {...jsonData}/>
    return <MyPage {...context}/>
}

//export default DeleteItem