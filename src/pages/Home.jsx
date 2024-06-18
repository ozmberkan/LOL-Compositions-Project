import React, { useState } from "react";
import Header from "~/components/Header";
import Filter from "~/components/Filter";
import Main from "~/components/Main";
import { dataComps as initialComps } from "../data/comps";
import { gamestyles as initialStyles } from "~/data/gamestyles";

const Home = () => {
  const [datas, setDatas] = useState(initialComps);

  const filterBox = (name) => {
    const filteredBox = initialComps.filter(
      (comp) => comp.gamestyle.type === name
    );
    setDatas(filteredBox);
  };

  const resetBox = () => {
    setDatas(initialComps);
  };

  return (
    <div className="my-5 mx-12">
      <Header />
      <Filter
        filterBox={filterBox}
        initialStyles={initialStyles}
        resetBox={resetBox}
      />
      <Main datas={datas} setDatas={setDatas} initialComps={initialComps} />
    </div>
  );
};

export default Home;
