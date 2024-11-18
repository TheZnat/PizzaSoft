import React from "react";
import styles from "./Header.module.scss";
import Logo from "../../assets/userGroups.svg";

interface Props {
  children: React.ReactNode; // any type of React component or JSX
}
const Header: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.headerBg}>
      <div className={styles.wrapper}>
        <div className={styles.logoArea}>
          <img src={Logo} alt="Логотип" className={styles.logo} />
          <h1 className={styles.name}>Сотрудники</h1>
        </div>
        {children}
      </div>
     
    </div>
  );
};

export default Header;
