'use client';

import { useEffect, useState } from 'react';
import ContentCard from './content/ContentCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/Carousel/carousel';
import LoadingIndicator from './ui/LoadingIndicator';

const popularMovies = [
  'tt0111161', // The Shawshank Redemption
  'tt0068646', // The Godfather
  'tt0468569', // The Dark Knight
  'tt1375666', // Inception
  'tt0133093', // The Matrix
  'tt0110912', // Pulp Fiction
  'tt0120737', // The Lord of the Rings: The Fellowship of the Ring
  'tt0109830', // Forrest Gump
  'tt0816692', // Interstellar
  'tt0080684', // Star Wars: Episode V - The Empire Strikes Back
];
const popularShows = [
  'tt0903747', // Breaking Bad
  'tt0944947', // Game of Thrones
  'tt1475582', // Sherlock
  'tt2861424', // Rick and Morty
  'tt4574334', // Stranger Things
  'tt7366338', // Chernobyl
  'tt5555260', // This Is Us
  'tt0411008', // Lost
  'tt3032476', // Better Call Saul
  'tt0141842', // The Sopranos
];
const PopularNow = ({ type }) => {
  const [loading, setLoading] = useState(false);
  const imdbIds = type === 'movies' ? popularMovies : popularShows;
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const results = await Promise.all(
          imdbIds.map((id) =>
            fetch(`https://www.omdbapi.com/?i=${id}&apikey=1e3a687b`).then(
              (response) => response.json(),
            ),
          ),
        );
        const filtered = results.filter((result) => result.Response === 'True');
        setItems(filtered);
      } catch (err) {
        console.error('Fehler bei der Suche.', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type]);

  if (loading) return <LoadingIndicator />;
  return (
    <section id={type === 'movies' ? 'movies' : ''} className="p-3">
      <h2 className="mb-4 text-xl font-semibold">
        {type === 'movies' ? 'Beliebte Filme' : 'Beliebte Serien'}
      </h2>
      <Carousel
        className="shadow-brand-primary hover:shadow-brand-secondary shadow-md transition-all duration-500 ease-in-out"
        opts={{ align: 'start', loop: true }}>
        <CarouselContent className="max-w-xs shrink-0 grow-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
          {items.map((item) => {
            return (
              <CarouselItem
                key={item.imdbID}
                className="max-w-xs shrink-0 grow-0 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <ContentCard data={item} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="text-brand-text-primary shadow-brand-primary bg-brand-secondary hover:shadow-brand-secondary hover:bg-brand-primary hover:text-brand-text-primary left-2 z-10 cursor-pointer border-none shadow-sm transition-all duration-500 ease-in-out hover:shadow-md" />
        <CarouselNext className="text-brand-text-primary shadow-brand-primary bg-brand-secondary hover:shadow-brand-secondary hover:bg-brand-primary hover:text-brand-text-primary right-2 z-10 cursor-pointer border-none shadow-sm transition-all duration-500 ease-in-out hover:shadow-md" />
      </Carousel>
    </section>
  );
};

export default PopularNow;
