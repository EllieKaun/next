import Container from "@/components/Container"
import Card from "@/components/Card"

export default async function Store(){

  const data = await fetch('https://jsonplaceholder.typicode.com/todos/')
  const result = await data.json()



    return(
        <Container>
            <h1 className="text-[46px]">Store</h1>
            <div className="grid lg:grid-cols-4 grid-cols-2  gap-[10px]">{
                result?.map(() => (
                    <Card />
                ))
            }</div>
        </Container>
    )
}