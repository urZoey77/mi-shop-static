import styles from "./index.module.css";

const TitleItem = () => {
  const titleImg = "/container/titleItem.webp";

  return (
    <div className={styles.titleImg}>
      <img src={titleImg} alt="" />
    </div>
  );
};

export default TitleItem;
