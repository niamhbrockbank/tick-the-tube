import { useShallow } from "zustand/shallow";
import * as styles from "./Statistics.css";
import countTotalStatus from "./utils/countTotalStatus";
import { useUserVisitationStore } from "../../store/UserVisitationStore";
import { useHomeStore } from "../../store/HomeStore";
import StatisticsCard from "./StatisticsCard/StatisticsCard";

export default function Statistics() {
  const [stationStat] = useUserVisitationStore(useShallow((s) => [s]));
  const [stations] = useHomeStore(useShallow((s) => [s.stations]));

  const statusTotals = countTotalStatus(stationStat);

  return (
    <section className={styles.statsSection}>
      <h3>Statistics</h3>
      <div className={styles.statsBox}>
        <StatisticsCard title="Stations Visited">
          {statusTotals.visited}
        </StatisticsCard>
        <StatisticsCard title="Stations changed at">
          {statusTotals.through} Up 3% from last month
        </StatisticsCard>
        <StatisticsCard title="Stations not touched">
          {statusTotals.untouched} Down 6% from last month
        </StatisticsCard>
        <StatisticsCard title="Total stations">
          {stations.length}
        </StatisticsCard>
      </div>
    </section>
  );
}
