import styles from "./loading.module.css";

function Loading() {
  return (
    // <div className="w-full h-full">
    //   <div className={styles.loader}></div>
    // </div>
    <div className="flex items-center justify-center w-full h-[50svh] bg-[#E9ECEC]">
      <div className={styles.loader}></div>
    </div>
  );
}

export default Loading;
