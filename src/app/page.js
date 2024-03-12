import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.desc}>
          Excepteur quis tempor tempor irure minim aliqua. In Lorem magna
          aliquip non cillum magna nulla cupidatat. Dolore eiusmod adipisicing
          nisi id tempor aute eu et.{" "}
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn more</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brand} />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/hero.jpg" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;
