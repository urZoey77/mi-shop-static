import styles from "./index.module.css";
import ItemButton from "./ItemButton";

const HighItems = ({ classTitle, itemInfo, buttonInfo }) => {
  return (
    <div className={styles.topItems}>
      <div className={styles.classTitle}>
        <span className={styles.titleText}>{classTitle}</span>
        <ItemButton buttonInfo={buttonInfo} />
      </div>
      <div className={styles.classContent}>
        <div className={styles.mainGood}>
          <img src={itemInfo[0].image} alt="" />
        </div>
        <div className={styles.otherGoods}>
          {itemInfo.slice(1, 8).map((item, index) => (
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
          <div className={styles.moreGoods}>
            <div className={styles.moreGoodsItem}>
              <div className={styles.moreGoodsIntro}>
                <div className={styles.moreGoodsTitle}>{itemInfo[8].title}</div>
                <div className={styles.moreGoodsPrice}>{itemInfo[8].price}</div>
              </div>
              <div className={styles.moreGoodsImg}>
                <img src={itemInfo[8].image} alt="" />
              </div>
            </div>
            <div className={styles.moreGoodsItem}>
              <div className={styles.moreGoodsIntro}>
                <div className={styles.browseMore}>浏览更多</div>
                <div className={styles.browseMoreClass}>{buttonInfo[1]}</div>
              </div>
              <span className="iconfont icon-circle-arrow-right"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighItems;
