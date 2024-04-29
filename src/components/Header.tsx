import logo from "../assets/logo.svg";

import styles from "../styles/components/Header.component.module.css";

function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="logo smartfit" />
      </div>
      <div className={styles.textContainer}>
        <h1>
          REABERTURA <br /> SMART FIT
          <div className={styles.headingBorder} />
        </h1>
        <p>
          O horário de funcionamento das nossas unidades está seguindo os
          decretos de cada município. Por isso, confira aqui se a sua unidade
          está aberta e as medidas de segurança que estamos seguindo.
        </p>
      </div>
    </header>
  );
}

export default Header;
