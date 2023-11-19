import Img from "../Illust/Img";

const Three = ({ text, textChange }: { text: string; textChange: any }) => {
  return (
    <>
      <div className="relative h-[560px] text-[14px]">
        <p
          onClick={() => {
            textChange("支配者");
          }}
          className={`${
            text === "支配者" ? "z-30" : "z-10 bg-six"
          } absolute top-[13px] left-[0] bg-contain bg-no-repeat bg-origin-border pt-[16px] pb-[15px] pl-[25px] pr-[26px] text-center `}
        >
          支配者
        </p>
        {text === "支配者" ? <Img text={"left-[-7px] top-[-8px]"} /> : ""}
        <p
          onClick={() => {
            textChange("マスター");
          }}
          className={`${
            text === "マスター" ? "z-30" : "z-10 bg-five"
          }  absolute top-[13px] left-[117px] bg-contain bg-no-repeat bg-origin-border pt-[17px] pb-[16px] pl-[19px] pr-[18px] text-center `}
        >
          マスター
        </p>
        {text === "マスター" ? <Img text={"left-[111px] top-[-8px]"} /> : ""}

        <p
          onClick={() => {
            textChange("原石");
          }}
          className={`${
            text === "原石" ? "z-30" : "z-10 bg-three"
          } absolute top-[0] right-[0] bg-contain bg-no-repeat bg-origin-border pt-[14px] pb-[14px] pl-[28px] pr-[28px] text-center `}
        >
          原石
        </p>
        {text === "原石" ? <Img text={"right-[-10px] top-[-23px]"} /> : ""}
        <p
          onClick={() => {
            textChange("大塩平八郎");
          }}
          className={`${
            text === "大塩平八郎" ? "z-30" : "z-10 bg-five"
          } absolute top-[77px] left-[0]  bg-contain bg-no-repeat bg-origin-border pt-[19px] pb-[20px] pl-[20px] pr-[19px] text-center `}
        >
          大塩平八郎
        </p>
        {text === "大塩平八郎" ? <Img text={"left-[2px] top-[59.1px]"} /> : ""}
        <p
          onClick={() => {
            textChange("女王");
          }}
          className={`${
            text === "女王" ? "z-30" : "z-10 bg-twoOne"
          } absolute top-[96px] left-[131px] bg-contain bg-no-repeat bg-origin-border pt-[13px] pb-[13px] pl-[25px] pr-[26px] text-center `}
        >
          女王
        </p>
        {text === "女王" ? <Img text={"left-[117px] top-[72.1px]"} /> : ""}
        <p
          onClick={() => {
            textChange("神様");
          }}
          className={`${
            text === "神様" ? "z-30" : "z-10 bg-eight"
          }  absolute right-[10px] top-[68px]  bg-contain bg-no-repeat bg-origin-border pl-[30px] pt-[15px] pb-[18px] pr-[30px] text-center `}
        >
          神様
        </p>
        {text === "神様" ? <Img text={"right-[1.1px] top-[46.2px]"} /> : ""}
        <p
          onClick={() => {
            textChange("伝説");
          }}
          className={`${
            text === "伝説" ? "z-30" : "z-10 bg-three"
          } absolute top-[149px] left-[-10px] bg-contain bg-no-repeat bg-origin-border pt-[14px] pb-[14px] pl-[28px] pr-[22px] text-center `}
        >
          伝説
        </p>
        {text === "伝説" ? <Img text={"left-[-21px] top-[126px]"} /> : ""}
        <p
          onClick={() => {
            textChange("打撃王");
          }}
          className={`${
            text === "打撃王" ? "z-30" : "z-10 bg-three"
          } absolute top-[159px] left-[90px] bg-contain bg-no-repeat bg-origin-border pt-[18px] pb-[19px] pl-[29px] pr-[28px] text-center `}
        >
          打撃王
        </p>
        {text === "打撃王" ? <Img text={"left-[87px] top-[140px]"} /> : ""}
        <p
          onClick={() => {
            textChange("ナンバーワン");
          }}
          className={`${
            text === "ナンバーワン" ? "z-30" : "z-10 bg-six"
          } absolute top-[139px] right-[0] bg-contain bg-no-repeat bg-origin-border pt-[23px] pb-[23px] pl-[17px] pr-[18px] text-center `}
        >
          ナンバーワン
        </p>
        {text === "ナンバーワン" ? (
          <Img text={"right-[7.1px] top-[125.1px]"} />
        ) : (
          ""
        )}
        <p
          onClick={() => {
            textChange("学級委員長");
          }}
          className={`${
            text === "学級委員長" ? "z-30" : "z-10 bg-five"
          } absolute top-[220px] left-[0]  bg-contain bg-no-repeat bg-origin-border pt-[20px] pb-[21px] pl-[22px] pr-[23px] text-center `}
        >
          学級委員長
        </p>
        {text === "学級委員長" ? <Img text={"left-[4px] top-[202.7px]"} /> : ""}
        <p
          onClick={() => {
            textChange("しめさば");
          }}
          className={`${
            text === "しめさば" ? "z-30" : "z-10 bg-one"
          }  absolute top-[227px] right-[97px] bg-contain bg-no-repeat bg-origin-border pt-[17px] pb-[17px] pl-[21px] pr-[20px] text-center`}
        >
          しめさば
        </p>
        {text === "しめさば" ? (
          <Img text={"right-[92.1px] top-[207.2px]"} />
        ) : (
          ""
        )}
        <p
          onClick={() => {
            textChange("エリート");
          }}
          className={`${
            text === "エリート" ? "z-30" : "z-10 bg-five"
          }  absolute top-[216px] right-[-10px] bg-contain bg-no-repeat bg-origin-border pt-[15px] pb-[14px] pl-[17px] pr-[16px] text-center `}
        >
          エリート
        </p>
        {text === "エリート" ? (
          <Img text={"right-[-19px] top-[193.7px]"} />
        ) : (
          ""
        )}
        <p
          onClick={() => {
            textChange("ウェポン");
          }}
          className={`${
            text === "ウェポン" ? "z-30" : "z-10 bg-twoThree"
          } absolute top-[307px] left-[-10px] bg-contain bg-no-repeat bg-origin-border pt-[17px] pb-[16px] pl-[19px] pr-[18px] text-center `}
        >
          ウェポン
        </p>
        {text === "ウェポン" ? <Img text={"left-[-16px] top-[286.7px]"} /> : ""}
        <p
          onClick={() => {
            textChange("勉強家");
          }}
          className={`${
            text === "勉強家" ? "z-30" : "z-10 bg-six"
          } absolute top-[297px] left-[100px]  bg-contain bg-no-repeat bg-origin-border pt-[15px] pb-[16px] pl-[26px] pr-[26px] text-center `}
        >
          勉強家
        </p>
        {text === "勉強家" ? <Img text={"left-[94px] top-[275.2px]"} /> : ""}
        <p
          onClick={() => {
            textChange("バロンドール");
          }}
          className={`${
            text === "バロンドール" ? "z-30" : "z-10 bg-five"
          } absolute bottom-[212px] right-[0] bg-contain bg-no-repeat bg-origin-border pt-[22px] pb-[22px] pl-[18px] pr-[18px] text-center `}
        >
          バロンドール
        </p>
        {text === "バロンドール" ? (
          <Img text={"right-[7.3px] bottom-[196.7px]"} />
        ) : (
          ""
        )}
        <p
          onClick={() => {
            textChange("サムライ");
          }}
          className={`${
            text === "サムライ" ? "z-30" : "z-10 bg-three"
          } absolute bottom-[130px] left-[-10px] bg-contain bg-no-repeat bg-origin-border pt-[16px] pb-[17px] pl-[19px] pr-[18px] text-center `}
        >
          サムライ
        </p>
        {text === "サムライ" ? (
          <Img text={"left-[-16px] bottom-[109.5px]"} />
        ) : (
          ""
        )}

        <p
          onClick={() => {
            textChange("オールラウンダー");
          }}
          className={`${
            text === "オールラウンダー" ? "z-30" : "z-10 bg-five"
          } absolute bottom-[116px] left-[106px] bg-contain bg-no-repeat bg-origin-border pt-[27px] pb-[26px] pl-[13px] pr-[13px] text-center `}
        >
          オールラウンダー
        </p>
        {text === "オールラウンダー" ? (
          <Img text={"left-[122px] bottom-[105.1px]"} />
        ) : (
          ""
        )}

        <p
          onClick={() => {
            textChange("千里眼");
          }}
          className={`${
            text === "千里眼" ? "z-30" : "z-10 bg-six"
          } absolute bottom-[147px] right-[-10px] bg-contain bg-no-repeat bg-origin-border pt-[15px] pb-[15px] pl-[24px] pr-[23px] text-center `}
        >
          千里眼
        </p>
        {text === "千里眼" ? <Img text={"right-[-19px] bottom-[125px]"} /> : ""}
        <p
          onClick={() => {
            textChange("精密機械");
          }}
          className={`${
            text === "精密機械" ? "z-30" : "z-10 bg-six"
          } absolute bottom-[63px] left-[10px] bg-contain bg-no-repeat bg-origin-border pt-[18px] pb-[19px] pl-[21px] pr-[21px] text-center `}
        >
          精密機械
        </p>
        {text === "精密機械" ? <Img text={"left-[6px] bottom-[44.4px]"} /> : ""}
        <p
          onClick={() => {
            textChange("ルーキー");
          }}
          className={`${
            text === "ルーキー" ? "z-30" : "z-10 bg-twoOne"
          } absolute bottom-[59px] right-[103px]  bg-contain bg-no-repeat bg-origin-border pt-[13px] pb-[13px] pl-[14px] pr-[14px] text-center `}
        >
          ルーキー
        </p>
        {text === "ルーキー" ? (
          <Img text={"right-[91.7px] bottom-[35px]"} />
        ) : (
          ""
        )}
        <p
          onClick={() => {
            textChange("精鋭");
          }}
          className={`${
            text === "精鋭" ? "z-30" : "z-10 bg-two"
          } absolute right-[0] bottom-[76px] bg-contain bg-no-repeat bg-origin-border pt-[15px] pb-[15px] pl-[27px] pr-[27px] text-center `}
        >
          精鋭
        </p>
        {text === "精鋭" ? (
          <Img text={"right-[-12.3px] bottom-[53.4px]"} />
        ) : (
          ""
        )}
        <p
          onClick={() => {
            textChange("戦士");
          }}
          className={`${
            text === "戦士" ? "z-30" : "z-10 bg-twoFour"
          }  absolute bottom-[2px] left-[0] bg-contain bg-no-repeat bg-origin-border pt-[13px] pb-[14px] pl-[27px] pr-[28px] text-center `}
        >
          戦士
        </p>
        {text === "戦士" ? <Img text={"left-[-12px] bottom-[-22px]"} /> : ""}
        <p
          onClick={() => {
            textChange("匠");
          }}
          className={`${
            text === "匠" ? "z-30" : " z-10 bg-eight"
          } absolute bottom-[3px] left-[115px] bg-contain bg-no-repeat bg-origin-border pt-[12px] pb-[11px] pl-[27px] pr-[28px] text-center `}
        >
          匠
        </p>
        {text === "匠" ? <Img text={"left-[95.2px] bottom-[-22px]"} /> : ""}
        <p
          onClick={() => {
            textChange("ダイオウイカ");
          }}
          className={` ${
            text === "ダイオウイカ" ? "z-30" : "z-10 bg-five"
          } absolute bottom-[0] right-[-10px] bg-contain bg-no-repeat bg-origin-border pt-[18px] pb-[19px] pl-[11px] pr-[12px] text-center `}
        >
          ダイオウイカ
        </p>
        {text === "ダイオウイカ" ? (
          <Img text={"right-[-8.7px] bottom-[-19px]"} />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Three;
