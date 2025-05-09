import Image from "next/image"
import Link from "next/link"


async function getData() {
    const res = await fetch("http://localhost:3000/api/vocab")
    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }
    return res.json()
}

const Vocabulary = async () => {

    const data = await getData()

  return (
    <>
        <h1>Practices English</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                data.map((item,index) => {
                    return(
                        <div key={index} className="bg-pink-500/50 px-3 py-4 rounded-[50px] w-[240px] h-[350px] mx-auto my-4 flex flex-col justify-center items-center hover:shadow-lg shadow-gray-500 hover:transition hover:duration-300">
                            <div className="flex justify-center items-center mt-4 mb-1">
                                <Image src={`${item.voc_img}`} alt={item.voc_name} width={400} height={400} className="w-full h-[160px] rounded-[30px] object-cover" priority />
                            </div>
                            <div className="text-center flex flex-col justify-center items-center gap-y-1">
                                <h3 className="text-[25px] font-bold">{item.voc_name}</h3>
                                <p>{item.voc_tran}</p> 
                                <div>
                                    <Image src={'/play-icon.png'} alt="icon" width={100} height={100} className="w-[70px]" />
                                </div>
                                <div className="mb-2">
                                    <Link
                                        href={`/vocabulary/${item.voc_id}`}
                                        className="my-3 cursor-pointer hover:underline-offset-4 hover:underline hover:decoration-emerald-600 hover:text-blue-500 hover:font-semibold transition duration-300"
                                    > Readmore... </Link>
                                </div>
                            </div>
                            
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}
export default Vocabulary