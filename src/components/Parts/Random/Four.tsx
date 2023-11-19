import Img from "../Illust/Img";
const Four = ({ text, textChange }: { text: string; textChange: any }) => {
  return (
    <>
      <div className="relative h-[560px] text-[14px]">
        <p
          onClick={() => {
            textChange("カリスマ");
          }}
          className={`absolute top-[8px] left-[0] ${
            text === "カリスマ" ? "z-30" : "z-10 bg-three"
          } bg-contain bg-no-repeat bg-origin-border pt-[16px] pb-[16px] pl-[18px] pr-[18px] text-center`}
        >
          カリスマ
        </p>
        {text === "カリスマ" ? <Img text={"left-[-7px] top-[-14px]"} /> : ""}
        <p
          onClick={() => {
            textChange("へび");
          }}
          className={`absolute top-[0] left-[124px] ${
            text === "へび" ? "z-30" : "z-10 bg-twoOne"
          }  bg-contain bg-no-repeat bg-origin-border pt-[13px] pb-[13px] pl-[25px] pr-[25px] text-center`}
        >
          へび
        </p>
        {text === "へび" ? <Img text={"left-[108px] top-[-25px]"} /> : ""}

        <p
          onClick={() => {
            textChange("見習い");
          }}
          className={`absolute top-[0] right-[20px] ${
            text === "見習い" ? "z-30" : "z-10 bg-six"
          }  bg-contain bg-no-repeat bg-origin-border pt-[14px] pb-[14px] pl-[21px] pr-[22px] text-center `}
        >
          見習い
        </p>
        {text === "見習い" ? <Img text={"right-[10px] top-[-23px]"} /> : ""}
        <p
          onClick={() => {
            textChange("努力家");
          }}
          className={`${
            text === "努力家" ? "z-30" : "z-10 bg-six"
          } absolute top-[75px] left-[10px]  bg-contain bg-no-repeat bg-origin-border pt-[15.5px] pb-[15.5px] pl-[24px] pr-[24px] text-center`}
        >
          努力家
        </p>
        {text === "努力家" ? <Img text={"left-[2px] top-[54px]"} /> : ""}
        <p
          onClick={() => {
            textChange("ヒーロー");
          }}
          className={`${
            text === "ヒーロー" ? "z-30" : "z-10 bg-eight"
          } absolute top-[67px] left-[138px] bg-contain bg-no-repeat bg-origin-border pt-[16px] pb-[16px] pl-[15px] pr-[14px] text-center `}
        >
          ヒーロー
        </p>
        {text === "ヒーロー" ? <Img text={"left-[128px] top-[46px]"} /> : ""}

        <p
          onClick={() => {
            textChange("天才");
          }}
          className={`${
            text === "天才" ? "z-30" : "z-10 bg-eight"
          } absolute top-[62px] right-[-10px] bg-contain bg-no-repeat bg-origin-border pl-[26px] pt-[14px] pb-[14px] pr-[26px] text-center `}
        >
          天才
        </p>
        {text === "天才" ? <Img text={"right-[-20px] top-[44px]"} /> : ""}
        <p
          onClick={() => {
            textChange("世界遺産");
          }}
          className={`${
            text === "世界遺産" ? "z-30" : "z-10 bg-three"
          } absolute top-[148px] left-[20px]  bg-contain bg-no-repeat bg-origin-border pt-[20px] pb-[20px] pl-[23px] pr-[22px] text-center `}
        >
          世界遺産
        </p>
        {text === "世界遺産" ? <Img text={"left-[18px] top-[131px]"} /> : ""}

        <p
          onClick={() => {
            textChange("ダイオウグソクムシ");
          }}
          className={`${
            text === "ダイオウグソクムシ" ? "z-30" : "z-10 bg-five"
          }  absolute top-[127px] right-[10px] bg-contain bg-no-repeat bg-origin-border pt-[31px] pb-[31px] pl-[14px] pr-[14px] text-center `}
        >
          ダイオウグソクムシ
        </p>
        {text === "ダイオウグソクムシ" ? (
          <Img text={"right-[34px] top-[121px]"} />
        ) : (
          ""
        )}

        <p
          onClick={() => {
            textChange("研究家");
          }}
          className={`${
            text === "研究家" ? "z-30" : "z-10 bg-twoThree"
          }  absolute top-[211px] left-[96px] bg-contain bg-no-repeat bg-origin-border pt-[13px] pb-[15px] pl-[23px] pr-[22px] text-center `}
        >
          研究家
        </p>
        {text === "研究家" ? <Img text={"left-[87px] top-[188px]"} /> : ""}
        <p
          onClick={() => {
            textChange("王様");
          }}
          className={`${
            text === "王様" ? "z-30" : "z-10 bg-three"
          }  absolute top-[250px] left-[0] bg-contain bg-no-repeat bg-origin-border pt-[14px] pb-[14px] pl-[28px] pr-[28px] text-center `}
        >
          王様
        </p>
        {text === "王様" ? <Img text={"left-[-10px] top-[226px]"} /> : ""}
        <p
          onClick={() => {
            textChange("ニューウェーブ");
          }}
          className={`${
            text === "ニューウェーブ" ? "z-30" : "z-10 bg-twoFive"
          } absolute top-[270px] right-[71px] bg-contain bg-no-repeat bg-origin-border pt-[23px] pb-[22px] pl-[17px] pr-[17px] text-center`}
        >
          ニューウェーブ
        </p>
        {text === "ニューウェーブ" ? (
          <Img text={"right-[84px] top-[255px]"} />
        ) : (
          ""
        )}

        <p
          onClick={() => {
            textChange("勇者");
          }}
          className={`${
            text === "勇者" ? "z-30" : "z-10 bg-eight"
          } absolute top-[227px] right-[-10px] bg-contain bg-no-repeat bg-origin-border pt-[15px] pb-[15px] pl-[27px] pr-[27px] text-center `}
        >
          勇者
        </p>
        {text === "勇者" ? <Img text={"right-[-20px] top-[205px]"} /> : ""}

        <p
          onClick={() => {
            textChange("キャプテン");
          }}
          className={`${
            text === "キャプテン" ? "z-30" : "z-10 bg-three"
          } absolute top-[321px] left-[10px] bg-contain bg-no-repeat bg-origin-border pt-[21px] pb-[21px] pl-[19px] pr-[19px] text-center `}
        >
          キャプテン
        </p>
        {text === "キャプテン" ? <Img text={"left-[11px] top-[304px]"} /> : ""}

        <p
          onClick={() => {
            textChange("テクニシャン");
          }}
          className={`${
            text === "テクニシャン" ? "z-30" : "z-10 bg-twoSix"
          } absolute bottom-[147px] right-[96px]  bg-contain bg-no-repeat bg-origin-border pt-[19px] pb-[19px] pl-[14px] pr-[14px] text-center `}
        >
          テクニシャン
        </p>
        {text === "テクニシャン" ? (
          <Img text={"right-[99px] bottom-[127px]"} />
        ) : (
          ""
        )}
        <p
          onClick={() => {
            textChange("守護神");
          }}
          className={`${
            text === "守護神" ? "z-30" : "z-10 bg-four"
          } absolute bottom-[172px] right-[-10px] bg-contain bg-no-repeat bg-origin-border pt-[16px] pb-[17px] pl-[25px] pr-[25px] text-center `}
        >
          守護神
        </p>
        {text === "守護神" ? <Img text={"right-[-17px] bottom-[151px]"} /> : ""}
        <p
          onClick={() => {
            textChange("チャレンジャー");
          }}
          className={`${
            text === "チャレンジャー" ? "z-30" : "z-10 bg-five"
          } absolute bottom-[81px] left-[-10px] bg-contain bg-no-repeat bg-origin-border pt-[23px] pb-[23px] pl-[15px] pr-[14px] text-center `}
        >
          チャレンジャー
        </p>
        {text === "チャレンジャー" ? (
          <Img text={"left-[0] bottom-[67px]"} />
        ) : (
          ""
        )}
        <p
          onClick={() => {
            textChange("博士");
          }}
          className={`${
            text === "博士" ? "z-30" : "z-10 bg-six"
          } absolute bottom-[70px] right-[104px] bg-contain bg-no-repeat bg-origin-border pt-[18px] pb-[16px] pl-[34px] pr-[33px] text-center `}
        >
          博士
        </p>
        {text === "博士" ? <Img text={"left-[99px] bottom-[49px]"} /> : ""}
        <p
          onClick={() => {
            textChange("ハチ公");
          }}
          className={`${
            text === "ハチ公" ? "z-30" : "z-10 bg-six"
          } absolute bottom-[93px] right-[-10px] bg-contain bg-no-repeat bg-origin-border pt-[16px] pb-[16px] pl-[25px] pr-[25px] text-center `}
        >
          ハチ公
        </p>
        {text === "ハチ公" ? <Img text={"right-[-20px] bottom-[67px]"} /> : ""}
        <p
          onClick={() => {
            textChange("達人");
          }}
          className={`${
            text === "達人" ? "z-30" : "z-10 bg-three"
          } absolute bottom-[13px] left-[0]  bg-contain bg-no-repeat bg-origin-border pt-[14px] pb-[14px] pl-[27px] pr-[27px] text-center `}
        >
          達人
        </p>
        {text === "達人" ? <Img text={"left-[-10px] bottom-[-13px]"} /> : ""}
        <p
          onClick={() => {
            textChange("ひよこ");
          }}
          className={`${
            text === "ひよこ" ? "z-30" : "z-10 bg-five"
          } absolute bottom-[0] right-[124px]  bg-contain bg-no-repeat bg-origin-border pt-[15px] pb-[15px] pl-[23px] pr-[22px] text-center `}
        >
          ひよこ
        </p>
        {text === "ひよこ" ? <Img text={"right-[114px] bottom-[-22px]"} /> : ""}
        <p
          onClick={() => {
            textChange("金剛力士");
          }}
          className={`${
            text === "金剛力士" ? "z-30" : "z-10 bg-twoFour"
          }  absolute bottom-[13px] right-[0]  bg-contain bg-no-repeat bg-origin-border pt-[19px] pb-[19px] pl-[22px] pr-[22px] text-center `}
        >
          金剛力士
        </p>
        {text === "金剛力士" ? <Img text={"right-[-3px] bottom-[-5px]"} /> : ""}
      </div>
    </>
  );
};

export default Four;
