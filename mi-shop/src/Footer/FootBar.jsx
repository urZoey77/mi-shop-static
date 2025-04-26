import styles from "./index.module.css";
import "../../public/iconfont/iconfont.css";

const FootBar = () => {
  return (
    <div className={styles.footBar}>
      <div className={styles.footBarItem}>
        <div className={styles.ItemTitle}>选购指南</div>
        <div className={styles.ItemContent}>
          <div className={styles.ItemLinks}>
            <a href="javascript:">手机</a>
          </div>
          <div className={styles.ItemLinks}>
            <a href="javascript:">电视</a>
          </div>
          <div className={styles.ItemLinks}>
            <a href="javascript:">笔记本</a>
          </div>
          <div className={styles.ItemLinks}>
            <a href="javascript:">平板</a>
          </div>
          <div className={styles.ItemLinks}>
            <a href="javascript:">穿戴</a>
          </div>
          <div className={styles.ItemLinks}>
            <a href="javascript:">耳机</a>
          </div>
          <div className={styles.ItemLinks}>
            <a href="javascript:">家电</a>
          </div>
          <div className={styles.ItemLinks}>
            <a href="javascript:">路由器</a>
          </div>
          <div className={styles.ItemLinks}>
            <a href="javascript:">音箱</a>
          </div>
        </div>
      </div>
      <div className={styles.footBarItem}>
        <div className={styles.ItemTitle}>服务中心</div>
        <div className={styles.ItemContent}>
          <div className={styles.ItemLinks}>
            <a href="javascript:">申请售后</a>
          </div>
          <div className={styles.ItemLinks}>
            <a href="javascript:">售后政策</a>
          </div>
          <div className={styles.ItemLinks}>
            <a href="javascript:">维修服务价格</a>
          </div>
          <div className={styles.ItemLinks}>
            <a href="javascript:">订单查询</a>
          </div>
          <div className={styles.ItemLinks}>
            <a href="javascript:">以旧换新</a>
          </div>
        </div>
      </div>
      <div className={styles.footBarItem}>
        <div className={styles.ItemTitle}>线下门店</div>
        <div className={styles.ItemContent}>
          <div className={styles.ItemLinks}>
            <a href="javascript:">小米之家</a>
          </div>
          <div className={styles.ItemLinks}>
            <a href="javascript:">服务网点</a>
          </div>
          <div className={styles.ItemLinks}>
            <a href="javascript:">授权体验店/专区</a>
          </div>
        </div>
      </div>
      <div className={styles.footBarItem}>
        <div className={styles.ItemTitle}>关于小米</div>
        <div className={styles.ItemContent}>
          <div className={styles.ItemLinks}>
            <a href="javascript:">了解小米</a>
          </div>
          <div className={styles.ItemLinks}>
            <a href="javascript:">加入小米</a>
          </div>
          <div className={styles.ItemLinks}>
            <a href="javascript:">投资者关系</a>
          </div>
          <div className={styles.ItemLinks}>
            <a href="javascript:">环境，社会及管治</a>
          </div>
          <div className={styles.ItemLinks}>
            <a href="javascript:">廉洁举报</a>
          </div>
        </div>
      </div>
      <div className={styles.footBarItem}>
        <div className={styles.ItemTitle}>关于我们</div>
        <div className={styles.ItemContent}>
          <div className={styles.ItemLinks}>
            <a href="javascript:">新浪微博</a>
          </div>
          <div className={styles.ItemLinks}>
            <a href="javascript:">官方微信</a>
          </div>
          <div className={styles.ItemLinks}>
            <a href="javascript:">联系我们</a>
          </div>
          <div className={styles.ItemLinks}>
            <a href="javascript:">公益基金会</a>
          </div>
        </div>
      </div>
      <div className={styles.footBarContact}>
        <div className={styles.contactNum}>400-100-5678</div>
        <div className={styles.contactTips}>8:00-18:00（仅收市话费）</div>
        <button className={styles.contactBtn}>人工客服</button>
      </div>
    </div>
  );
};

export default FootBar;
