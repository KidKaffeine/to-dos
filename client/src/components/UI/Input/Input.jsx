import styles from './Input.module.css'

export default function Input({ type, name, id, min, max, className }) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      min={min}
      max={max}
      className={styles[className]}
    />
  );
}
