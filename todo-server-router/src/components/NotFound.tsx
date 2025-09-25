import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-5xl text-center">
        404 <br /> Такой страницы не существует :(
      </h1>
      <Link to="/" className="mx-auto">
        <button className="btn btn-lg btn-neutral">
          <ArrowLeft />
          Перейти к задачам
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
