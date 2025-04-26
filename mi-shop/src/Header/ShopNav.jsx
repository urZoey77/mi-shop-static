import { useState } from "react";
import styles from "./index.module.css";
import "../../public/iconfont/iconfont.css";
import logo from "../assets/LOGO.PNG";

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
        <input className={styles.searchInput} type="text" placeholder="耳机" />
        <button id="searchBtn" className={styles.searchBtn}>
          <span className="iconfont icon-sousuo"></span>
        </button>
        <div className={styles.resultList}>
          <div className={styles.resultItem}>手机焕新</div>
          <div className={styles.resultItem}>小米手环9 Pro</div>
          <div className={styles.resultItem}>Redmi K80</div>
          <div className={styles.resultItem}>风扇</div>
          <div className={styles.resultItem}>充电宝</div>
          <div className={styles.resultItem}>电视</div>
          <div className={styles.resultItem}>空气净化器</div>
          <div className={styles.resultItem}>油烟机</div>
        </div>
      </div>
    </div>
  );
};

export default ShopNav;
