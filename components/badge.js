import styles from "../styles/ByeFur.module.css";

export default function Badge({
  children,
  style,
  className,
  onClick,
  outlined,
}) {
  return (
    <div
      className={`${styles.clOrange} ${styles.bgOrange20} d-flex justify-content-center align-items-center gap-1 rounded-pill ${className}`}
      style={{
        padding: "4px 12px 4px 8px",
        width: "fit-content",
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
