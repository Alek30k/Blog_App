import Image from "next/image";
import styles from "./themeToggle.module.css";

const ThemeToggle = () => {
  return (
    <div className={styles.container}>
      <Image src="/moon.png" alt="" width={14} height={14} />
      <div
        className={styles.ball}
        // style={
        //   theme === "dark"
        //     ? { left: 1, background: "#0f172a" }
        //     : { right: 1, background: "white" }
        // }
      ></div>
      <Image src="/sun.png" alt="" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
