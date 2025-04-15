import Herosection from '@/components/Herosection';
import PopularNow from '@/components/PopularNow';

export default function Home() {
  return (
    <>
      <h1>Hallo Klasse ich bin die startseite</h1>
      <Herosection />
      <PopularNow type={'movies'} />
      <PopularNow type={'tvShows'} />
    </>
  );
}
