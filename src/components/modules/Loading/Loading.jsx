"use client";
import Image from "next/image";
import styles from "./Loading.module.css";

function Loading() {
  return (
    <div className="col-span-full  row-span-full">
      <div className={styles.loader}></div>
    </div>
  );
}

export default Loading;
