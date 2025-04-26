import styles from "./index.module.css";
import TitleItem from "./TitleItem";
import ItemSection from "./ItemSectioin";

const Container = () => {
  return (
    <div className={styles.containerWrap}>
      <TitleItem />
      <ItemSection />
      <TitleItem />
    </div>
  );
};

export default Container;
