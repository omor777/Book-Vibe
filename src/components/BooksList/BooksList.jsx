import useLoadBooksData from "../../hooks/useLoadBooksData";
import Book from "../Book/Book";

const BooksList = () => {
  const { isLoading, books } = useLoadBooksData();

  return (
    <section className="container my-24">
      <div>
        <h2 className="text-black-100 font-bold text-40px font-playFair-display text-center mb-9">
          Books
        </h2>
        {isLoading ? (
          <div className="flex justify-center pt-6">
            <span className="loading loading-spinner text-success loading-lg"></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
              <Book key={book.bookId} book={book} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

BooksList.propTypes = {};

export default BooksList;
