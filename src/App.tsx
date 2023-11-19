import React from "react";

import { Routes, Route } from "react-router-dom";
import IllustCreate from "./components/Page/IllustCreate";
import RenderPage from "./components/Page/Render";
import { RecoilRoot } from "recoil";
import Illust from "./components/Page/Illust";
import "./index.css";

function App() {
  return (
    <>
      <RecoilRoot>
        <Routes>
          <Route path="/input" element={<RenderPage />} />
          <Route path="/illust/" element={<Illust />} />
          <Route path="/illust/Create" element={<IllustCreate />} />
        </Routes>
      </RecoilRoot>
    </>
  );
}

export default App;
