import styles from "./index.module.css";
import "../../public/iconfont/iconfont.css";

const FootBar = () => {
  return (
    <div className={styles.footBar}>
      <dl className={styles.footBarItem}>
        <dt className={styles.ItemTitle}>选购指南</dt>
        <dt className={styles.ItemContent}>
          <dd className={styles.ItemLinks}>
            <a href="javascript:">手机</a>
          </dd>
          <dd className={styles.ItemLinks}>
            <a href="javascript:">电视</a>
          </dd>
          <dd className={styles.ItemLinks}>
            <a href="javascript:">笔记本</a>
          </dd>
          <dd className={styles.ItemLinks}>
            <a href="javascript:">平板</a>
          </dd>
          <dd className={styles.ItemLinks}>
            <a href="javascript:">穿戴</a>
          </dd>
          <dd className={styles.ItemLinks}>
            <a href="javascript:">耳机</a>
          </dd>
          <dd className={styles.ItemLinks}>
            <a href="javascript:">家电</a>
          </dd>
          <dd className={styles.ItemLinks}>
            <a href="javascript:">路由器</a>
          </dd>
          <dd className={styles.ItemLinks}>
            <a href="javascript:">音箱</a>
          </dd>
        </dt>
      </dl>
      <dl className={styles.footBarItem}>
        <dt className={styles.ItemTitle}>服务中心</dt>
        <dt className={styles.ItemContent}>
          <dd className={styles.ItemLinks}>
            <a href="javascript:">申请售后</a>
          </dd>
          <dd className={styles.ItemLinks}>
            <a href="javascript:">售后政策</a>
          </dd>
          <dd className={styles.ItemLinks}>
            <a href="javascript:">维修服务价格</a>
          </dd>
          <dd className={styles.ItemLinks}>
            <a href="javascript:">订单查询</a>
          </dd>
          <dd className={styles.ItemLinks}>
            <a href="javascript:">以旧换新</a>
          </dd>
        </dt>
      </dl>
      <dl className={styles.footBarItem}>
        <dt className={styles.ItemTitle}>线下门店</dt>
        <dt className={styles.ItemContent}>
          <dd className={styles.ItemLinks}>
            <a href="javascript:">小米之家</a>
          </dd>
          <dd className={styles.ItemLinks}>
            <a href="javascript:">服务网点</a>
          </dd>
          <dd className={styles.ItemLinks}>
            <a href="javascript:">授权体验店/专区</a>
          </dd>
        </dt>
      </dl>
      <dl className={styles.footBarItem}>
        <dt className={styles.ItemTitle}>关于小米</dt>
        <dt className={styles.ItemContent}>
          <dd className={styles.ItemLinks}>
            <a href="javascript:">了解小米</a>
          </dd>
          <dd className={styles.ItemLinks}>
            <a href="javascript:">加入小米</a>
          </dd>
          <dd className={styles.ItemLinks}>
            <a href="javascript:">投资者关系</a>
          </dd>
          <dd className={styles.ItemLinks}>
            <a href="javascript:">环境，社会及管治</a>
          </dd>
          <dd className={styles.ItemLinks}>
            <a href="javascript:">廉洁举报</a>
          </dd>
        </dt>
      </dl>
      <dl className={styles.footBarItem}>
        <dt className={styles.ItemTitle}>关于我们</dt>
        <dt className={styles.ItemContent}>
          <dd className={styles.ItemLinks}>
            <a href="javascript:">新浪微博</a>
          </dd>
          <dd className={styles.ItemLinks}>
            <a href="javascript:">官方微信</a>
          </dd>
          <dd className={styles.ItemLinks}>
            <a href="javascript:">联系我们</a>
          </dd>
          <dd className={styles.ItemLinks}>
            <a href="javascript:">公益基金会</a>
          </dd>
        </dt>
      </dl>
      <div className={styles.footBarContact}>
        <div className={styles.contactNum}>400-100-5678</div>
        <div className={styles.contactTips}>8:00-18:00（仅收市话费）</div>
        <button className={styles.contactBtn}>人工客服</button>
      </div>
    </div>
  );
};

export default FootBar;
