import Image from "next/image"

async function getData(id) {
    const res = await fetch(`http://localhost:3000/api/vocab/${id}`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

const VocabByid = async ({params}) => {

    const { id } = await params
    const data = await getData(id)

  return (
    <>
        <div className="container mx-auto p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex justify-center items-center m-4">
                    <Image src={`${data.voc_img}`} alt={data.voc_name} width={400} height={400} className="w-full h-[300px] rounded-lg object-cover" priority />
                </div>
                <div className="m-4">
                    <h1 className="text-6xl font-bold my-4">ชื่อ :: <span className="text-blue-950"> {data.voc_name} </span>  </h1>
                    <h2 className="text-4xl my-4"> คำแปล :: <span className="text-blue-800"> {data.voc_tran} </span>  </h2>
                    <h2 className="text-2xl my-4"> ประเภท :: <span className="text-blue-600"> {data.votype_name} </span> </h2>
                </div>
                

            </div>
        </div>
    </>
  )
}
export default VocabByid