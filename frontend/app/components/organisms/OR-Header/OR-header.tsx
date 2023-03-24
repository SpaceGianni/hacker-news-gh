import React from "react";
import styles from "./OR-header.module.css";
import HeaderTitles from "../../molecules/ML-headerTitles/ML-headerTitles";

// @refresh reset
export default function Header({
  siteTitle,
  subtitleSite_part1,
  subtitleSite_part2,
  heart,
}) {
  return (
    <div className={styles.header}>
      <HeaderTitles
        siteTitle={siteTitle}
        subtitleSite_part1={subtitleSite_part1}
        subtitleSite_part2={subtitleSite_part2}
        heart={heart}
      ></HeaderTitles>
    </div>
  );
}
