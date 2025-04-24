import { useState } from "react";
import styles from "./index.module.css";
import "../../public/iconfont/iconfont.css";
import ShopNav from "./ShopNav";
import ShopBanner from "./ShopBanner";
const Header = () => {
  return (
    <div className={styles.headerWrap}>
      <ShopNav />
      <ShopBanner />
    </div>
  );
};

export default Header;
