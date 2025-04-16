import Herosection from '@/components/Herosection';
import PopularNow from '@/components/PopularNow';

export default function Home() {
  return (
    <>
      <h1 className="m-32 text-brand-highlight">
        Hallo Klasse ich bin die startseite
      </h1>
      <Herosection />
      <PopularNow type={'movies'} />
      <PopularNow type={'tvShows'} />
    </>
  );
}
