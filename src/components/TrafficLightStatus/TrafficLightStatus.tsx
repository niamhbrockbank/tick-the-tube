import * as styles from "./TrafficLightStatus.css";

export default function TrafficLightStatus() {
  return (
    <>
      <div className={styles.trafficLightRed}></div>
      <div className={styles.trafficLightAmber}></div>
      <div className={styles.trafficLightGreen}></div>
    </>
  );
}
