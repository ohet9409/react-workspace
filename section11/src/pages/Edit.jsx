import { useParams } from 'react-router-dom';

const Edit = () => {
  const param = useParams();
  return <div>{param.id}번 Edit</div>
}

export default Edit;