import EditDataCell from 'src/components/Data/EditDataCell'

type DataPageProps = {
  id: number
}

const EditDataPage = ({ id }: DataPageProps) => {
  return <EditDataCell id={id} />
}

export default EditDataPage
