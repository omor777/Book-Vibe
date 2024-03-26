import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import BookDetails from "../pages/BookDetails/BookDetails";
import Home from "../pages/Home/Home";
import ListedBooks from "../pages/ListedBooks/ListedBooks";
import PagesToRead from "../pages/PagesToRead/PagesToRead";
import Faq from "../pages/Faq/Faq";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/listed_books",
        element: <ListedBooks />,
      },

      {
        path: "/pages_to_read",
        element: <PagesToRead />,
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
        loader: () => fetch("/books.json"),
      },
      {
        path: "/faq",
        element: <Faq />,
      },
    ],
  },
]);

export default router;
