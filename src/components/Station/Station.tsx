import type { Station } from "../../lib/types";
import * as styles from "./Station.css";

interface Props {
  station: Station;
}

export default function Station({ station }: Props) {
  return <li className={styles.station}>{station?.name}</li>;
}
