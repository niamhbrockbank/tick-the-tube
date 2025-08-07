import type { Station } from "../../lib/types";
import * as styles from "./Station.css";

interface Props {
  station: Station;
}

export default function Station({ station }: Props) {
  const visitingOptions = ["visited", "through", "untouched"];

  return (
    <div className={styles.station}>
      <li className={styles.stationName}>{station?.name}</li>
      <select className={styles.visitingOptions}>
        {visitingOptions.map((v) => (
          <option>{v}</option>
        ))}
      </select>
    </div>
  );
}
