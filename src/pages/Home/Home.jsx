import React from "react";
import Banner from "../../components/Banner/Banner";
import BooksList from "../../components/BooksList/BooksList";

const Home = (props) => {
  return (
    <div>
      {/* <Banner /> */}
      <BooksList />
    </div>
  );
};

Home.propTypes = {};

export default Home;
