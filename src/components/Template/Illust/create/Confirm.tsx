import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import {
  firestore,
  storage,
  secondaryFireStore,
  secondaryStorage,
} from "../../../../firebase";
import { doc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import Swipe from "../../../Parts/Illust/Swipe";
import { useSwipeable } from "react-swipeable";
import arrow from "../../../../assets/images/create/arrow.webp";
import left from "../../../../assets/images/create/left.webp";
import right from "../../../../assets/images/create/right.webp";
import { useRecoilValue } from "recoil";
import { UserName, GETURL } from "../../../GrobalState/Recoil";
import { ref, uploadBytesResumable, uploadString } from "firebase/storage";

const CreateConfirm = ({
  src,
  tech,
  title,
  id,
  url,
  slide,
  comment,
}: {
  src: any;
  tech: string[];
  title: string;
  id: string;
  url: string;
  slide: any;
  comment: string;
}) => {
  const userName = useRecoilValue(UserName);
  const userID = useRecoilValue(GETURL);
  const messageTech = tech.reduce((data: string, text: string) => {
    return data + text;
  });
  const message = messageTech.slice(0, -1) + "の" + title;
  const gMessage = useRef<null | HTMLParagraphElement>(null);
  useEffect(() => {
    gsap.to(gMessage.current, {
      opacity: 1,
      duration: 1,
      delay: 2,
    });
  }, [gMessage]);
  const gleft = useRef<null | HTMLImageElement>(null);

  useEffect(() => {
    gsap.to(gleft.current, {
      opacity: 1,
      duration: 1,
      delay: 1,
    });
  }, [gleft]);
  const gright = useRef<null | HTMLImageElement>(null);
  useEffect(() => {
    gsap.to(gright.current, {
      opacity: 1,
      duration: 1,
      delay: 1,
    });
  }, [gright]);
  const gswipe = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    gsap.to(gswipe.current, {
      opacity: 20,
      duration: 1,
      delay: 4,
    });
  }, [gswipe]);
  const garrow = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    gsap.to(garrow.current, {
      opacity: 1,
      duration: 1,
      delay: 6,
    });
  }, [garrow]);
  const gtext = useRef<null | HTMLDivElement>(null);
  const gtextTwo = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(gtext.current, {
      opacity: 1,
      duration: 1,
      delay: 6,
    });
    gsap.to(gtextTwo.current, {
      opacity: 10,
      duration: 1,
      delay: 6,
    });
  }, [gtext]);

  const [text, setText] = useState<number>(0);
  const handlers = useSwipeable({
    onSwiping: (event) => {
      if (event.dir === "Up") {
        setText(event.absY);
        const func = async () => {
          const profileCloud = doc(firestore, "userTitle", url);
          const profileStorage = ref(storage, `/files/${userID}/${comment}`);
          uploadString(profileStorage, src, "base64", {
            contentType: "image/jpg",
          });
          const galleryStorage = ref(
            secondaryStorage,
            `/files/${userID}/${comment}`
          );
          await uploadString(galleryStorage, src, "base64", {
            contentType: "image/jpg",
          });
          setDoc(
            profileCloud,
            { [id]: { img: comment, title: message } },
            { merge: true }
          );
          const galleryCloud = doc(secondaryFireStore, "gallery", "data");
          updateDoc(galleryCloud, {
            array: arrayUnion({
              name: userName,
              img: comment,
              id: userID,
              title: message,
            }),
          });
          slide();
        };
        if (event.absY > 150) {
          console.log("通過したよ");
          func();
        }
      }
    },
    trackMouse: true, //マウス操作でのスワイプを許可する場合はtrue
  });
  return (
    <>
      <div className="relative flex h-screen flex-col items-center justify-center px-[30px] text-center font-maru text-white">
        <div className="opacity-0" ref={garrow}>
          <img
            src={arrow}
            alt=""
            className="mx-auto  w-1/2 animate-appearOne"
          ></img>
          <img
            src={arrow}
            alt=""
            className="mx-auto mt-8 w-1/2 animate-appearTwo"
          ></img>
          <img
            src={arrow}
            alt=""
            className="mx-auto mt-8 w-1/2 animate-appearThree"
          ></img>
        </div>
        <div ref={gtext} className="opacity-0">
          <p className="mt-7 text-center text-[18px]">ギャラリーに転送します</p>
          <h3 className="mt-2 text-center text-[22px] text-[#F6D727]">
            スワイプしてください
          </h3>
        </div>
        <div ref={gswipe} className="opacity-0">
          <Swipe
            src={`data:image/png;base64,${src}`}
            handlers={handlers}
            text={text}
          />
        </div>
        <img
          ref={gleft}
          src={left}
          alt=""
          className="absolute left-0 top-[40%] z-[1] w-[44.5%] opacity-0"
        />
        <img
          ref={gright}
          src={right}
          alt=""
          className="absolute right-0 top-[58%]  z-[1] w-[44.5%] opacity-0"
        />
        <p className="mt-[100%] opacity-0" ref={gMessage}>
          {message}
        </p>
      </div>
    </>
  );
};
export default CreateConfirm;
