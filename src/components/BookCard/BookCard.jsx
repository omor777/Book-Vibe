import PropTypes from "prop-types";
import { IoLocationOutline } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const {
    image,
    bookName,
    author,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    rating,
    bookId,
  } = book;
  // console.log(book);

  return (
    <div className="p-6 border border-black-60 rounded-2xl grid md:grid-cols-[250px_1fr] gap-6 items-center">
      <div className="h-full bg-black-5 rounded-2xl flex items-center justify-center py-14 md:py-0">
        <img src={image} alt="" />
      </div>
      <div>
        <h3 className="text-black-100 text-2xl font-playFair-display font-bold mb-4">
          {bookName}
        </h3>
        <p className="text-black-80 font-work-sans font-medium mb-4">
          By : {author}
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <p className="text-black-100 font-bold font-work-sans mr-1">Tag</p>
          <button className="btn btn-sm rounded-full bg-green-5 text-green-900 hover:bg-green-5 hover:border-green-5 font-work-sans">
            #{tags[0]}
          </button>
          <button className="btn btn-sm rounded-full bg-green-5 text-green-900 hover:bg-green-5 hover:border-green-5 font-work-sans">
            #{tags[1]}
          </button>
          <p className="ml-1 flex flex-wrap items-center gap-2">
            <IoLocationOutline className="text-xl" />
            <span className="text-black-80 font-work-sans">
              Year of Publishing: {yearOfPublishing}
            </span>
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 mt-4">
          <p className="flex flex-wrap items-center gap-2">
            <MdPeopleAlt className="text-xl" />
            <span className="text-black-80 font-work-sans">
              Publisher: {publisher}
            </span>
          </p>
          <p className="flex flex-wrap items-center gap-2">
            <IoNewspaperOutline className="text-xl" />
            <span className="text-black-80 font-work-sans">
              Page {totalPages}
            </span>
          </p>
        </div>
        <div className="divider"></div>
        <div className="flex items-center flex-wrap gap-3">
          <button className="btn btn-sm rounded-full bg-blue-5 text-blue-100 hover:bg-blue-5 hover:border-blue-5 font-work-sans">
            Category: {category}
          </button>
          <button className="btn btn-sm rounded-full bg-gold-15 text-gold-100 hover:bg-gold-15 hover:border-gold-15 font-work-sans">
            Rating: {rating}
          </button>
          <Link to={`/book/${bookId}`}>
            <button className="btn text-lg font-medium text-white bg-green-900 rounded-3xl font-work-sans hover:bg-green-900 hover:border-green-900 px-5">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.object,
};

export default BookCard;
