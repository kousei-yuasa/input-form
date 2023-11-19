import { useRef, useEffect } from "react";
import One from "../../../../assets/images/create/one.webp";
import Two from "../../../../assets/images/create/two.webp";
import Three from "../../../../assets/images/create/three.webp";
import Four from "../../../../assets/images/create/four.webp";
import Five from "../../../../assets/images/create/five.webp";
import Six from "../../../../assets/images/create/six.webp";
import Seven from "../../../../assets/images/create/seven.webp";
import Eight from "../../../../assets/images/create/eight.webp";
import Nine from "../../../../assets/images/create/nine.webp";
import Ten from "../../../../assets/images/create/ten.webp";
import Eleven from "../../../../assets/images/create/eleven.webp";
import Twelve from "../../../../assets/images/create/twelve.webp";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const Congrat = ({ url }: { url: string }) => {
  const one = useRef<HTMLImageElement | null>(null);
  const two = useRef<HTMLImageElement | null>(null);
  const three = useRef<HTMLImageElement | null>(null);
  const four = useRef<HTMLImageElement | null>(null);
  const five = useRef<HTMLImageElement | null>(null);
  const six = useRef<HTMLImageElement | null>(null);
  const seven = useRef<HTMLImageElement | null>(null);
  const eight = useRef<HTMLImageElement | null>(null);
  const nine = useRef<HTMLImageElement | null>(null);
  const ten = useRef<HTMLImageElement | null>(null);
  const eleven = useRef<HTMLImageElement | null>(null);
  const twelve = useRef<HTMLImageElement | null>(null);

  const back = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    gsap.to(one.current, {
      opacity: 1,
      duration: 0.15,
      delay: 3,
      width: "60%",
      y: -10,
    });
  }, [one]);
  useEffect(() => {
    gsap.to(two.current, {
      opacity: 1,
      duration: 0.15,
      // y: -5,
      width: "100%",
      delay: 2.5,
    });
  }, [two]);
  useEffect(() => {
    gsap.to(three.current, {
      opacity: 1,
      duration: 0.15,
      width: "44.5%",
      delay: 2,
    });
  }, [three]);
  useEffect(() => {
    gsap.to(four.current, {
      opacity: 1,
      duration: 0.15,
      width: "60%",
      delay: 3,
    });
  }, [four]);
  useEffect(() => {
    gsap.to(five.current, {
      opacity: 1,
      duration: 0.15,
      delay: 3,
      width: "44.5%",
    });
  }, [five]);
  useEffect(() => {
    gsap.to(six.current, {
      opacity: 1,
      duration: 0.2,
      delay: 3.5,
      width: "60%",
    });
  }, [six]);
  useEffect(() => {
    gsap.to(seven.current, {
      opacity: 1,
      duration: 0.15,
      delay: 2.8,
      width: "44.5%",
    });
  }, [seven]);
  useEffect(() => {
    gsap.to(eight.current, {
      opacity: 1,
      duration: 0.2,
      delay: 1.4,
      width: "55%",
    });
  }, [eight]);
  useEffect(() => {
    gsap.to(nine.current, {
      opacity: 1,
      duration: 0.15,
      delay: 2,
      width: "60%",
    });
  }, [nine]);
  useEffect(() => {
    gsap.to(ten.current, {
      opacity: 1,
      duration: 0.15,
      delay: 3,
      width: "44.5%",
    });
  }, [ten]);
  useEffect(() => {
    gsap.to(eleven.current, {
      opacity: 1,
      duration: 0.15,
      delay: 1.8,
      width: "71.5%",
    });
  }, [eleven]);
  useEffect(() => {
    gsap.to(twelve.current, {
      opacity: 1,
      duration: 0.15,
      delay: 1.2,
      width: "44.5%",
    });
  }, [twelve]);
  useEffect(() => {
    gsap.to(back.current, {
      backgroundColor: "#E0266D",
      duration: 1,
      delay: 4,
    });
  }, [back]);
  const text = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    gsap.to(text.current, {
      opacity: 1,
      duration: 2,
      delay: 5,
    });
  }, [text]);
  return (
    <>
      <div
        className="relative h-screen w-screen bg-black font-maru text-[22px] text-white"
        ref={back}
      >
        <img
          src={One}
          alt=""
          ref={one}
          className="-translate-x-1/5 absolute top-[30px] left-0 w-[40%] opacity-0"
        />
        <img
          src={Two}
          alt=""
          ref={two}
          className="-translate-x-2/5 absolute top-[100px] left-0 w-[80%] opacity-0 "
        />
        <img
          src={Three}
          alt=""
          ref={three}
          className="absolute top-[11px] right-0 w-[24.5%] -translate-x-0 opacity-0"
        />
        <img
          src={Four}
          alt=""
          ref={four}
          className="absolute bottom-0 right-0 w-[40%] -translate-x-0 opacity-0"
        />
        <img
          src={Five}
          alt=""
          ref={five}
          className="absolute top-[51px] right-[49px] w-[34.5%] -translate-x-2 opacity-0"
        />
        <img
          src={Six}
          alt=""
          ref={six}
          className="absolute top-[193px] right-0 w-[50%] translate-x-1 opacity-0"
        />
        <img
          src={Seven}
          alt=""
          ref={seven}
          className="absolute top-[303px] left-0 w-[34.5%] opacity-0"
        />
        <img
          src={Eight}
          alt=""
          ref={eight}
          className="absolute bottom-[272px] left-[97px] w-[35%] -translate-x-1 opacity-0"
        />
        <img
          src={Nine}
          alt=""
          ref={nine}
          className="-translate-y-1/5 absolute bottom-[204px] right-0 w-[40%] opacity-0"
        />
        <img
          src={Ten}
          alt=""
          ref={ten}
          className="absolute bottom-[79px] left-0 w-[34.5%] -translate-y-1 opacity-0"
        />
        <img
          src={Eleven}
          alt=""
          ref={eleven}
          className="absolute bottom-0 left-0 w-[61.5%] -translate-x-1 opacity-0"
        />
        <img
          src={Twelve}
          alt=""
          ref={twelve}
          className="absolute top-[357px] left-0 w-[34.5%] opacity-0"
        />
        <div className="opacity-0" ref={text}>
          <p className="absolute left-[50%] top-[40%] translate-x-[-50%]">
            転送完了
          </p>
          <Link
            to={`/input?userID=${url}`}
            className="absolute bottom-[22%] left-[50%] translate-x-[-50%] bg-topback bg-contain bg-no-repeat px-[42px] pt-[10px] pb-[31px] text-[18px]"
          >
            TOP
          </Link>
        </div>
      </div>
    </>
  );
};
export default Congrat;
