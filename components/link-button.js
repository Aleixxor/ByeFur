import styles from "../styles/ByeFur.module.css";
import Link from "next/link";

export default function LinkButton({ children, style, href, className }) {
  return (
    <Link
      href={href}
      className={`${className} ${styles.bgOrange} ${styles.dFlex} ${styles.alignItemsCenter} ${styles.justifyContentCenter}`}
      style={{
        ...style,
        borderRadius: "8px",
        padding: "14px 16px",
        textDecoration: "none",
      }}
    >
      <span className={`${styles.clWhite} ${styles.fw600} ${styles.fs14}`}>
        {children}
      </span>
    </Link>
  );
}
