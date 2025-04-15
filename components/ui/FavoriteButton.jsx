import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FavoriteButton = () => {
  return (
    <FontAwesomeIcon
      icon={faHeart}
      className={`absolute top-2 right-2 z-30 cursor-pointer text-4xl transition-all duration-500 ease-in-out hover:scale-110 text-brand-error`}
    />
  );
};

export default FavoriteButton;
