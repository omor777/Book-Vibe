
import { Link } from "react-router-dom";
import bannerImg from "../../assets/banner.png";
import Button from "../Button/Button";

const Banner = () => {
  return (
    <section className="container">
      <div className="lg:px-[120px] py-8 px-10 lg:py-20 bg-black-5 rounded-3xl grid grid-cols-1 md:grid-cols-[1fr_max(5vw,_318px)] gap-6 items-center ">
        <div className="order-2 md:order-1">
          <h2 className="text-[clamp(26px,5vw,56px)] text-black-100 font-bold font-playFair-display lg:leading-84px lg:max-w-[32.875rem] mb-6 lg:mb-12 text-center md:text-left">
            Books to freshen up your bookshelf
          </h2>
          <Link
            className="flex items-center justify-center md:justify-start"
            to={"/listed_books"}
          >
            <Button bgColor={"#23BE0A"}>View The List</Button>
          </Link>
        </div>
        <div className="order-1 md:order-2 flex items-center justify-center">
          <img
            className="lg:max-w-full w-7/12 lg:w-auto"
            src={bannerImg}
            alt="banner-image"
          />
        </div>
      </div>
    </section>
  );
};

Banner.propTypes = {};

export default Banner;
