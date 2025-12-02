import { useShallow } from "zustand/shallow";
import * as styles from "./Statistics.css";
import countStatusTotals from "./utils/countStatusTotals";
import { useUserVisitationStore } from "../../store/UserVisitationStore";
import { useHomeStore } from "../../store/HomeStore";
import StatisticsCard from "./StatisticsCard/StatisticsCard";

export default function Statistics() {
  const [stationStat] = useUserVisitationStore(useShallow((s) => [s]));
  const [stations] = useHomeStore(useShallow((s) => [s.stations]));

  const statusTotals = countStatusTotals(stationStat);

  return (
    <section className={styles.statsSection}>
      <div className={styles.statsBox}>
        <StatisticsCard
          title="No. Visited Stations"
          content={statusTotals.visited}
          caption=" -3% from last month"
        />
        <StatisticsCard
          title="No. Changed At Stations"
          content={statusTotals.through}
          caption=" +3% from last month"
        />
        <StatisticsCard
          title="No. Untouched Stations"
          content={statusTotals.untouched}
          caption="-6% from last month"
        />
        <StatisticsCard title="Total Stations" content={stations.length} />
      </div>
    </section>
  );
}
