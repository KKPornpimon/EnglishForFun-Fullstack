
import { Spoke } from "@mui/icons-material"
import Image from "next/image"

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';


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
            <div className="text-start mb-7">
                <div role="presentation">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" sx={{ display: 'flex', alignItems: 'center' }} href="/">
                        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        HOME
                        </Link>
                        <Typography sx={{ color: 'text.primary' }} style={{textTransform: 'capitalize'}}> {data.voc_name} </Typography>
                    </Breadcrumbs>
                </div>
            </div>
            <div className="flex justify-center items-center mt-4 mb-8">
                <h1 className="text-4xl font-bold text-blue-600"> Detail Vocabulary </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex justify-center items-center m-4">
                    <Image src={`${data.voc_img}`} alt={data.voc_name} width={400} height={400} className="w-full h-[300px] rounded-lg object-cover" priority />
                </div>
                <div className="m-4 flex flex-col justify-center items-center sm:items-start sm:justify-start">
                    <div className="flex items-end sm:mt-8">
                        <label className="text-2xl"> ชื่อ </label>  <Spoke color="secondary" className="mx-2" />
                        <h1 className="text-green-900 text-3xl sm:text-4xl md:text-6xl font-bold capitalize"> {data.voc_name} </h1>  
                    </div>
                    <div className="flex items-end mt-4 sm:mt-8"> 
                        <label className="text-2xl"> คำแปล </label>  <Spoke color="secondary" className="mx-2" /> 
                        <h2 className="text-green-700 text-3xl sm:text-4xl font-semibold"> {data.voc_tran} </h2>  
                    </div>
                    <div className="flex items-end mt-4 sm:mt-8"> 
                        <label className="text-2xl"> ประเภท </label>  <Spoke color="secondary" className="mx-2" /> 
                        <h3 className="text-green-500 text-2xl font-bold"> {data.votype_name} </h3> 
                    </div>
                </div>
                

            </div>
        </div>
    </>
  )
}
export default VocabByid