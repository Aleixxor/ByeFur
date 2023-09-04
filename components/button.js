import styles from "../styles/ByeFur.module.css";

export default function Button({ children, style, href, className, onClick }) {
  return (
    <button
      disabled
      onClick={onClick}
      href={href}
      className={`${className} ${styles.bgOrange} ${styles.dFlex} ${styles.alignItemsCenter} ${styles.justifyContentCenter} ${styles.clWhite} ${styles.fw600} ${styles.fs14}`}
      style={{
        ...style,
        borderRadius: "8px",
        padding: "14px 16px",
        textDecoration: "none",
        border: "none",
      }}
    >
      {children}
    </button>
  );
}
