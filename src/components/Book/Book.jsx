import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";

const Book = ({ book }) => {
  const { image, bookName, rating, tags, author, category, bookId } = book;
  return (
    <Link to={`/book/${bookId}`}>
      <div className="rounded-2xl border border-black-15 p-6 cursor-pointer">
        <div className="bg-[#F3F3F3] h-[230px] w-full mb-6 rounded-2xl flex items-center justify-center">
          <img src={image} alt="book" />
        </div>
        <div className="flex items-center gap-3 flex-wrap mb-4 ">
          <button className="btn btn-sm rounded-full bg-green-5 text-green-900 hover:bg-green-5 hover:border-green-5 font-work-sans">
            #{tags[0]}
          </button>
          <button className="btn btn-sm rounded-full bg-green-5 text-green-900 hover:bg-green-5 hover:border-green-5 font-work-sans">
            #{tags[1]}
          </button>
        </div>
        <h3 className="text-2xl font-bold text-black-100 font-playFair-display mb-4">
          {bookName}
        </h3>
        <p className="font-medium text-black-80 font-work-sans">
          By : {author}
        </p>
        <div className="divider"></div>
        <div className="flex items-center justify-between">
          <p className="font-medium text-black-80 font-work-sans">{category}</p>
          <p className="font-medium text-black-80 font-work-sans flex items-center gap-2">
            {rating} <FaRegStar className="mb-1" />
          </p>
        </div>
      </div>
    </Link>
  );
};

Book.propTypes = {
  book: PropTypes.object,
};

export default Book;
