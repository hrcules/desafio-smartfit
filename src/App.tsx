import Forms from "./components/Forms";
import Header from "./components/Header";

import styles from "./styles/App.module.css";

import recommendedMask from "./assets/recommended-mask.png";
import requiredMask from "./assets/required-mask.png";
import partialLockerroom from "./assets/partial-lockerroom.png";
import requiredLockerroom from "./assets/required-lockerroom.png";
import forbiddenLockerroom from "./assets/forbidden-lockerroom.png";
import recommendedTowel from "./assets/recommended-towel.png";
import requiredTowel from "./assets/required-towel.png";
import partialFountain from "./assets/partial-fountain.png";
import forbiddenFountain from "./assets/forbidden-fountain.png";

function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <Forms />

      <div className={styles.legendContainer}>
        <div className={styles.legendContent}>
          <p className={styles.legendTitle}>Máscara</p>
          <div className={styles.legendWapper}>
            <div className={styles.legendItem}>
              <img src={requiredMask} alt="" />
              <p>Obrigatório</p>
            </div>
            <div className={styles.legendItem}>
              <img src={recommendedMask} alt="" />
              <p>Recomendado</p>
            </div>
          </div>
        </div>
        <div className={styles.legendContent}>
          <p className={styles.legendTitle}>Toalha</p>
          <div className={styles.legendWapper}>
            <div className={styles.legendItem}>
              <img src={requiredTowel} alt="" />
              <p>Obrigatório</p>
            </div>
            <div className={styles.legendItem}>
              <img src={recommendedTowel} alt="" />
              <p>Recomendado</p>
            </div>
          </div>
        </div>
        <div className={styles.legendContent}>
          <p className={styles.legendTitle}>Bebedouro</p>
          <div className={styles.legendWapper}>
            <div className={styles.legendItem}>
              <img src={partialFountain} alt="" />
              <p>Parcial</p>
            </div>
            <div className={styles.legendItem}>
              <img src={forbiddenFountain} alt="" />
              <p>Proibido</p>
            </div>
          </div>
        </div>
        <div className={styles.legendContent}>
          <p className={styles.legendTitle}>Vestiários</p>
          <div className={styles.legendWapper}>
            <div className={styles.legendItem}>
              <img src={requiredLockerroom} alt="" />
              <p>Liberado</p>
            </div>
            <div className={styles.legendItem}>
              <img src={partialLockerroom} alt="" />
              <p>Parcial</p>
            </div>
            <div className={styles.legendItem}>
              <img src={forbiddenLockerroom} alt="" />
              <p>Fechado</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
