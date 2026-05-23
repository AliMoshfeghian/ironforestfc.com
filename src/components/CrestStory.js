import Image from "next/image";
import { Sparkles } from "lucide-react";
import styles from "./CrestStory.module.css";

const LEFT_CALLOUTS = ["SAM HOUSTON", "THE PINE TREE"];
const RIGHT_CALLOUTS = ["TEXAS", "EST. 1836"];

export default function CrestStory() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.badge}>
          <Sparkles size={14} className={styles.badgeIcon} /> READ THE CREST
        </div>
        <h3 className={styles.title}>ANATOMY OF THE CREST</h3>
        <p className={styles.subtitle}>
          Every element honors Huntsville and the spirit of East Texas.
        </p>
      </div>

      <div className={styles.anatomyGrid}>
        <div className={`${styles.labelCol} ${styles.labelColLeft}`}>
          {LEFT_CALLOUTS.map((label) => (
            <span key={label} className={styles.label}>{label}</span>
          ))}
        </div>

        <div className={styles.crestWrap}>
          <Image
            src="/crest.png"
            alt="Iron Forest FC club crest"
            width={1842}
            height={2304}
            sizes="(max-width: 768px) 70vw, 380px"
            className={styles.crestImage}
            priority={false}
          />
        </div>

        <div className={`${styles.labelCol} ${styles.labelColRight}`}>
          {RIGHT_CALLOUTS.map((label) => (
            <span key={label} className={styles.label}>{label}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
