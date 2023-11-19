import { random } from "gsap-trial/src/all";
import { ButtonNext, ButtonBack } from "pure-react-carousel";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { GETURL, ID } from "../../GrobalState/Recoil";

const Confirm = ({ title, tech }: { title: string; tech: string[] }) => {
  const newTech = tech.map((data) => {
    return data.slice(0, -1);
  });
  const id = useRecoilValue(ID);
  const url = useRecoilValue(GETURL);
  const text = [
    {
      value: "写真",
      key: "picture",
    },
    { value: "アニメ", key: "anime" },
    { value: "バロック絵画", key: "baroque" },
    { value: "ペン画", key: "pen" },
    { value: "鉛筆画", key: "pencil" },
    { value: "近未来", key: "will" },
    { value: "幻想未来", key: "ffuture" },
    { value: "カラフル", key: "colorful" },
    { value: "ファンタジー", key: "fantasy" },
    { value: "油絵", key: "oil" },
    { value: "浮世絵", key: "ukiyoe" },
    { value: "水彩画", key: "water" },
    { value: "ステンドグラス", key: "stained" },
  ];
  const touch = useMemo(() => {
    const num = Math.floor(Math.random() * 12);
    return text[num];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="px-[10px] pt-[56px]">
        <h2 className="mb-6 text-center text-[22px]">確認画面</h2>
        <ul
          className={`  ${
            newTech.length === 1
              ? "mx-[89px] justify-center"
              : "mx-[20px] flex flex-wrap justify-between gap-x-[11px] gap-y-[24px]"
          }`}
        >
          {newTech.length === 1 ? (
            <li className="bg-confirmPurple bg-contain bg-center bg-no-repeat py-[50px] text-center text-[22px]">
              {newTech[0]}
            </li>
          ) : (
            newTech.map((data) => (
              <li className="w-[calc(50%-11px)] bg-confirmPurple bg-contain bg-center bg-no-repeat py-[42px] text-center ">
                {data}
              </li>
            ))
          )}
        </ul>
        <p
          className={`${
            newTech.length === 1 ? "py-[28px] pt-[22px]" : "pt-[1px] pb-[4px]"
          } text-center text-[22px]`}
        >
          の
        </p>
        <h3 className="mx-[92px] bg-confirmTitle bg-contain bg-center bg-no-repeat py-[50px] text-center text-[20px]">
          {title}
        </h3>
        <div className="mx-auto mt-8 flex w-fit text-center text-[18px]">
          <ButtonBack className="px-[42px] pt-[10px] pb-[31px]">
            もどる
          </ButtonBack>
          <Link
            to="/Illust/create"
            state={{ title: title, tech: tech, id: id, url: url, touch: touch }}
            className="bg-next bg-contain bg-no-repeat px-[33px] pt-[10px] pb-[31px] text-white "
          >
            けってい
          </Link>
        </div>
      </div>
    </>
  );
};
export default Confirm;
