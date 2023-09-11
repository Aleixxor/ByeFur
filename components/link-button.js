import styles from "../styles/ByeFur.module.css";
import Link from "next/link";

export default function LinkButton({ children, style, href, className }) {
  return (
    <Link
      href={href}
      className={`${styles.bgOrange} ${styles.dFlex} ${styles.alignItemsCenter} ${styles.justifyContentCenter} ${styles.clWhite} ${styles.fw500} ${styles.fs14} ${className}`}
      style={{
        ...style,
        borderRadius: "8px",
        padding: "14px 16px",
        textDecoration: "none",
      }}
    >
      <span>{children}</span>
    </Link>
  );
}
