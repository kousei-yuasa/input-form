import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { firestore, storage } from "../../firebase";
import { useRecoilState, useSetRecoilState } from "recoil";
import { UserColor, GETURL, UserName } from "../GrobalState/Recoil";
import { ref, getDownloadURL } from "firebase/storage";
import { userData } from "../Types/userData";
import FirstForm from "../Template/Form";
const GetData = ({ Url }: { Url: string }) => {
  const [color, setColor] = useRecoilState(UserColor);
  const setUrl = useSetRecoilState(GETURL);
  const setName = useSetRecoilState(UserName);
  const [userDatas, setUserDatas] = useState<userData>();
 console.log(Url);
  const main = color.color;

  useEffect(() => {
    let bool = true;
    if (bool) {
      (Url && Number(Url) < 27) || Number(Url) > 62
        ? setColor({
            color: "#40A2EC",
            paleColor: "#F4FAFF",
            circle: "#96CAF1",
          })
        : setColor({
            color: "#F29700",
            paleColor: "#FFF9F4",
            circle: "#F4B791",
          });

      const GetData = async () => {
        const users = await getDoc(
          doc(firestore, "studentInputData", `${Url}`)
        );
        const storageFace = await getDownloadURL(
          ref(storage, `${Url}/face.png`)
        );
        const storageBack = await getDownloadURL(
          ref(storage, `${Url}/back.jpg`)
        );
        const img = { face: storageFace, back: storageBack };
        const user = users ? users.data() : null;
        const userData = { name: `${user ? user.name : null}`, ...img };
        setName(userData.name);
        setUserDatas({ ...userData, ...img });
      };
      GetData();
      const urlNumber =
        Url === "63" || Url === "64"
          ? "1"
          : Url === "65"
          ? "2"
          : Url === "66"
          ? "23"
          : Url === "67" || Url === "68"
          ? "26"
          : Url === "69"
          ? "11"
          : Url === "70"
          ? "4"
          : Url;
      setUrl(urlNumber);
    }
    return () => {
      bool = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {userDatas ? (
        <div className="font-jp">
          <div className="relative mb-[57px]">
            <img src={userDatas.back} alt="" />
            <div
              className="absolute inset-x-0 bottom-[-22%] mx-auto inline-block w-[25.32%] rounded-full p-[3px]"
              style={{ backgroundColor: main }}
            >
              <img src={userDatas.face} alt="" className="" />
            </div>
          </div>
          <div className="mx-auto mb-9 text-center">
            <h1 className="text-[28px] font-bold ">{userDatas.name}</h1>
            <p className="text-base text-[#536471] ">
              ブース番号:{Number(Url) < 10 ? `0${Url}` : `${Url}`}
            </p>
          </div>
          <h2
            style={{ color: `${main}` }}
            className="mx-auto my-[45px] w-fit text-center text-2xl font-bold"
          >
            作品の評価をお願いします。
          </h2>
          <div className="mx-5 mb-10">
            <FirstForm color={main} />
          </div>
        </div>
      ) : (
        <p>ローディング中</p>
      )
      }
    </>
  );
};
export default GetData;
