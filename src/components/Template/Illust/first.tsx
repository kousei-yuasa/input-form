import { useState, useEffect } from "react";
import { ButtonNext } from "pure-react-carousel";
import after from "../../../assets/images/after.webp";
const First = ({
  view,
  tagChange,
  viewText,
  ViewData,
  handleChange,
  Modal,
  closeSix,
}: {
  view: string;
  tagChange: any;
  viewText: any;
  ViewData: { text: string; bool: boolean }[];
  handleChange: any;
  Modal: boolean;
  closeSix: any;
}) => {
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  const text =
    viewText.length === 0
      ? ""
      : viewText.reduce((a: string, b: string) => {
          return a + b;
        });
  const Text = text.slice(0, -1);

  return (
    <>
      <div className="pt-[56px]">
        <div className="mx-auto w-fit text-center">
          <h2 className="text-[22px]">作品の良かったところ</h2>
          <p className="mt-4">
            合計<span className="text-[#F6D727]">６個</span>まで
          </p>
        </div>
        <div className="mt-[45px]  flex gap-[6px] text-[18px]">
          <button
            className={`h-fit w-1/3 ${
              view === "plan"
                ? "bg-change  bg-contain bg-no-repeat pb-[23.5px]"
                : " rounded-t-[25px] bg-[#7D35DE] pb-[9px]"
            }  pt-[12px]  leading-[26px]`}
            onClick={() => tagChange("plan")}
          >
            企画
          </button>
          <button
            className={`h-fit w-1/3  pt-[12px] ${
              view === "design"
                ? "bg-change bg-contain bg-no-repeat pb-[23.5px]"
                : "rounded-t-[25px] bg-[#7D35DE] pb-[9px]"
            } leading-[26px]`}
            onClick={() => tagChange("design")}
          >
            デザイン
          </button>
          <button
            className={` h-fit w-1/3  ${
              view === "coding"
                ? "bg-change  bg-contain bg-no-repeat pb-[23.5px]"
                : "rounded-t-[25px] bg-[#7D35DE] pb-[9px]"
            } pt-[12px]   leading-[26px]`}
            onClick={() => tagChange("coding")}
          >
            実装
          </button>
        </div>
        <div className=" mt-[-11px] rounded-b-[25px] bg-white/[13%]">
          <ul className=" flex flex-wrap pt-3 pb-5">
            {ViewData.map((data, Index) => (
              <li
                key={Index}
                onClick={() => handleChange(Index)}
                className={`w-1/2 px-[18px] py-[12px] text-center ${
                  data.bool ? "bg-true bg-contain bg-center bg-no-repeat" : null
                } `}
              >
                {data.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 text-center">
          <h2 className="text-[15px]">選択中のワード</h2>
          <img src={after} alt="" className="px-[109px] pt-[2px]" />
          <p className="mt-[8px] block">{Text}</p>
        </div>

        {Text === "" ? (
          <p
            onClick={handleClick}
            className="mx-auto w-fit px-[42px] pt-[10px] pb-[31px]"
          >
            つぎへ
          </p>
        ) : (
          <ButtonNext className="mx-auto mt-10 mb-[55px] block w-fit bg-next bg-contain bg-no-repeat px-[42px] pt-[11px] pb-[32px]">
            つぎへ
          </ButtonNext>
        )}
      </div>
      {modal ? (
        <div className=" fixed top-[0] left-[-10px] z-50 h-[108%] w-screen bg-black/50">
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
      {Modal ? (
        <div className=" fixed top-[0] left-[0] z-50 h-[108%] w-screen bg-black/50">
          <div onClick={closeModal} className="h-[42.5%] w-full"></div>
          <div className="relative mx-auto w-fit">
            <p className="bg-noSelect bg-contain bg-no-repeat px-[30px] py-[48px]">
              最大数を超えています
            </p>
            <button
              onClick={closeSix}
              className="absolute inset-x-0 bottom-[-11px] mx-auto block h-[36.72px] w-[36.72px] bg-batu bg-contain bg-no-repeat"
            ></button>
          </div>
          <div onClick={closeSix} className="h-[42.5%] w-full"></div>
        </div>
      ) : null}
    </>
  );
};
export default First;
// bg-change bg-contain
