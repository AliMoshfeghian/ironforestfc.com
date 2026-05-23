"use client";

import React, { useState, useEffect } from "react";
import styles from "./Countdown.module.css";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 0);
    // Kickoff date: June 1, 2027 at 19:00:00 (7 PM Central Time)
    const targetDate = new Date("2027-06-01T19:00:00-05:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, "0");

  // Avoid hydration mismatch by showing placeholders until mounted
  if (!isMounted) {
    return (
      <div className={styles.container}>
        <div className={styles.timeGrid}>
          {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
            <div key={label} className={styles.timeBox}>
              <span className={styles.digits}>--</span>
              <span className={styles.label}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        <span className="status-dot"></span> COUNTDOWN TO INAUGURAL KICKOFF
      </h3>
      <div className={styles.timeGrid}>
        <div className={styles.timeBox}>
          <span className={`${styles.digits} glow-text-gold`}>
            {formatNumber(timeLeft.days)}
          </span>
          <span className={styles.label}>Days</span>
        </div>
        <div className={styles.timeBox}>
          <span className={`${styles.digits} glow-text-gold`}>
            {formatNumber(timeLeft.hours)}
          </span>
          <span className={styles.label}>Hours</span>
        </div>
        <div className={styles.timeBox}>
          <span className={`${styles.digits} glow-text-gold`}>
            {formatNumber(timeLeft.minutes)}
          </span>
          <span className={styles.label}>Minutes</span>
        </div>
        <div className={styles.timeBox}>
          <span className={`${styles.digits} glow-text-gold`}>
            {formatNumber(timeLeft.seconds)}
          </span>
          <span className={styles.label}>Seconds</span>
        </div>
      </div>
    </div>
  );
}
