import styles from "./LoadingScreen.module.css";

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-tr from-[#053751] to-[#021b28]">
      <div className="w-12 h-12 border-gray-300  border-t-gray-500 rounded-full"></div>
    </div>

    // <div className={styles["spinner-container"]}>
    //   <div className={styles.spinner}></div>
    // </div>
  );
};

export default LoadingScreen;
