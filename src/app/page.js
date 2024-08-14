export default async function Home() {

  const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const result = await data.json()

  return (
    <div className="flex items-center gap-[20px] mt-[40px] flex-col">
      <p className="text-[36px]">{result.title}</p>
      <p className="text-xl">some content</p>
    </div>
  );
}
