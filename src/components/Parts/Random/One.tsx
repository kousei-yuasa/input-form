import trueImg from "../../../assets/images/titleTrue.png";
import Img from "../Illust/Img";
const One = ({ text, textChange }: { text: string; textChange: any }) => {
  return (
    <>
      <div className="relative h-[560px] text-[14px]">
        <p
          onClick={() => {
            textChange("ノーベル賞");
          }}
          className={`absolute top-[1px] left-[-10px] ${
            text === "ノーベル賞" ? "z-30 " : "z-10 bg-one"
          }  bg-contain bg-no-repeat bg-origin-border pt-[20px] pb-[20px] pl-[20px] pr-[19px] text-center `}
        >
          ノーベル賞
        </p>
        {text === "ノーベル賞" ? <Img text={"left-[-8px] top-[-16px]"} /> : ""}
        <p
          onClick={() => {
            textChange("隊長");
          }}
          className={`${
            text === "隊長" ? "z-30" : "z-10 bg-two"
          }  absolute top-[-8px] left-[125px] bg-contain bg-no-repeat bg-origin-border pt-[16px] pb-[17px] pl-[28px] pr-[30px] text-center `}
        >
          隊長
        </p>
        {text === "隊長" ? <Img text={"left-[114px] top-[-29px]"} /> : ""}
        <p
          onClick={() => {
            textChange("プロ");
          }}
          className={`${
            text === "プロ" ? "z-30" : "z-10 bg-three"
          }  absolute top-[11px] right-[0] bg-contain bg-no-repeat bg-origin-border pt-[18px] pb-[19px] pl-[33px] pr-[32px] text-center `}
        >
          プロ
        </p>
        {text === "プロ" ? <Img text={"right-[-7px] top-[-9px]"} /> : ""}
        <p
          onClick={() => {
            textChange("千手観音");
          }}
          className={`${
            text === "千手観音" ? "z-30" : "z-10 bg-four"
          }  absolute top-[80px] left-[0] bg-contain bg-no-repeat bg-origin-border pt-[23px] pb-[24px] pl-[30px] pr-[31px] text-center `}
        >
          千手観音
        </p>
        {text === "千手観音" ? <Img text={"left-[5px] top-[64px]"} /> : ""}
        <p
          onClick={() => {
            textChange("フェニックス");
          }}
          className={`${
            text === "フェニックス" ? "z-30" : "z-10 bg-five"
          }  absolute top-[66px] right-[79px] bg-contain bg-no-repeat bg-origin-border pt-[21px] pb-[20px] pl-[15px] pr-[16px] text-center `}
        >
          フェニックス
        </p>
        {text === "フェニックス" ? (
          <Img text={"right-[84px] top-[50px]"} />
        ) : (
          ""
        )}
        <p
          onClick={() => {
            textChange("ソクラテス");
          }}
          className={`${
            text === "ソクラテス" ? "z-30" : "z-10 bg-five"
          } absolute top-[171px] left-[-10px] bg-contain bg-no-repeat bg-origin-border pt-[23px] pb-[21px] pl-[25px] pr-[24px] text-center `}
        >
          ソクラテス
        </p>
        {text === "ソクラテス" ? <Img text={"left-[-3px] top-[157px]"} /> : ""}
        <p
          onClick={() => {
            textChange("番人");
          }}
          className={`${
            text === "番人" ? "z-30" : "z-10 bg-one"
          } absolute top-[154px] left-[141px] bg-contain bg-no-repeat bg-origin-border pt-[17px] pb-[17px] pl-[34px] pr-[33px] text-center `}
        >
          番人
        </p>
        {text === "番人" ? <Img text={"left-[136px] top-[134px]"} /> : ""}
        <p
          onClick={() => {
            textChange("ボス");
          }}
          className={`${
            text === "ボス" ? "z-30" : "z-10 bg-three"
          } absolute top-[123px] right-[-10px] bg-contain bg-no-repeat bg-origin-border pt-[17px] pb-[17px] pl-[31px] pr-[30px] text-center `}
        >
          ボス
        </p>
        {text === "ボス" ? <Img text={"right-[-20px] top-[103px]"} /> : ""}
        <p
          onClick={() => {
            textChange("親方");
          }}
          className={`${
            text === "親方" ? "z-30" : "z-10 bg-three"
          }  absolute top-[265px] left-[0] bg-contain bg-no-repeat bg-origin-border pt-[18px] pb-[18px] pl-[32px] pr-[33px] text-center `}
        >
          親方
        </p>
        {text === "親方" ? <Img text={"left-[-5px] top-[246px]"} /> : ""}
        <p
          onClick={() => {
            textChange("スター");
          }}
          className={`${
            text === "スター" ? "z-30" : "z-10 bg-one"
          } absolute top-[239px] left-[114px] bg-contain bg-no-repeat bg-origin-border pt-[16px] pb-[16px] pl-[26px] pr-[26px] text-center `}
        >
          スター
        </p>
        {text === "スター" ? <Img text={"left-[109px] top-[218px]"} /> : ""}
        <p
          onClick={() => {
            textChange("担当大臣");
          }}
          className={`${
            text === "担当大臣" ? "z-30" : "z-10 bg-six"
          }  absolute top-[209px] right-[0] bg-contain bg-no-repeat bg-origin-border pt-[22px] pb-[22px] pl-[28px] pr-[29px] text-center`}
        >
          担当大臣
        </p>
        {text === "担当大臣" ? <Img text={"right-[-3px] top-[194px]"} /> : ""}
        <p
          onClick={() => {
            textChange("神童");
          }}
          className={` ${
            text === "神童" ? "z-30" : "z-10 bg-four"
          } absolute top-[290px] right-[-10px] bg-contain bg-no-repeat bg-origin-border pt-[15px] pb-[16px] pl-[28px] pr-[32px] text-center `}
        >
          神童
        </p>
        {text === "神童" ? <Img text={"right-[-17px] top-[268px]"} /> : ""}
        <p
          onClick={() => {
            textChange("マスター");
          }}
          className={`${
            text === "マスター" ? "z-30" : "z-10 bg-six"
          } absolute top-[345px] left-[-10px] bg-contain bg-no-repeat bg-origin-border pt-[20px] pb-[20px] pl-[25px] pr-[25px] text-center `}
        >
          マスター
        </p>
        {text === "マスター" ? <Img text={"left-[-8px] top-[329px]"} /> : ""}
        <p
          onClick={() => {
            textChange("風雲児");
          }}
          className={`${
            text === "風雲児" ? "z-30" : "z-10 bg-six"
          } absolute top-[311px] left-[121px]  bg-contain bg-no-repeat bg-origin-border pt-[22px] pb-[22px] pl-[37px] pr-[36px] text-center `}
        >
          風雲児
        </p>
        {text === "風雲児" ? <Img text={"left-[126px] top-[297px]"} /> : ""}
        <p
          onClick={() => {
            textChange("湯婆婆");
          }}
          className={`${
            text === "湯婆婆" ? "z-30" : "z-10 bg-six"
          } absolute bottom-[131px] right-[0] bg-contain bg-no-repeat bg-origin-border pt-[18px] pb-[18px] pl-[28px] pr-[27px] text-center `}
        >
          湯婆婆
        </p>
        {text === "湯婆婆" ? <Img text={"right-[-5px] bottom-[112px]"} /> : ""}
        <p
          onClick={() => {
            textChange("魂");
          }}
          className={`${
            text === "魂" ? "z-30" : "z-10 bg-ten"
          } absolute bottom-[0] left-[10px] bg-contain bg-no-repeat bg-origin-border pt-[12px] pb-[12px] pl-[27px] pr-[27px] text-center `}
        >
          魂
        </p>
        {text === "魂" ? <Img text={"left-[-11px] bottom-[-25px]"} /> : ""}
        <p
          onClick={() => {
            textChange("仙人");
          }}
          className={`${
            text === "仙人" ? "z-30" : "z-10 bg-nine"
          } absolute bottom-[29px] left-[102px] bg-contain bg-no-repeat bg-origin-border pt-[14px] pb-[15px] pl-[25px] pr-[24px] text-center `}
        >
          仙人
        </p>
        {text === "仙人" ? <Img text={"left-[88px] bottom-[7px]"} /> : ""}
        <p
          onClick={() => {
            textChange("太陽");
          }}
          className={`${
            text === "太陽" ? "z-30" : "z-10 bg-one"
          } absolute bottom-[62px] right-[0] bg-contain bg-no-repeat bg-origin-border pt-[13px] pb-[14px] pl-[29px] pr-[28px] text-center `}
        >
          太陽
        </p>
        {text === "太陽" ? <Img text={"right-[-10px] bottom-[38px]"} /> : ""}
        <p
          onClick={() => {
            textChange("鬼");
          }}
          className={`${
            text === "鬼" ? "z-30" : "z-10 bg-eight"
          } absolute bottom-[0] right-[50px]  bg-contain bg-no-repeat bg-origin-border pt-[12px] pb-[12px] pl-[31px] pr-[31px] text-center `}
        >
          鬼
        </p>
        {text === "鬼" ? <Img text={"right-[35px] bottom-[-23px]"} /> : ""}

        <p
          onClick={() => {
            textChange("専門家");
          }}
          className={`${
            text === "専門家" ? "z-30" : "z-10 bg-seven"
          }  absolute bottom-[96px] right-[119px] bg-contain  bg-no-repeat bg-origin-border pt-[18px] pb-[18px] pl-[29px] pr-[27px] text-center `}
        >
          専門家
        </p>
        {text === "専門家" ? <Img text={"right-[114px] bottom-[77px]"} /> : ""}

        <p
          onClick={() => {
            textChange("勇者");
          }}
          className={`${
            text === "勇者" ? "z-30" : "z-10 bg-eight"
          } absolute bottom-[74px] left-[0] bg-contain bg-no-repeat bg-origin-border pt-[15px] pb-[15px] pl-[27px] pr-[27px] text-center `}
        >
          勇者
        </p>
        {text === "勇者" ? <Img text={"left-[-12px] bottom-[52px]"} /> : ""}
      </div>
    </>
  );
};

export default One;
