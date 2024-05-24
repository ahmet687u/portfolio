"use client";

import { useState } from "react";
import styles from "./resmenu.module.scss";
import { IoIosMenu } from "react-icons/io";


const ResponsiveNavbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={styles.menu_container}>
      {/* menu toggle button */}
      <div className={styles.menu}>
        <IoIosMenu onClick={() => setIsOpen(!isOpen)} />
      </div>

      {/* menu list */}
      <div className={`${styles.menu_list} ${isOpen ? styles.show : ""}`}>
        <div className={styles.wrapper}></div>
      </div>
    </div>
  );
};

export default ResponsiveNavbar;
