import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSetRecoilState, useRecoilValue } from "recoil";
import GetData from "../View/GetData";
import { ID } from "../GrobalState/Recoil";
const RenderPage = () => {
  const { search } = useLocation();
  const setId = useSetRecoilState(ID);

  useEffect(() => {
    const Sec =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const digits = 128;
    const num = Array.from(Array(digits))
      .map(() => Sec[Math.floor(Math.random() * Sec.length)])
      .join("");
    setId(num);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const data = useMemo(() => new URLSearchParams(search), [search]);
  const GetURL = data.get("userID");
  return GetURL ? <GetData Url={GetURL} /> : null;
};
export default RenderPage;
