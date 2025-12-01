import * as styles from "./Roundel.css";

interface Props {
  label: string;
  colour?: styles.RoundelColour;
  title?: string;
  button?: boolean;
  handleClick?: () => void;
}

export default function Roundel({
  label,
  colour,
  title = label,
  button = false,
  handleClick,
  ...props
}: Props) {
  if (button) {
    return (
      <button
        className={styles.roundelButton[colour || "base"]}
        title={label}
        onClick={handleClick}
        {...props}
      >
        <span className={styles.label}>{label}</span>
      </button>
    );
  } else {
    return (
      <div
        className={styles.roundel[colour || "base"]}
        title={title}
        {...props}
      >
        <span className={styles.label}>{label}</span>
      </div>
    );
  }
}
