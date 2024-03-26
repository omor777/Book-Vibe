import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import BookCard from "../../components/BookCard/BookCard";
import { getDataFromLocalStorage } from "../../utils/localStorage";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const readBooks = getDataFromLocalStorage("read");
    const wishListBooks = getDataFromLocalStorage("wishlist");
    setReadList(readBooks);
    setWishList(wishListBooks);
  }, []);

  const handleReadBooksTab = () => {};

  const handleWishlistTab = () => {};

  return (
    <section className="container mb-32">
      <div>
        <h3 className="bg-black-5 py-8 rounded-2xl font-work-sans text-28px text-black-100 font-bold text-center">
          Books
        </h3>
        <div className="flex   justify-center mt-8">
          <select className="select select-success  bg-green-900 text-white select-lg font-work-sans text-lg font-semibold">
            <option>Sorted By</option>
            <option>English</option>
            <option>Japanese</option>
            <option>Italian</option>
          </select>
        </div>

        <div className="mt-12 mb-8">
          <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden flex-nowrap">
            <Link
              onClick={() => {
                setTabIndex(1);
              }}
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
                tabIndex === 1 ? "border border-b-0" : "border-b"
              } border-gray-400 rounded-t-lg`}
            >
              <span className="text-lg text-black-80 font-work-sans">
                Read Books
              </span>
            </Link>
            <Link
              onClick={() => {
                setTabIndex(2);
              }}
              className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  ${
                tabIndex === 2 ? "border border-b-0" : "border-b"
              } border-gray-400 rounded-t-lg`}
            >
              <span className="text-lg text-black-60 font-work-sans">
                Wishlist Books
              </span>
            </Link>
          </div>
        </div>

        {/* books */}
        <div className="grid gap-6">
          {tabIndex === 1
            ? readList.map((book) => <BookCard key={book.bookId} book={book} />)
            : wishList.map((book) => (
                <BookCard key={book.bookId} book={book} />
              ))}
        </div>
      </div>
    </section>
  );
};

ListedBooks.propTypes = {};

export default ListedBooks;
