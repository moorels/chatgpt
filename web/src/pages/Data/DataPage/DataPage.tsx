import DataCell from 'src/components/Data/DataCell'

type DataPageProps = {
  id: number
}

const DataPage = ({ id }: DataPageProps) => {
  return <DataCell id={id} />
}

export default DataPage
