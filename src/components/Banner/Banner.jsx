import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../assets/banner.png";
import Button from "../Button/Button";

const Banner = () => {
  return (
    <section className="container">
      <div className="px-[120px] py-20 bg-black-5 rounded-3xl flex flex-wrap items-center justify-between">
        <div className="order-2 sm:order-1">
          <h2 className="text-56px text-black-100 font-bold font-playFair-display leading-84px max-w-[32.875rem] mb-12">
            Books to freshen up your bookshelf
          </h2>
          <Link to={"/listed_books"}>
            <Button bgColor={"#23BE0A"}>View The List</Button>
          </Link>
        </div>
        <div className="order-1 sm:order-2">
          <img src={bannerImg} alt="banner-image" />
        </div>
      </div>
    </section>
  );
};

Banner.propTypes = {};

export default Banner;
