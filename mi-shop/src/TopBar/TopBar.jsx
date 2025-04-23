import { useState } from "react";
import styles from "./topBar.module.css";
import "../../public/iconfont/iconfont.css";

const TopBar = () => {
  return (
    <div className={styles.topBarWrap}>
      <div className={styles.siteNavWrap}>
        <div className={styles.siteNav}>
          <a href="javascript:">小米官网</a>
          <a href="javascript:">小米商城</a>
          <a href="javascript:">MIUI</a>
          <a href="javascript:">IoT</a>
          <a href="javascript:">云服务</a>
          <a href="javascript:">天星数科</a>
          <a href="javascript:">有品</a>
          <a href="javascript:">小爱开放平台</a>
          <a href="javascript:">企业团购</a>
          <a href="javascript:">资质证照</a>
          <a href="javascript:">协议规则</a>
          <a href="javascript:">下载app</a>
          <a href="javascript:">Select Location</a>
        </div>
        <div className={styles.userNav}>
          <a href="javascript:">登录</a>
          <a href="javascript:">注册</a>
          <a href="javascript:">消息通知</a>
          <div className={styles.shoppingCar}>
            <a href="javascript:" className="iconfont icon-gouwuchekong">
              购物车
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
