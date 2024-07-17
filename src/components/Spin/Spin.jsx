import styles from "./Spin.module.css"

const Spin = () => (
  <div className={styles.spinner}>
    <div className={styles.bounce1}></div>
    <div className={styles.bounce2}></div>
    <div className={styles.bounce3}></div>
  </div>
);

export default Spin;
