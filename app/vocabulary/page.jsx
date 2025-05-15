

import Image from "next/image"
import Link from "next/link"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import VocabSpeaker from "@/utils/VocabSpeaker";


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
        <h1 className="mt-4 mb-8 text-4xl text-center font-bold text-blue-600">Practices English</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-7 justify-center items-center">
            {
                data.map((item,index) => {
                    return(
                        // <div key={index} className="bg-[#ff66b3] px-3 py-4 rounded-[50px] w-[240px] h-[370px] mx-auto my-4 flex flex-col justify-center items-center hover:shadow-lg shadow-gray-500 hover:transition hover:duration-300">
                        //     <div className="flex justify-center items-center mt-4 mb-1">
                        //         <Image src={`${item.voc_img}`} alt={item.voc_name} width={400} height={400} className="w-full h-[170px] rounded-[25px] object-cover border-2" priority />
                        //     </div>
                        //     <div className="text-center flex flex-col justify-center items-center gap-y-1">
                        //         <h3 className="text-[25px] font-bold">{item.voc_name}</h3>
                        //         <p>{item.voc_tran}</p> 
                        //         <div>
                        //             <Image src={'/play-icon.png'} alt="icon" width={100} height={100} className="w-[70px] cursor-pointer" />
                        //         </div>
                        //         <div className="mb-2">
                        //             <Link
                        //                 href={`/vocabulary/${item.voc_id}`}
                        //                 className="my-3 cursor-pointer hover:underline-offset-4 hover:underline hover:decoration-emerald-600 hover:text-blue-600 hover:font-semibold transition duration-300"
                        //             > View more... </Link>
                        //         </div>
                        //     </div>
                            
                        // </div>
                        
                            <Card key={index} sx={{ maxWidth: 260, borderRadius: '50px', backgroundColor: '#FBF3C1' }}  >
                                <CardMedia
                                    sx={{ height: 160 }}
                                    image={`${item.voc_img}`}
                                    alt={item.voc_name}
                                    title={item.voc_name}
                                />
                                <CardContent style={{ textAlign: 'center', padding: '8px' }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        <span className="font-bold capitalize"> {item.voc_name} </span>
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        <span className="text-[20px]"> {item.voc_tran} </span>
                                    </Typography>
                                    <div className="flex justify-center items-center mt-2 mb-1">
                                        <VocabSpeaker key={item.voc_id} word={item.voc_name} />
                                    </div>
                                </CardContent>
                                <CardActions style={{ justifyContent: 'end', marginRight: '25px', paddingTop: '0px' }}>
                                    <Link href={`/vocabulary/${item.voc_id}`} >
                                        <Button size="small"  >
                                            <span  className="inline-block text-right hover:underline-offset-4 hover:underline hover:decoration-emerald-600 hover:text-blue-600 hover:font-semibold transition duration-300"> View More </span> 
                                        </Button>
                                    </Link>
                                </CardActions>
                            </Card> 
                        
                        

                    )
                })
            }
        </div>
    </>
  )
}
export default Vocabulary