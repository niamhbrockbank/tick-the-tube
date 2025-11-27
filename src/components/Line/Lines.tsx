import { LINES } from "../../lib/lines";
import Line from "./Line";
import * as styles from "./Line.css";

export default function Lines() {
  return (
    <ul className={styles.lineSection}>
      {LINES.map((line) => (
        <Line line={line} key={line.id} />
      ))}
    </ul>
  );
}
