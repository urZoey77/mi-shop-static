import { useState } from "react";
import styles from "./index.module.css";
import "../../public/iconfont/iconfont.css";
import banner from "../assets/swiper/img01_redmiK60.jpg";

const ShopBanner = () => {
  return (
    <div className={styles.shopBannerWrap}>
      <div className={styles.shopBanner}>
        <img src={banner} alt="" />
      </div>
      <div className={styles.shopCategories}>
        <div className={styles.shopList}>
          <a href="" target="_blank" className={styles.listItem}>
            手机
          </a>
          <span class="iconfont icon-miniRight"></span>
        </div>
        <div className={styles.shopList}>
          <a href="" target="_blank" className={styles.listItem}>
            电视
          </a>
          <span class="iconfont icon-miniRight"></span>
        </div>
        <div className={styles.shopList}>
          <a href="" target="_blank" className={styles.listItem}>
            家电
          </a>
          <span class="iconfont icon-miniRight"></span>
        </div>
        <div className={styles.shopList}>
          <a href="" target="_blank" className={styles.listItem}>
            笔记本 平板
          </a>
          <span class="iconfont icon-miniRight"></span>
        </div>
        <div className={styles.shopList}>
          <a href="" target="_blank" className={styles.listItem}>
            出行 穿戴
          </a>
          <span class="iconfont icon-miniRight"></span>
        </div>
        <div className={styles.shopList}>
          <a href="" target="_blank" className={styles.listItem}>
            耳机 音箱
          </a>
          <span class="iconfont icon-miniRight"></span>
        </div>
        <div className={styles.shopList}>
          <a href="" target="_blank" className={styles.listItem}>
            健康 儿童
          </a>
          <span class="iconfont icon-miniRight"></span>
        </div>
        <div className={styles.shopList}>
          <a href="" target="_blank" className={styles.listItem}>
            生活 箱包
          </a>
          <span class="iconfont icon-miniRight"></span>
        </div>
        <div className={styles.shopList}>
          <a href="" target="_blank" className={styles.listItem}>
            智能 路由器
          </a>
          <span class="iconfont icon-miniRight"></span>
        </div>
        <div className={styles.shopList}>
          <a href="" target="_blank" className={styles.listItem}>
            电源 配件
          </a>
          <span class="iconfont icon-miniRight"></span>
        </div>
      </div>
    </div>
  );
};

export default ShopBanner;
