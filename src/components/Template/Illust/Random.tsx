import One from "../../Parts/Random/One";
import Two from "../../Parts/Random/Two";
import Three from "../../Parts/Random/Three";
import Four from "../../Parts/Random/Four";
import { ButtonNext, ButtonBack } from "pure-react-carousel";
import { useState } from "react";
import Batu from "../../../assets/images/batu.webp";

const RandomTitle = ({
  number,
  text,
  textChange,
}: {
  number: number;
  text: string;
  textChange: any;
}) => {
  const ComponentArray = [
    <One text={text} textChange={textChange} />,
    <Two text={text} textChange={textChange} />,
    <Three text={text} textChange={textChange} />,
    <Four text={text} textChange={textChange} />,
  ];

  const [modal, setModal] = useState(false);
  const handleClick = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <div className="relative mb-[55px] px-[10px] pt-[56px]">
        <div className="">
          <h2 className="mx-auto w-fit pb-8 text-center text-[22px]">
            称号を選択してください
          </h2>
          {ComponentArray[number]}
          <div className="mx-auto mt-8 flex w-fit text-[18px]">
            <ButtonBack className="px-[42px] pt-[10px] pb-[31px]">
              もどる
            </ButtonBack>
            {text === "" ? (
              <p
                onClick={handleClick}
                className=" px-[42px] pt-[10px] pb-[31px]"
              >
                つぎへ
              </p>
            ) : (
              <ButtonNext className="bg-next bg-contain bg-no-repeat px-[42px] pt-[10px] pb-[31px]">
                つぎへ
              </ButtonNext>
            )}
          </div>
        </div>
        {modal ? (
          <div className="absolute top-[0] left-[-10px] z-50 h-[108%] w-screen bg-black/50">
            <div onClick={closeModal} className="h-[42.5%] w-full"></div>
            <div className="relative mx-auto w-fit">
              <p className="bg-noSelect bg-contain bg-no-repeat px-[46px] py-[48px]">
                選択してください
              </p>
              <button
                onClick={closeModal}
                className="absolute inset-x-0 bottom-[-11px] mx-auto block h-[36.72px] w-[36.72px] bg-batu bg-contain bg-no-repeat"
              ></button>
            </div>
            <div onClick={closeModal} className="h-[42.5%] w-full"></div>
          </div>
        ) : null}
      </div>
    </>
  );
};
export default RandomTitle;
