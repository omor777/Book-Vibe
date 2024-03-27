import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

import {
  getDataFromLocalStorage,
  saveDataToLocalStorage,
} from "../../utils/localStorage";
import { toast } from "react-toastify";

const BookDetails = () => {
  const [readList, setReadList] = useState([]);
  const { id } = useParams();
  const books = useLoaderData();
  const book = books.find((book) => book.bookId == id);

  useEffect(() => {
    const readListLs = getDataFromLocalStorage("read");
    setReadList(readListLs);
  }, []);

  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;

  const handleAddToRead = () => {
    saveDataToLocalStorage(
      book,
      "read",
      "You have already read this book!",
      "Book added to read list"
    );

    const readListLs = getDataFromLocalStorage("read");
    setReadList(readListLs);
  };

  // console.log(readList);

  const handleAddToWishlist = () => {
    const isAlreadyAddToReadList = readList.find(
      (item) => item.bookId == Number(id)
    );
    if (isAlreadyAddToReadList) {
      toast.error("You have already read this book!");
    } else {
      saveDataToLocalStorage(
        book,
        "wishlist",
        "You have already added to wishlist",
        "Book  added to wishlist"
      );
    }
  };

  return (
    <section className="container mb-32 px-4 lg:px-0 mt-16">
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="rounded-2xl bg-black-5 flex p-8 sm:p-10 lg:p-16 items-center justify-center  lg:col-span-7 ">
          <img className="w-[70%] object-cover" src={image} alt="book-image" />
        </div>
        <div className="lg:col-span-5">
          <h1 className="text-black-100 font-bold font-playFair-display text-40px">
            {bookName}
          </h1>
          <p className="text-black-80 mt-4 font-work-sans text-xl font-medium">
            By : {author}
          </p>
          <div className="divider"></div>
          <p className="text-black-80 mt-4 font-work-sans text-xl font-medium">
            {category}
          </p>
          <div className="divider"></div>
          <p className="text-black-70 font-work-sans leading-26px">
            <span className="font-bold text-black-100">Review</span> : {review}
          </p>
          <div className="flex items-center gap-3 mt-6">
            <p className="text-black-100 mr-1 font-bold font-work-sans">Tag</p>
            <button className="btn btn-sm rounded-full bg-green-5 text-green-900 hover:bg-green-5 hover:border-green-5 font-work-sans">
              #{tags[0]}
            </button>
            <button className="btn btn-sm rounded-full bg-green-5 text-green-900 hover:bg-green-5 hover:border-green-5 font-work-sans">
              #{tags[1]}
            </button>
          </div>
          <div className="divider"></div>
          <div className="relative overflow-x-auto">
            <table className=" text-left  ">
              <thead>
                <tr>
                  <td scope="col" className="text-black-70 font-work-sans py-3">
                    Number of Pages:
                  </td>
                  <td
                    scope="col"
                    className="text-black-100 font-semibold font-work-sans py-3 pl-14"
                  >
                    {totalPages}
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-black-70 font-work-sans py-3">
                    Publisher:
                  </td>
                  <td className="text-black-100 font-semibold font-work-sans py-3 pl-14">
                    {publisher}
                  </td>
                </tr>
                <tr>
                  <td className="text-black-70 font-work-sans py-3">
                    Year of Publishing:
                  </td>
                  <td className=" text-black-100 font-semibold font-work-sans py-3 pl-14">
                    {yearOfPublishing}
                  </td>
                </tr>
                <tr>
                  <td className="text-black-70 font-work-sans py-3">Rating:</td>
                  <td className=" text-black-100 font-semibold font-work-sans py-3 pl-14">
                    {rating}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex items-center gap-4 flex-wrap mt-7">
            <button
              onClick={handleAddToRead}
              className="btn bg-white rounded-lg border border-black-30 px-7 hover:bg-green-400 hover:text-white text-lg font-work-sans font-semibold text-black-100"
            >
              Read
            </button>
            <button
              onClick={handleAddToWishlist}
              className="btn bg-sky-blue-2 rounded-lg border border-sky-blue-2 text-white hover:bg-sky-blue-2 px-7  text-lg font-work-sans font-semibold "
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

BookDetails.propTypes = {};

export default BookDetails;
