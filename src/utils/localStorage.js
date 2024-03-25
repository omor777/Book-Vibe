import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const getDataFromLocalStorage = (key) => {
  const books = JSON.parse(localStorage.getItem(`${key}`));
  if (books) {
    return books;
  }
  return [];
};

const saveDataToLocalStorage = (item, key, errorMsg, successMsg) => {
  const books = getDataFromLocalStorage(key);
  const exist = books.find((book) => book.bookId === item.bookId);
  if (!exist) {
    books.push(item);
    localStorage.setItem(`${key}`, JSON.stringify(books));
    toast.success(successMsg);
  } else {
    toast.error(errorMsg);
  }
};

export { getDataFromLocalStorage, saveDataToLocalStorage };
