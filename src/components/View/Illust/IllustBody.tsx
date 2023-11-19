import { useState, useEffect, useMemo } from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import First from "../../Template/Illust/first";
import RandomTitle from "../../Template/Illust/Random";
import Confirm from "../../Template/Illust/Confirm";
import "pure-react-carousel/dist/react-carousel.es.css";
const IllustBody = () => {
  const [plan, setPlan] = useState<{ text: string; bool: boolean }[]>([
    { text: "アイデア", bool: false },
    { text: "提案力", bool: false },
    { text: "コンセプト", bool: false },
    { text: "ユニーク", bool: false },
    { text: "キャッチコピー", bool: false },
    { text: "プレゼン", bool: false },
    { text: "着眼点", bool: false },
    { text: "ユーザ目線", bool: false },
    { text: "調査", bool: false },
    { text: "マーケティング", bool: false },
  ]);
  const [design, setDesign] = useState<{ text: string; bool: boolean }[]>([
    { text: "色彩", bool: false },
    { text: "余白", bool: false },
    { text: "フォント", bool: false },
    { text: "UI", bool: false },
    { text: "UX", bool: false },
    { text: "レイアウト", bool: false },
    { text: "情報設計", bool: false },
    { text: "ストーリー", bool: false },
    { text: "ファーストビュー", bool: false },
    { text: "画像編集", bool: false },
    { text: "キービジュアル", bool: false },
    { text: "表現力", bool: false },
    { text: "世界観", bool: false },
    { text: "タイポグラフィー", bool: false },
    { text: "導線", bool: false },
    { text: "トーンマナー", bool: false },
  ]);
  const [coding, setCoding] = useState<{ text: string; bool: boolean }[]>([
    { text: "マークアップ", bool: false },
    { text: "多機能", bool: false },
    { text: "アウトライン", bool: false },
    { text: "命名規則", bool: false },
    { text: "効率", bool: false },
    { text: "テクニック", bool: false },
    { text: "きれいなコード", bool: false },
    { text: "安全", bool: false },
    { text: "レスポンシブ", bool: false },
    { text: "使用言語", bool: false },
    { text: "スマート", bool: false },
    { text: "軽さ", bool: false },
  ]);
  const [view, setView] = useState("plan");
  const [ViewData, setViewData] =
    useState<{ text: string; bool: boolean }[]>(plan);
  const [ViewText, setViewText] = useState<string[]>([]);
  const [modalBool, setModalBool] = useState<boolean>(false);
  useEffect(() => {
    const trueArray = [...plan, ...design, ...coding].filter((data) => {
      return data.bool;
    });
    const trueText = trueArray.map((data) => {
      return data.text + "・";
    });
    trueText.length === 0 ? setViewText([]) : setViewText(trueText);
    view === "plan"
      ? setViewData(plan)
      : view === "design"
      ? setViewData(design)
      : setViewData(coding);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [plan, design, coding]);
  useEffect(() => {
    view === "plan"
      ? setViewData(plan)
      : view === "design"
      ? setViewData(design)
      : setViewData(coding);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view]);
  const handleChange = (Index: number) => {
    if (ViewText.length < 6) {
      const array =
        view === "plan" ? plan : view === "design" ? design : coding;
      const NewArray = array.map((data, index) => {
        return index === Index ? { text: data.text, bool: !data.bool } : data;
      });
      view === "plan"
        ? setPlan(NewArray)
        : view === "design"
        ? setDesign(NewArray)
        : setCoding(NewArray);
    } else {
      const array =
        view === "plan" ? plan : view === "design" ? design : coding;
      if (array[Index].bool) {
        const NewArray = array.map((data, index) => {
          return index === Index ? { text: data.text, bool: !data.bool } : data;
        });
        view === "plan"
          ? setPlan(NewArray)
          : view === "design"
          ? setDesign(NewArray)
          : setCoding(NewArray);
      } else {
        setModalBool(true);
      }
    }
  };
  const tagChange = (value: string) => {
    setView(value);
  };
  const Sixhandle = () => {
    setModalBool(false);
  };
  const number = useMemo(() => {
    return Math.floor(Math.random() * 4);
  }, []);
  const [title, setTitle] = useState("");
  const titleChange = (value: string) => {
    value === title ? setTitle("") : setTitle(value);
  };
  return (
    <>
      <CarouselProvider
        naturalSlideWidth={0}
        naturalSlideHeight={0}
        isIntrinsicHeight={true}
        infinite={true}
        totalSlides={3}
        touchEnabled={false}
      >
        <Slider classNameTray="tray" className="h-fit">
          <Slide className="slide" index={0}>
            <div className="px-[5.333%]">
              <First
                view={view}
                tagChange={(value: string) => tagChange(value)}
                viewText={ViewText}
                ViewData={ViewData}
                handleChange={(index: number) => handleChange(index)}
                Modal={modalBool}
                closeSix={Sixhandle}
              />
            </div>
          </Slide>
          <Slide className="slide px-[0.84%]" index={1}>
            <RandomTitle
              number={number}
              text={title}
              textChange={(value: string) => titleChange(value)}
            />
          </Slide>
          <Slide className="slide" index={2}>
            <Confirm title={title} tech={ViewText} />
          </Slide>
        </Slider>
      </CarouselProvider>
    </>
  );
};
export default IllustBody;
