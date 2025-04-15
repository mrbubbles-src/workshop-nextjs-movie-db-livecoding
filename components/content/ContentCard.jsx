import Image from 'next/image';
import Link from 'next/link';
import FavoriteButton from '../ui/FavoriteButton';

const ContentCard = ({ data, shadow = false }) => {
  console.log(data);
  return (
    <article
      className={`bg-brand-card ${
        shadow
          ? 'shadow-brand-primary hover:shadow-brand-secondary shadow-md'
          : ''
      } rounded-sm p-2 transition-all duration-500 ease-in-out`}>
      <section className="relative aspect-[2/3] w-full">
        <Link
          href={`/content/${data.imdbID}`}
          className="relative block h-full w-full">
          <Image
            src={
              data.Poster === 'N/A'
                ? '/images/image-not-found.png'
                : data.Poster
            }
            alt={data.Title}
            className="rounded-md object-cover shadow-sm"
            unoptimized
            fill
            sizes="100vw"
          />
        </Link>
        <FavoriteButton />
      </section>
      <section className="mt-1">
        <Link
          href={`/content/${data.imdbID}`}
          title={data.Title}
          className="hover:text-brand-primary hover:decoration-brand-primary font-bold underline underline-offset-3 transition-all duration-500 ease-in-out">
          {data.Title.length >= 26
            ? `${data.Title.slice(0, 34)}...`
            : data.Title}
        </Link>
        <p className="">
          Erstveröffentlichung:{' '}
          <span className="">
            {data.Released && data.Released !== 'N/A'
              ? data.Released
              : data.Year}
          </span>
        </p>
      </section>
    </article>
  );
};

export default ContentCard;
