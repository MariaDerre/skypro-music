import { useParams } from 'react-router-dom';

export function Category() {
  const { id } = useParams();

  return (
    <div>
      <h1>Категория {id}</h1>
    </div>
  );
}