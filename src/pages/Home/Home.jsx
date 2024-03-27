import Banner from "../../components/Banner/Banner";
import BooksList from "../../components/BooksList/BooksList";

const Home = () => {
  return (
    <div className="px-4 lg:px-0 mt-16">
      <Banner />
      <BooksList />
    </div>
  );
};

Home.propTypes = {};

export default Home;
