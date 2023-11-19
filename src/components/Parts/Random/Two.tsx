import Img from "../Illust/Img";
const Two = ({ text, textChange }: { text: string; textChange: any }) => {
  return (
    <>
      <div className="relative h-[560px] text-[14px]">
        <p
          onClick={() => {
            textChange("魔王");
          }}
          className={`${
            text === "魔王" ? "z-30" : "z-10 bg-three"
          } absolute top-[0] left-[0] bg-contain bg-no-repeat bg-origin-border pt-[15px] pb-[15px] pl-[28px] pr-[27px] text-center `}
        >
          魔王
        </p>
        {text === "魔王" ? <Img text={"left-[-11px] top-[-22px]"} /> : ""}
        <p
          onClick={() => {
            textChange("ディフェンダー");
          }}
          className={`${
            text === "ディフェンダー" ? "z-30" : "z-10 bg-five"
          } absolute top-[7px] left-[104px] bg-contain bg-no-repeat bg-origin-border pt-[23px] pb-[23px] pl-[15px] pr-[15px] text-center `}
        >
          ディフェンダー
        </p>
        {text === "ディフェンダー" ? (
          <Img text={"left-[115.1px] top-[-7px]"} />
        ) : (
          ""
        )}

        <p
          onClick={() => {
            textChange("イナズマ");
          }}
          className={`${
            text === "イナズマ" ? "z-30" : "z-10 bg-one"
          } absolute top-[0] right-[-10px] bg-contain bg-no-repeat bg-origin-border pt-[16px] pb-[16px] pl-[17px] pr-[17px] text-center `}
        >
          イナズマ
        </p>
        {text === "イナズマ" ? (
          <Img text={"right-[-14.8px] top-[-22px]"} />
        ) : (
          ""
        )}

        <p
          onClick={() => {
            textChange("ハンター");
          }}
          className={`${
            text === "ハンター" ? "z-30" : "z-10 bg-two"
          } absolute top-[73px] left-[-10px]  bg-contain bg-no-repeat bg-origin-border pt-[17px] pb-[17px] pl-[18px] pr-[19px] text-center `}
        >
          ハンター
        </p>
        {text === "ハンター" ? <Img text={"left-[-17px] top-[52.9px]"} /> : ""}
        <p
          onClick={() => {
            textChange("龍");
          }}
          className={`${
            text === "龍" ? "z-30" : "z-10 bg-ten"
          } absolute top-[93px] left-[115px] bg-contain bg-no-repeat bg-origin-border pt-[13px] pb-[14px] pl-[29px] pr-[29px] text-center `}
        >
          龍
        </p>
        {text === "龍" ? <Img text={"left-[98px] top-[68.7px]"} /> : ""}
        <p
          onClick={() => {
            textChange("金メダリスト");
          }}
          className={`${
            text === "金メダリスト" ? "z-30" : "z-10 bg-five"
          } absolute right-[0] top-[80px] bg-contain bg-no-repeat bg-origin-border pl-[17px] pt-[22px] pb-[22px] pr-[18px] text-center `}
        >
          金メダリスト
        </p>
        {text === "金メダリスト" ? (
          <Img text={"right-[7.2px] top-[64.7px]"} />
        ) : (
          ""
        )}

        <p
          onClick={() => {
            textChange("北条政子");
          }}
          className={`${
            text === "北条政子" ? "z-30" : "z-10 bg-six"
          } absolute top-[149px] left-[0] bg-contain bg-no-repeat bg-origin-border pt-[19px] pb-[19px] pl-[22px] pr-[22px] text-center `}
        >
          北条政子
        </p>
        {text === "北条政子" ? <Img text={"left-[-3px] top-[130.8px]"} /> : ""}
        <p
          onClick={() => {
            textChange("ソムリエ");
          }}
          className={`${
            text === "ソムリエ" ? "z-30" : "z-10 bg-twoOne"
          } absolute top-[165px] left-[127px] bg-contain bg-no-repeat bg-origin-border pt-[18px] pb-[18px] pl-[22px] pr-[21px] text-center `}
        >
          ソムリエ
        </p>
        {text === "ソムリエ" ? (
          <Img text={"left-[123.5px] top-[145.8px]"} />
        ) : (
          ""
        )}
        <p
          onClick={() => {
            textChange("英雄");
          }}
          className={`${
            text === "英雄" ? "z-30" : "z-10 bg-twoTwo"
          } absolute top-[172px] right-[-10px] bg-contain bg-no-repeat bg-origin-border pt-[18px] pb-[18px] pl-[32px] pr-[33px] text-center `}
        >
          英雄
        </p>
        {text === "英雄" ? <Img text={"right-[-17px] top-[154px]"} /> : ""}
        <p
          onClick={() => {
            textChange("ガーディアン");
          }}
          className={`${
            text === "ガーディアン" ? "z-30" : "z-10 bg-five"
          } absolute top-[226px] left-[-10px] bg-contain bg-no-repeat bg-origin-border pt-[23px] pb-[24px] pl-[21px] pr-[21px] text-center `}
        >
          ガーディアン
        </p>
        {text === "ガーディアン" ? <Img text={"left-[0] top-[211.9px]"} /> : ""}
        <p
          onClick={() => {
            textChange("新星");
          }}
          className={`${
            text === "新星" ? "z-30" : "z-10 bg-three"
          }  absolute top-[238px] right-[101px] bg-contain bg-no-repeat bg-origin-border pt-[16px] pb-[16px] pl-[29px] pr-[29px] text-center`}
        >
          新星
        </p>
        {text === "新星" ? <Img text={"right-[91px] top-[216.6px]"} /> : ""}
        <p
          onClick={() => {
            textChange("ガリバー");
          }}
          className={`${
            text === "ガリバー" ? "z-30" : "z-10 bg-five"
          }  absolute top-[256px] right-[-10px] bg-contain bg-no-repeat bg-origin-border pt-[16px] pb-[16px] pl-[18px] pr-[18px] text-center `}
        >
          ガリバー
        </p>
        {text === "ガリバー" ? <Img text={"right-[-18px] top-[234px]"} /> : ""}
        <p
          onClick={() => {
            textChange("生きた化石");
          }}
          className={`${
            text === "生きた化石" ? "z-30" : "z-10 bg-five"
          }  absolute top-[310px] left-[0] bg-contain bg-no-repeat bg-origin-border pt-[23px] pb-[23px] pl-[28px] pr-[29px] text-center `}
        >
          生きた化石
        </p>
        {text === "生きた化石" ? (
          <Img text={"left-[10px] top-[296.6px]"} />
        ) : (
          ""
        )}
        <p
          onClick={() => {
            textChange("二宮金次郎");
          }}
          className={`${
            text === "二宮金次郎" ? "z-30" : "z-10 bg-four"
          } absolute top-[314px] right-[38px] bg-contain bg-no-repeat bg-origin-border pt-[26px] pb-[26px] pl-[29px] pr-[29px] text-center `}
        >
          二宮金次郎
        </p>
        {text === "二宮金次郎" ? (
          <Img text={"right-[49.5px] top-[303.4px]"} />
        ) : (
          ""
        )}
        <p
          onClick={() => {
            textChange("剣士");
          }}
          className={`${
            text === "剣士" ? "z-30" : "z-10 bg-seven"
          } absolute bottom-[108px] left-[-10px] bg-contain bg-no-repeat bg-origin-border pt-[17px] pb-[17px] pl-[34px] pr-[34px] text-center `}
        >
          剣士
        </p>
        {text === "剣士" ? <Img text={"left-[-14px] bottom-[88px]"} /> : ""}
        <p
          onClick={() => {
            textChange("鷹");
          }}
          className={`${
            text === "鷹" ? "z-30" : "z-10 bg-eight"
          } absolute bottom-[110px] left-[114px] bg-contain bg-no-repeat bg-origin-border pt-[15px] pb-[16px] pl-[32px] pr-[32px] text-center`}
        >
          鷹
        </p>
        {text === "鷹" ? <Img text={"left-[100px] bottom-[89.7px]"} /> : ""}
        <p
          onClick={() => {
            textChange("リーダー");
          }}
          className={`${
            text === "リーダー" ? "z-30" : "z-10 bg-six"
          } absolute bottom-[102px] right-[0] bg-contain bg-no-repeat bg-origin-border pt-[20px] pb-[20px] pl-[25px] pr-[26px] text-center `}
        >
          リーダー
        </p>
        {text === "リーダー" ? (
          <Img text={"right-[0.6px] bottom-[84px]"} />
        ) : (
          ""
        )}
        <p
          onClick={() => {
            textChange("使い手");
          }}
          className={`${
            text === "使い手" ? "z-30" : "z-10 bg-eight"
          } absolute bottom-[0] left-[0] bg-contain bg-no-repeat bg-origin-border pt-[24px] pb-[24px] pl-[34px] pr-[34px] text-center `}
        >
          使い手
        </p>
        {text === "使い手" ? <Img text={"left-[2px] bottom-[-13px]"} /> : ""}
        <p
          onClick={() => {
            textChange("鉄人");
          }}
          className={`${
            text === "鉄人" ? "z-30" : "z-10 bg-twoOne"
          } absolute bottom-[37px] left-[131px] bg-contain bg-no-repeat bg-origin-border pt-[17px] pb-[16px] pl-[33px] pr-[33px] text-center `}
        >
          鉄人
        </p>
        {text === "鉄人" ? <Img text={"left-[125.3px] bottom-[15.7px]"} /> : ""}
        <p
          onClick={() => {
            textChange("教科書");
          }}
          className={`${
            text === "教科書" ? "z-30" : " z-10 bg-twoThree"
          } absolute bottom-[18px] right-[-10px] bg-contain bg-no-repeat bg-origin-border pt-[17px] pb-[18px] pl-[27px] pr-[27px] text-center `}
        >
          教科書
        </p>
        {text === "教科書" ? (
          <Img text={"right-[-15.2px] bottom-[-1px]"} />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Two;
