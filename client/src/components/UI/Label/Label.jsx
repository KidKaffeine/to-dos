export default function Label({ htmlFor, ariaLabel, title }) {
  return (
    <label
      htmlFor={htmlFor}
      aria-label={ariaLabel}
    >
      {title}
    </label>
  );
}
