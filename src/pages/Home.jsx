import React, { useState } from "react";
import Header from "~/components/Header";
import Filter from "~/components/Filter";
import Main from "~/components/Main";
import { dataComps as initialComps } from "../data/comps";
import { gamestyles } from "~/data/gamestyles";

const Home = () => {
  const [datas, setDatas] = useState(initialComps);

  return (
    <div className="my-5 mx-12">
      <Header />
      <Filter gamestyles={gamestyles} />
      <Main datas={datas} setDatas={setDatas} />
    </div>
  );
};

export default Home;
