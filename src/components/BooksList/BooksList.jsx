import React from "react";
import useLoadBooksData from "../../hooks/useLoadBooksData";
import Book from "../Book/Book";

const BooksList = () => {
  const { books } = useLoadBooksData();

  return (
    <section className="container my-24">
      <div>
        <h2 className="text-black-100 font-bold text-40px font-playFair-display text-center mb-9">
          Books
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {books.map((book) => (
            <Book key={book.bookId} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

BooksList.propTypes = {};

export default BooksList;
