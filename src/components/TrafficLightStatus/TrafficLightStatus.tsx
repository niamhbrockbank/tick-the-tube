import { useState } from "react";
import type { Station, StationStatus } from "../../lib/types";
import * as styles from "./TrafficLightStatus.css";

interface Props {
  station: Station;
  lineId: string;
  status: StationStatus;
}

export default function TrafficLightStatus({ station, lineId, status }: Props) {
  // TODO: Get stations across multiple lines to show the same status
  const [controlledStatus, setControlledStatus] =
    useState(status);

  return (
    <>
      <div>
        <input
          type="radio"
          id="untouched-status"
          name={`${lineId}-${station.id}-status`}
          value="untouched"
          className={styles.trafficLightRed}
          checked={controlledStatus === "untouched"}
          onChange={() => setControlledStatus("untouched")}
        />
        <input
          type="radio"
          id="through-status"
          name={`${lineId}-${station.id}-status`}
          value="through"
          className={styles.trafficLightAmber}
          checked={controlledStatus === "through"}
          onChange={() => setControlledStatus("through")}
        />
        <input
          type="radio"
          id="visited-status"
          name={`${lineId}-${station.id}-status`}
          value="visited"
          className={styles.trafficLightGreen}
          checked={controlledStatus === "visited"}
          onChange={() => setControlledStatus("visited")}
        />
      </div>
    </>
  );
}
