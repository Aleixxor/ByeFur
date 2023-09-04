import Image from "next/image";
import styles from "../styles/ByeFur.module.css";

export default function Logo({ style, className, size }) {
  return (
    <div
      style={style}
      className={`${styles.logoFamily} ${styles.fw700} ${styles[`fs${size}`]} 
        ${styles.dFlex} ${styles.gap4} ${className}`}
    >
      <div>
        <span className={styles.clBrown}>Bye</span>
        <span className={styles.clOrange}>Fur</span>
      </div>
      <Image
        src="/images/star.svg"
        height={size / 2}
        width={size / 2}
        alt="star"
      />
    </div>
  );
}
