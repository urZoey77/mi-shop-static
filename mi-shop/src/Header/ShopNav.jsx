import { useState } from "react";
import styles from "./index.module.css";
import "../../public/iconfont/iconfont.css";
import logo from "../../public/LOGO.png";

const ShopNav = () => {
  return (
    <div className={styles.shopNav}>
      <div>
        <a href="https://www.mi.com/">
          <img src={logo} className={styles.logo} alt="" />
        </a>
      </div>
      <div className={styles.itemMap}>
        <div className={styles.shopItem}>Xiaomi手机</div>
        <div className={styles.shopItem}>REDMI手机</div>
        <div className={styles.shopItem}>电视</div>
        <div className={styles.shopItem}>笔记本</div>
        <div className={styles.shopItem}>平板</div>
        <div className={styles.shopItem}>家电</div>
        <div className={styles.shopItem}>路由器</div>
        <div className={styles.shopItem}>服务中心</div>
        <div className={styles.shopItem}>社区</div>
      </div>
      <div className={styles.searchForm}>
        <label>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="耳机"
          />
        </label>
        <button id="searchBtn" className={styles.searchBtn}>
          <span className="iconfont icon-sousuo"></span>
        </button>
      </div>
    </div>
  );
};

export default ShopNav;
