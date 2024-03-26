import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import BookCard from "../../components/BookCard/BookCard";
import { getDataFromLocalStorage } from "../../utils/localStorage";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const [readList, setReadList] = useState([]);
  const [sortedReadList, setSortedReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sortedWishList, setSortedWishlist] = useState([]);

  useEffect(() => {
    const readBooks = getDataFromLocalStorage("read");
    const wishListBooks = getDataFromLocalStorage("wishlist");
    setReadList(readBooks);
    setSortedReadList(readBooks);

    setWishList(wishListBooks);
    setSortedWishlist(wishListBooks);
  }, []);

  const handleSortBookList = (e) => {
    const sortValue = e.target.value;
    if (tabIndex === 1) {
      if (sortValue === "rating") {
        const sortReadList = [...readList].sort((a, b) => b.rating - a.rating);
        setSortedReadList(sortReadList);
      } else if (sortValue === "pages") {
        const sortReadList = [...readList].sort(
          (a, b) => b.totalPages - a.totalPages
        );
        setSortedReadList(sortReadList);
      } else if (sortValue === "year") {
        const sortReadList = [...readList].sort(
          (a, b) => b.yearOfPublishing - a.yearOfPublishing
        );
        setSortedReadList(sortReadList);
      } else {
        setSortedReadList(readList);
      }
    } else if (tabIndex === 2) {
      if (sortValue === "rating") {
        const wishlistSorted = [...wishList].sort(
          (a, b) => b.rating - a.rating
        );
        setSortedWishlist(wishlistSorted);
      } else if (sortValue === "pages") {
        const wishlistSorted = [...wishList].sort(
          (a, b) => b.totalPages - a.totalPages
        );
        setSortedWishlist(wishlistSorted);
      } else if (sortValue === "year") {
        const wishlistSorted = [...wishList].sort(
          (a, b) => b.yearOfPublishing - a.yearOfPublishing
        );
        setSortedWishlist(wishlistSorted);
      } else {
        setSortedWishlist(wishList);
      }
    }
  };

  // console.log(readList);

  return (
    <section className="container mb-32 px-4 lg:px-0">
      <div>
        <h3 className="bg-black-5 py-4 lg:py-8 rounded-2xl font-work-sans text-28px text-black-100 font-bold text-center">
          Books
        </h3>
        <div className="flex   justify-center mt-8">
          <select
            onChange={handleSortBookList}
            className="select select-success  bg-green-900 text-white lg:select-lg font-work-sans text-lg font-semibold"
          >
            <option>Sorted By</option>
            <option value={"rating"}>Rating</option>
            <option value={"pages"}>Number of pages</option>
            <option value={"year"}>Publisher year</option>
          </select>
        </div>

        <div className="mt-12 mb-8">
          <div className="flex items-center  overflow-x-auto overflow-y-hidden flex-nowrap">
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
            ? sortedReadList.map((book) => (
                <BookCard key={book.bookId} book={book} />
              ))
            : sortedWishList.map((book) => (
                <BookCard key={book.bookId} book={book} />
              ))}
        </div>
      </div>
    </section>
  );
};

export default ListedBooks;
