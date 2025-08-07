import { LINES } from "../../lib/lines";
import { STATIONS } from "../../lib/stations";
import * as styles from "./Home.css";

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>Tick the Tube</h1>
      <ul>
        {LINES.map((line) => (
          <li key={line.id} style={{ color: `${line.colour}` }}>
            {line.name}
            <ul>
              {line.stations.map((stationId) => {
                const shownStation = STATIONS.find(
                  (station) => station.id === stationId
                );
                return <li>{shownStation?.name}</li>;
              })}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}
