import { Card, Input } from '@nextui-org/react'

export default async function Home() {
  const response = await fetch('http://localhost:5124/')
  const data = await response.text()
  console.log(data)
  return (
    <main className="light h-screen flex flex-col justify-center">
      <div className="bg-yellow-500 h-2/4 flex flex-col items-center justify-between">
        <h1>Polymtl unofficial schedule builder</h1>
        <Card className="py-4 lg:w-3/4 xl:w-1/2 flex flex-col items-center">
          <p>Select classes you wish to add to your schedule</p>
          <Input
            isClearable
            type="search"
            size="lg"
            placeholder="Search"
          ></Input>
        </Card>
      </div>
    </main>
  )
}
