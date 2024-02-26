import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <>
      <p>Ups... here is no content like that - error 404</p>
      <button>
        <Link to="/">Go to main page</Link>
      </button>
    </>
  );
};
