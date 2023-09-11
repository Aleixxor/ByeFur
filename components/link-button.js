import styles from "../styles/ByeFur.module.css";
import Link from "next/link";

export default function LinkButton({
  children,
  style,
  href,
  className,
  outlined,
}) {
  return (
    <Link
      href={href}
      className={`${className} ${outlined ? styles.bgWhite : styles.bgOrange} ${
        styles.dFlex
      } ${styles.alignItemsCenter} ${styles.justifyContentCenter} ${
        outlined ? styles.clOrange : styles.clWhite
      }
      ${outlined ? `${styles.borderOrange} border` : "border-0"}
      ${styles.fw600} ${styles.fs14} gap-2`}
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
