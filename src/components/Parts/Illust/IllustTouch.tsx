import Slider from "react-slick";
import Style from "./Style";

const Touch = ({ touch }: { touch: { value: string; key: string } }) => {
  const style =
    touch.key === "anime"
      ? Style.anime
      : touch.key === "picture"
      ? Style.picture
      : touch.key === "baroque"
      ? Style.baroque
      : touch.key === "colorful"
      ? Style.colorful
      : touch.key === "fantasy"
      ? Style.fantasy
      : touch.key === "ffuture"
      ? Style.ffuture
      : touch.key === "oil"
      ? Style.oil
      : touch.key === "will"
      ? Style.will
      : touch.key === "water"
      ? Style.water
      : touch.key === "pen"
      ? Style.pen
      : touch.key === "pencil"
      ? Style.pencil
      : touch.key === "stained"
      ? Style.stained
      : Style.ukiyoe;
  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <>
      <div className="h-[6.125em] w-[6.125em]">
        <Slider {...settings}>
          <img src={style.one} alt="" className="" />
          <img src={style.two} alt="" className="" />
          <img src={style.three} alt="" className="" />
          <img src={style.four} alt="" className="" />
        </Slider>
      </div>
      <div className=" py-6 text-center">
        <p>
          {touch.value === "バロック絵画"
            ? touch.value.slice(0, -2)
            : touch.value}
          風に
        </p>
        <p>作成中</p>
      </div>
    </>
  );
};
export default Touch;
