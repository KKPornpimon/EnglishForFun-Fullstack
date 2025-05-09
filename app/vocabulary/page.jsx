import Image from "next/image"


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
                        <div key={index} className="bg-pink-500/30 p-4 rounded-[50px] w-[60%] h-[300px] m-4">
                            <div className="flex justify-center items-center ">
                                <Image src={`${item.voc_img}`} alt={item.voc_name} width={400} height={400} className="rounded-[50px]" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-lg font-bold my-2">{item.voc_name}</h3>
                                <p className="my-2">{item.voc_tran}</p> 
                                <div className="my-2">
                                    <Image src={'/play-icon.png'} alt="icon" width={100} height={100} />
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