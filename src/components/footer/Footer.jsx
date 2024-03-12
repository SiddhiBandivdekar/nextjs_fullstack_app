import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Sids</div>
      <div className={styles.text}>
        Sids creative thoughts agency © All rights reserved
      </div>
    </div>
  );
};

export default Footer;
