import type { Line, Station as StationType } from "../../store/HomeStore";
import Station from "./Station/Station";
import * as styles from "./Stations.css";

interface Props {
  lineId: Line["id"];
  stations: StationType[];
}

export default function Stations({ lineId, stations }: Props) {
  return (
    <ul className={styles.stationSection}>
      {stations.map((station) => {
        if (station.lines.includes(lineId)) {
          return <Station station={station} key={station.id} />;
        }
      })}
    </ul>
  );
}
