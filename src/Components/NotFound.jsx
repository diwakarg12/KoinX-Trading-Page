import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <div className="text-center max-w-md w-full p-8 bg-white rounded-lg shadow-lg transform transition-all hover:scale-105">
        <h1 className="text-8xl font-extrabold tracking-tight text-gray-900">404</h1>
        <p className="mt-4 text-lg font-medium text-gray-700">
          Oops! The page you`re looking for is not available.
        </p>
        <p className="mt-4 text-sm text-gray-500">It seems like you`ve followed a broken link or entered a URL that doesn`t exist.</p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-full transition duration-300 transform hover:bg-indigo-700 hover:scale-105"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
