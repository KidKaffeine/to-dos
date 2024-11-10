import styles from "./Button.module.css";

export default function Button({ type, className, title, icon }) {
  return (
    <button type={type} className={styles[className]}>
     {title ? title : icon}
    </button>
  );
}
