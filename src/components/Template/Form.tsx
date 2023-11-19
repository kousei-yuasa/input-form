import { useForm, SubmitHandler } from "react-hook-form";
import "rc-slider/assets/index.css";
import { useRecoilValue } from "recoil";
import { GETURL } from "../GrobalState/Recoil";
import { firestore } from "../../firebase";
import { ID } from "../GrobalState/Recoil";
import { doc, updateDoc, arrayUnion, Timestamp } from "firebase/firestore";
import RangeSlider from "./Range/RangeSlider";
import { useNavigate } from "react-router-dom";
const FirstForm = ({ color }: { color: string }) => {
  const navigate = useNavigate();
  const success = useRecoilValue(GETURL);
  const id = useRecoilValue(ID);
  const url = useRecoilValue(GETURL);
  type Inputs = {
    sendUserName: string;
    job: string;
    plan: number;
    design: number;
    coding: number;
    presen: number;
    manner: number;
    Comment: string;
    giftComment: string;
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();
  const Data = [
    {
      prefCode: "デザイナー",
      prefName: "デザイナー",
    },
    {
      prefCode: "エンジニア",
      prefName: "エンジニア",
    },
    {
      prefCode: "ディレクター",
      prefName: "ディレクター",
    },
    {
      prefCode: "マネージャー",
      prefName: "マネージャー",
    },
    {
      prefCode: "保護者",
      prefName: "保護者",
    },
    {
      prefCode: "教員",
      prefName: "教員",
    },
    {
      prefCode: "学生",
      prefName: "学生",
    },
    {
      prefCode: "その他",
      prefName: "その他",
    },
  ];
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const profileRef = doc(firestore, "userData_vol2", `${success}`);
    const {
      plan,
      coding,
      manner,
      presen,
      design,
      giftComment,
      Comment,
      job,
      sendUserName,
    } = data;
    const time = Timestamp.now();
    updateDoc(profileRef, {
      array: arrayUnion({
        senduserName: sendUserName,
        rating: {
          plan: plan,
          coding: coding,
          design: design,
          mannar: manner,
          presentation: presen,
        },
        comment: Comment,
        giftComment: giftComment,
        job: job,
        time: time.toDate(),
        id: id,
      }),
    });
    navigate("/illust", { state: { id: id, url: url } });
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-10 mb-10 flex-col">
          <div className="mb-4 flex justify-center">
            <p className="text-lg font-bold">ご職業：</p>
            <select
              {...register("job")}
              className="relative ml-2 w-[175px] appearance-none rounded border-2 border-solid border-[#CBCBCB] bg-[#F7F7F7] bg-arrow bg-[length:10px_5px] bg-no-repeat px-[15px] text-base font-bold"
              style={{ backgroundPosition: "right 15px center" }}
            >
              {Data.map((pref) => {
                return (
                  <>
                    <option key={pref.prefCode} value={pref.prefName}>
                      {pref.prefName}
                    </option>
                  </>
                );
              })}
            </select>
          </div>
          <div className="flex justify-center">
            <p className="text-lg font-bold">お名前：</p>
            <input
              {...register("sendUserName", { required: true })}
              placeholder="name"
              className="ml-2 w-[175px] rounded border-2 border-solid border-[#CBCBCB] bg-[#F7F7F7] px-[15px] font-bold"
            />
          </div>
        </div>

        <p className="mb-[3px] text-[22px] font-bold">・企画</p>
        <RangeSlider control={control} color={color} name={"plan"} />
        <p className="text-[22px] font-bold">・デザイン</p>
        <RangeSlider control={control} color={color} name={"design"} />
        <p className="text-[22px] font-bold">・実装</p>
        <RangeSlider control={control} color={color} name={"coding"} />
        <p className="text-[22px] font-bold">・プレゼン</p>
        <RangeSlider control={control} color={color} name={"presen"} />
        <p className="text-[22px] font-bold">・マナー</p>
        <RangeSlider control={control} color={color} name={"manner"} />
        <div className="mb-6">
          <p className="mb-[13px] text-[22px] font-bold">・良かった点</p>
          <div className="mx-5">
            <textarea
              id=""
              {...register("Comment", { required: true })}
              placeholder="応援メッセージ"
              className="h-[111px] w-full rounded border-2 border-solid border-[#CBCBCB] px-[10px] py-[6px] text-[15px] font-normal "
            ></textarea>
          </div>
        </div>
        <div className="mb-6">
          <p className="mb-[13px] text-[22px] font-bold">
            ・さらに良くなるアドバイス
          </p>
          <div className="mx-5">
            <textarea
              id=""
              {...register("giftComment", { required: true })}
              placeholder="応援メッセージ"
              className="h-[111px] w-full rounded border-2 border-solid border-[#CBCBCB] px-[10px] py-[6px] text-[15px] font-normal"
            ></textarea>
          </div>
        </div>
        <div className="mt-12">
          <input
            type="submit"
            value={"評価を送る"}
            className="mx-auto block py-[9px] px-6 text-white"
            style={{ backgroundColor: `${color}` }}
          />
        </div>
      </form>
    </>
  );
};
export default FirstForm;
