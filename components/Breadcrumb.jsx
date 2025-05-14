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

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const Breadcrumb = async ({params}) => {

    const { id } = await params
    const data = await getData(id)

  return (
    <>
        <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            หน้าแรก
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href={`/vocabulary/${data.voc_id}`}
          aria-current="page"
        >
          {data.voc_name}
        </Link>
      </Breadcrumbs>
    </div>
    </>
  )
}
export default Breadcrumb