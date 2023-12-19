import React from "react";
import "./Category.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import bg from "../../../assets/category/category-bg-1.jpg";
import cardImg from "../../../assets/category/category-hover-1.png";
import presentation from "../../../assets/category/books.png";

const CategoryCard = () => {
  return (
    <div className="category-card">
      <img src={cardImg} alt="" />
      <div className="icon-img">
        <img src={presentation} alt="" />
      </div>
      <div className="white-overlay"></div>
      <div className="topic">
        <h2>Business Analysis</h2>
        <h5>6 Courses</h5>
      </div>
    </div>
  );
};

const Category = () => {
  return (
    <div className="category-section">
      <img src={bg} alt="" />
      <h4>Category</h4>
      <h2>Favorite Topics To Learn</h2>
      <Swiper
        autoplay={{
          delay: 255500,
          pauseOnMouseEnter: true,
        }}
        slidesPerView={4}
        spaceBetween={35}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        // breakpoints={{
        //   640: {
        //     slidesPerView: 2,
        //     navigation: true,
        //   },
        //   768: {
        //     slidesPerView: 3,
        //     navigation: false,
        //   },
        // }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper all-category-cards"
      >
        {[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <CategoryCard />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Category;
