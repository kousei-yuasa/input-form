import IllustHead from "../View/Illust/IllustHead";
import IllustBody from "../View/Illust/IllustBody";
import { useEffect } from "react";
const Illust = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className=" bg-[#404040] font-maru text-white ">
        <div className="">
          <IllustHead />
        </div>
        <div className="bg-[#2d2d2d] pt-[36px]">
          <IllustBody />
        </div>
      </div>
    </>
  );
};
export default Illust;
