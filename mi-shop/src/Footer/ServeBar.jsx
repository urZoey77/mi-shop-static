import { useState } from "react";
import styles from "./index.module.css";
import "../../public/iconfont/iconfont.css";

const ServeBar = () => {
  return (
    <div className={styles.serveBar}>
      <div className={styles.serveBarItem}>
        <a href="javascript:" className="iconfont icon-repair">
          预约维修服务
        </a>
      </div>
      <div className={styles.serveBarItem}>
        <a href="javascript:" className="iconfont icon-returnGoods">
          7天无理由退货
        </a>
      </div>
      <div className={styles.serveBarItem}>
        <a href="javascript:" className="iconfont icon-exchange15">
          15天免费换货
        </a>
      </div>
      <div className={styles.serveBarItem}>
        <a href="javascript:" className="iconfont icon-gift">
          满69元免邮
        </a>
      </div>
      <div className={styles.serveBarItem}>
        <a href="javascript:" className="iconfont icon-location">
          1100余家售后网点
        </a>
      </div>
    </div>
  );
};

export default ServeBar;
