import { useState } from "react";
import styles from "./index.module.css";
import "../../public/iconfont/iconfont.css";
import ShopNav from "./ShopNav";

const Header = () => {
  return (
    <div className={styles.headerWrap}>
      <ShopNav />
    </div>
  );
};

export default Header;
