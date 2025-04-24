import { useState } from "react";
import styles from "./index.module.css";
import "../../public/iconfont/iconfont.css";
import ShopNav from "./ShopNav";
import ShopBanner from "./ShopBanner";
import RecSection from "./RecSection";

const Header = () => {
  return (
    <div className={styles.headerWrap}>
      <ShopNav />
      <ShopBanner />
      <RecSection />
    </div>
  );
};

export default Header;
