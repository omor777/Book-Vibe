import { useEffect, useState } from "react";

const useLoadBooksData = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("/books.json")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setIsLoading(false);
      });
  }, []);

  return { isLoading, books };
};

export default useLoadBooksData;
