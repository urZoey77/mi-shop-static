import styles from "./index.module.css";
import HighItems from "./HighItems";
import MidItems from "./MidItems";
import NormalItems from "./NormalItems";

const ItemSection = () => {
  const itemInfo = [
    {
      image: "/container/topItems/mainGood.webp",
      title: "Redmi 12C",
      description: "高性能长续航，5000像素超清双摄",
      price: "1299元起",
      prePrice: "2199元",
    },
    {
      image: "/container/topItems/otherGood01.webp",
      title: "Redmi 12C",
      description: "高性能长续航，5000像素超清双摄",
      price: "1299元起",
    },
    {
      image: "/container/topItems/otherGood02.webp",
      title: "Redmi 12C",
      description: "高性能长续航，5000像素超清双摄",
      price: "1299元起",
    },
    {
      image: "/container/topItems/otherGood03.webp",
      title: "Redmi 12C",
      description: "高性能长续航，5000像素超清双摄",
      price: "1299元起",
      prePrice: "2199元",
    },
    {
      image: "/container/topItems/otherGood04.webp",
      title: "Redmi 12C",
      description: "高性能长续航，5000像素超清双摄",
      price: "1299元起",
      prePrice: "2199元",
    },
    {
      image: "/container/topItems/otherGood01.webp",
      title: "Redmi 12C",
      description: "高性能长续航，5000像素超清双摄",
      price: "1299元起",
    },
    {
      image: "/container/topItems/otherGood02.webp",
      title: "Redmi 12C",
      description: "高性能长续航，5000像素超清双摄",
      price: "1299元起",
      discount: "2199元",
    },
    {
      image: "/container/topItems/otherGood03.webp",
      title: "Redmi 12C",
      description: "高性能长续航，5000像素超清双摄",
      price: "1299元起",
    },
    {
      image: "/container/topItems/otherGood04.webp",
      title: "Redmi 12C",
      description: "高性能长续航，5000像素超清双摄",
      price: "1299元起",
      prePrice: "2199元",
    },
    {
      image: "/container/topItems/otherGood04.webp",
      title: "Redmi 12C",
      description: "高性能长续航，5000像素超清双摄",
      price: "1299元起",
      prePrice: "2199元",
    },
  ];

  return (
    <div className={styles.itemSection}>
      <HighItems classTitle="手机" itemInfo={itemInfo} />
      <MidItems
        classTitle="智能穿戴"
        itemInfo={itemInfo}
        buttonInfo={["耳机", "穿戴"]}
      />
      <MidItems
        classTitle="笔记本|平板"
        itemInfo={itemInfo}
        buttonInfo={["耳机", "穿戴"]}
      />
      <NormalItems
        classTitle="家电"
        itemInfo={itemInfo}
        buttonInfo={["热门", "电视影音", "空调"]}
      />
    </div>
  );
};

export default ItemSection;
