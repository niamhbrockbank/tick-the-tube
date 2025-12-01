import type { ReactNode } from "react";
import * as styles from "./StatisticsCard.css";

interface Props {
  title?: string;
  children?: ReactNode;
}

export default function StatisticsCard({ title, children }: Props) {
  return (
    <div className={styles.statsCard}>
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  );
}
