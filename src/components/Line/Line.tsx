import { useShallow } from "zustand/shallow";
import { useHomeStore, type Line } from "../../store/HomeStore";
import * as styles from "./Line.css";
import Station from "../Station/Station";
import { useUserVisitationStore } from "../../store/UserVisitationStore";
import { countStationStatus } from "./utils/countStationStatus";

interface Props {
  line: Line;
}

export default function Line({ line }: Props) {
  const [stations] = useHomeStore(useShallow((s) => [s.stations]));
  const [stationStatuses] = useUserVisitationStore(
    useShallow((s) => {
      return [s];
    })
  );
  const { untouched, through, visited } = countStationStatus(
    line.id,
    stations,
    stationStatuses
  );

  return (
    <div className={styles.line}>
      <li
        key={line.id}
        className={styles.lineName}
        style={{
          borderBottom: `8px solid ${line.colour}`,
        }}
      >
        {line.name}
        <span>
          {" "}
          untouched:
          {untouched} -- through:{through} -- visited:{visited}
        </span>
      </li>
      <ul>
        {stations.map((station) => {
          if (station.lines.includes(line.id)) {
            return <Station station={station} key={station.id} />;
          }
        })}
      </ul>
    </div>
  );
}
