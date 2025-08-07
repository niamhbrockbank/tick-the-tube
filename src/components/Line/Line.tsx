import { STATIONS } from "../../lib/stations";
import type { Line } from "../../lib/types";
import Station from "../Station/Station";

interface Props {
  line: Line;
}

export default function Line({ line }: Props) {
  return (
    <li key={line.id} style={{ color: `${line.colour}` }}>
      {line.name}
      <ul>
        {line.stations.map((stationId) => {
          const shownStation = STATIONS.find(
            (station) => station.id === stationId
          );
          return shownStation && <Station station={shownStation} />;
        })}
      </ul>
    </li>
  );
}
