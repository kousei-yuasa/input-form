import One from "../../../assets/images/columnSlide/imageone.webp";
import Two from "../../../assets/images/columnSlide/imagetwo.webp";
import Three from "../../../assets/images/columnSlide/imagethree.webp";
import Slider from "react-slick";
import "../../../App.css";
const ColumnSlide = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrow: false,
  };
  return (
    <>
      <div className="absolute top-0 left-0 z-10">
        <Slider {...settings}>
          <img
            src={Three}
            alt=""
            className="m-auto mt-[-30px] block w-screen "
          />
          <img src={One} alt="" className="m-auto mt-[-30px] block w-screen" />
          <img src={Two} alt="" className="m-auto mt-[-30px] block w-screen" />
        </Slider>
      </div>
    </>
  );
};
export default ColumnSlide;
