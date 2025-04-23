import { useState } from "react";
import styles from "./index.module.css";
import "../../public/iconfont/iconfont.css";
import ServeBar from "./ServeBar";
import FootBar from "./FootBar";

const Footer = () => {
  return (
    <div className={styles.footBarWrap}>
      <ServeBar />
      <FootBar />
    </div>
  );
};

export default Footer;
