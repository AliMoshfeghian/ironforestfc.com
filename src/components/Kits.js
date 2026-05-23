import Image from "next/image";
import { Shirt } from "lucide-react";
import styles from "./Kits.module.css";

export default function Kits() {
  return (
    <div id="kits" className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <div className={styles.badge}>
          <Shirt size={14} className={styles.badgeIcon} /> INAUGURAL 2027 KITS
        </div>
        <h2 className="accent-title">THE OFFICIAL KITS</h2>
        <p className={styles.sectionSubtitle}>
          Designed in collaboration with Alessandra & Erreà S.p.A. — built for competition.
        </p>
      </div>

      <div className={styles.showcaseGrid}>
        <div className={`${styles.imageCard} glass-panel`}>
          <div className={styles.imageWrapper}>
            <Image
              src="/jerseys.png"
              alt="Iron Forest FC home, away, and third kits"
              width={1842}
              height={2304}
              className={styles.jerseyImage}
              sizes="(max-width: 1024px) 92vw, 60vw"
              priority={false}
            />
          </div>
        </div>

        <div className={`${styles.detailsCard} glass-panel`}>
          <div className={styles.detailsHeader}>
            <span className={styles.kitType}>2027 SEASON</span>
            <h3 className={styles.kitName}>Three Kits. One Forest.</h3>
            <span className={styles.kitSubtitle}>Home · Away · Third</span>
          </div>
          <p className={styles.kitDescription}>
            Our inaugural kit collection is engineered by Erreà S.p.A. in Italy and grounded in the colors of East Texas — deep piney greens, clean modern whites, and a vibrant red third strip that carries the spirit of Huntsville onto every pitch.
          </p>
        </div>
      </div>
    </div>
  );
}
