import * as styles from "./Statistics.css";

export default function Statistics() {
  return (
    <section className={styles.statsSection}>
      <h3>Statistics</h3>
      <div className={styles.statsBox}>
        <p className={styles.statsCard}>Stations Visited: 20</p>
        <p className={styles.statsCard}>
          Stations changed at: 4<p>Up 3% from last month</p>
        </p>
        <p className={styles.statsCard}>Total stations: 272</p>
      </div>
    </section>
  );
}
