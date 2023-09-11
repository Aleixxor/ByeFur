import styles from "../styles/ByeFur.module.css";

export default function Button({
  children,
  style,
  href,
  className,
  onClick,
  outlined,
}) {
  return (
    <button
      onClick={onClick}
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
      {children}
    </button>
  );
}
