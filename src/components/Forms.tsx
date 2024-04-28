import styles from "../styles/components/Forms.component.module.css";
import iconHour from "../assets/icon-hour.png";

function Forms() {
  const results = 0;

  return (
    <form className={styles.formGroup}>
      <div className={styles.formIcon}>
        <img src={iconHour} alt="" />
        Horário
      </div>
      <h3>Qual horário você quer treinar?</h3>
      <div className={styles.radioWrapper}>
        <input type="radio" name="morning" value="morning" />
        <label htmlFor="morning">Manhã</label>
        <span>06:00 ás 12h</span>
      </div>
      <div className={styles.radioWrapper}>
        <input type="radio" name="afternoon" value="afternoon" />
        <label htmlFor="afternoon">Tarde</label>
        <span>12:01 ás 18h</span>
      </div>
      <div className={styles.radioWrapper}>
        <input type="radio" name="night" value="night" />
        <label htmlFor="night">Noite</label>
        <span>18:01 ás 23h</span>
      </div>
      <div className={styles.checkboxWrapper}>
        <input type="checkbox" name="show-closed" />
        <label htmlFor="show-closed">Exibir unidades fechadas</label>

        <span>Resultados encontrados: {results}</span>
      </div>

      <div className={styles.btnWrapper}>
        <button className={`${styles.btn} ${styles.btnPrimary}`}>
          Encontrar unidade
        </button>
        <button className={`${styles.btn} ${styles.btnSecundary}`}>
          Limpar
        </button>
      </div>
    </form>
  );
}

export default Forms;
