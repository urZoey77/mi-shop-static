import { useState } from "react";
import styles from "./index.module.css";
import "../../public/iconfont/iconfont.css";

const RecSection = () => {
  const images = {
    fn01: "/RecSection/FunctionItem/fn01_baozhangfuwu.png",
    fn02: "/RecSection/FunctionItem/fn02_qiyetuangou.png",
    fn03: "/RecSection/FunctionItem/fn03_Fma.png",
    fn04: "/RecSection/FunctionItem/fn04_mifenka.png",
    fn05: "/RecSection/FunctionItem/fn05_yijiuhuanxin.png",
    fn06: "/RecSection/FunctionItem/fn06_huafeichongzhi.png",
    item01: "/RecSection/RecItem/item01.png",
    item02: "/RecSection/RecItem/item02.png",
    item03: "/RecSection/RecItem/item03.png",
  };
  return (
    <div className={styles.recSectionWrap}>
      <ul className={styles.recFunction}>
        <li className={styles.functionItem}>
          <img src={images.fn01} alt="" />
          <a href="">保障服务</a>
        </li>
        <li className={styles.functionItem}>
          <img src={images.fn02} alt="" />
          <a href="">企业团购</a>
        </li>
        <li className={styles.functionItem}>
          <img src={images.fn03} alt="" />
          <a href="">F码通道</a>
        </li>
        <li className={styles.functionItem}>
          <img src={images.fn04} alt="" />
          <a href="">米粉卡</a>
        </li>
        <li className={styles.functionItem}>
          <img src={images.fn05} alt="" />
          <a href="">以旧换新</a>
        </li>
        <li className={styles.functionItem}>
          <img src={images.fn06} alt="" />
          <a href="">话费充值</a>
        </li>
      </ul>
      <div className={styles.recItems}>
        <img src={images.item01} alt="" />
      </div>
      <div className={styles.recItems}>
        <img src={images.item02} alt="" />
      </div>
      <div className={styles.recItems}>
        <img src={images.item03} alt="" />
      </div>
    </div>
  );
};

export default RecSection;
