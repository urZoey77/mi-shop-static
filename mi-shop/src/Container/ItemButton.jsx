import styles from "./index.module.css";
import "../../public/iconfont/iconfont.css";

const ItemButton = ({ buttonInfo }) => {
  return (
    <div className={styles.itemButton}>
      {buttonInfo && buttonInfo.length > 0 ? (
        <div className={styles.buttonList}>
          {buttonInfo.map((classNav, index) => (
            <div key={index} className={styles.buttonText}>
              {classNav}
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.moreLink}>
          <div className={styles.linkText}>查看更多</div>
          <span className="iconfont icon-arrowRightCircle"></span>
        </div>
      )}
    </div>
  );
};

export default ItemButton;
