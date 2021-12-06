import React from "react";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeProducts from "./HomeProducts/HomeProducts";

function Home() {
  return (
    <div className="home">
      <HomeBanner />
      <HomeProducts />
    </div>
  );
}

export default Home;
