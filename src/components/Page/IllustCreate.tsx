import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import "../../App.css";
import { useState, useRef, useEffect } from "react";
import ColumnSlide from "../Parts/Illust/Column";
import axios from "axios";
import CreateConfirm from "../Template/Illust/create/Confirm";
import Touch from "../Parts/Illust/IllustTouch";
import Congrat from "../Template/Illust/create/Congrat";
const IllustCreate = () => {
  const location = useLocation();
  const { tech, title, id, url, touch } = location.state;
  const comment =
    title +
    "、" +
    touch.value +
    "、" +
    tech.reduce((data: string, da: string) => {
      return data + da;
    });
  // const comment = "スター、水彩画、アイデア・コンセプト・着眼点・";
  const [Three, setThree] = useState<boolean>(false);
  const sliderRef = useRef<Slider>(null);
  const [imgLink, setImgLink] = useState<string>();
  const set = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: false,
    beforeChange: function (currentSlide: number, nextSlide: number) {},
    afterChange: function (currentSlide: number) {
      currentSlide === 2 ? setThree(true) : console.log();
    },
    cssEase: "linear",
    speed: 1000,
    adaptiveHeight: true,
    variableHeight: true,
    arrows: false,
  };
  let bool = true;
  console.log(sliderRef.current);
  useEffect(() => {
    axios.defaults.baseURL =
      "https://event.jec.ac.jp/connect_illust/jsd_local/";
    // 2022 → illust
    axios.defaults.headers.post["Content-Type"] =
      "application/json;charset=utf-8";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    const wakati = () => {
      axios
        .get(`?text=${comment}`)
        .then(function (res) {
          if (sliderRef?.current) {
            sliderRef.current.slickNext();
          }
          setImgLink(res.data.text);
        })
        .catch((err) => {
          // if (sliderRef?.current) {
          //   wakati();
          // }
          console.error("errorです", err);
        });
    };
    bool ? wakati() : console.log("");
    return () => {
      bool = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const slide = () => {
    sliderRef.current ? sliderRef.current.slickNext() : console.log("");
  };
  return (
    <>
      <div className="fixed overflow-hidden">
        <Slider ref={sliderRef} {...set}>
          <div
            className="relative top-[-25px] z-10 flex h-[calc(100vh+25px)] items-center justify-center overflow-y-hidden font-maru text-white"
            // onTouchMove={HandleTouchMove}
          >
            <ColumnSlide />
            <div className="relative z-30 mx-[1.875em] overflow-y-hidden ">
              <div className=" mt-[25px] flex h-screen shrink-0 flex-col items-center justify-center text-center">
                <h1 className=" shrink-0 text-[18px] text-white">
                  イラスト作成中<span className="animate-appearFour">.</span>
                  <span className="animate-appearFive">.</span>
                  <span className="animate-appearSix">.</span>
                </h1>
                <div className="mt-[4.0625rem] mb-8 w-full shrink-0 bg-create bg-contain bg-no-repeat">
                  <p className="pt-8 text-[18px]">絵のスタイル</p>
                  <div className="mt-6 flex justify-center gap-[16px] pl-[29px] pr-[28px] pb-[4.6875rem]">
                    <Touch touch={touch} />
                  </div>
                </div>
                <p>数分かかる場合があります</p>
                <p className="mt-2">※リロードしないでください</p>
              </div>
            </div>
          </div>
          <div
            className={`relative z-30 ${
              imgLink ? "mt-[-25px]" : "mt-0 "
            } h-[calc(100vh+25px)] bg-bgFour bg-cover bg-no-repeat`}
          >
            {imgLink ? (
              <CreateConfirm
                src={imgLink}
                tech={tech}
                title={title}
                id={id}
                url={url}
                slide={slide}
                comment={comment}
              />
            ) : null}
          </div>
          <div className="h-screen w-screen bg-black">
            {Three ? <Congrat url={url} /> : null}
          </div>
        </Slider>
      </div>
    </>
  );
};
export default IllustCreate;
