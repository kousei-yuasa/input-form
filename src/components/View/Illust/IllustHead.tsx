import purple from "../../../assets/images/head/purple.webp";
import green from "../../../assets/images/head/green.webp";
import blue from "../../../assets/images/head/blue.webp";
import orange from "../../../assets/images/head/orange.webp";
import bound from "../../../assets/images/bound.webp";
const IllustHead = () => {
  return (
    <>
      <div className="relative h-[766px] bg-[#404040] after:content-[]">
        <img
          src={purple}
          alt=""
          className="absolute top-[85px] z-0 w-[206.84px]"
        />
        <img
          src={green}
          alt=""
          className="absolute right-[0] top-[260px] w-[93px]"
        />
        <img
          src={blue}
          alt=""
          className="absolute bottom-[244px] left-[8px] w-[72.57px]"
        />
        <img
          src={orange}
          alt=""
          className="absolute bottom-[104px] right-[10px] w-[82.56px]"
        />
        <h2 className="relative z-30 pt-[184px] text-center text-[22px] font-bold">
          作品の良い部分を選択し
          <br />
          学生に称号を与えてください
        </h2>
        <h2 className="pt-[88px] text-center text-[22px] font-bold">
          称号をもとに
          <br />
          <span className="text-[#F6D727]">AI</span>がイラストを描きます
        </h2>
        <div className="mx-auto mt-[95px] w-fit bg-gray bg-contain bg-no-repeat pb-[27px] pt-[28px] pl-[50px] pr-[49px]">
          <p className="text-center text-[18px] font-bold text-[#F6D727]">
            〇〇<span className="text-white">の</span>〇〇
          </p>
          <p className="mt-[3px] text-center text-[16px] font-bold">
            例：色彩の達人
          </p>
        </div>
        <img src={bound} alt="" className="absolute bottom-[0] left-0 z-30" />
        <div className="absolute bottom-0 z-20 block h-[55px] w-full bg-[#2D2D2D]"></div>
      </div>
    </>
  );
};
export default IllustHead;
