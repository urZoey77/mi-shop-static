import styles from "./index.module.css";
import ItemButton from "./ItemButton";

const HighItems = ({ classTitle, itemInfo }) => {
  return (
    <div className={styles.topItems}>
      <div className={styles.classTitle}>
        <span className={styles.titleText}>{classTitle}</span>
        <ItemButton buttonInfo={[]} />
      </div>
      <div className={styles.classContent}>
        <div className={styles.mainGood}>
          <img src={itemInfo[0].image} alt="" />
        </div>
        <div className={styles.otherGoods}>
          {itemInfo.slice(1, 9).map((item, index) => (
            <div key={`img-${index}`} className={styles.classItem}>
              <img src={item.image} alt={`商品${index + 1}`} />
              <div className={styles.itemTitle}>{item.title}</div>
              <div className={styles.itemDescription}>{item.description}</div>
              <div className={styles.priceContainer}>
                <div className={styles.itemPrice}>{item.price}</div>
                <div className={styles.prePrice}>{item.prePrice}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HighItems;
