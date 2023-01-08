import axios from 'axios';
import useSWR from 'swr';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function Home() {
  const { data, isLoading } = useSWR('/api/get', fetcher, { refreshInterval: 1000 });

  return (
    <>
      <button onClick={() => axios.get('/api/add')}>call {isLoading && 'loading'}</button>
      {JSON.stringify(data, undefined, 2)}
    </>
  );
}
