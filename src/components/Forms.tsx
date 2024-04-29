import styles from "../styles/components/Forms.component.module.css";
import iconHour from "../assets/icon-hour.png";
import { useForm } from "react-hook-form";

type FormProps = {
  hour: string;
  showClosed: boolean;
};

function Forms() {
  const { register, handleSubmit, reset } = useForm<FormProps>();

  const results = 0;

  const onSubmit = (data: FormProps) => {
    console.log(data);
  };

  const onClean = () => {
    reset();
  };

  return (
    <form className={styles.formGroup} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formIcon}>
        <img src={iconHour} alt="" />
        Horário
      </div>
      <h3>Qual horário você quer treinar?</h3>
      <div className={styles.radioWrapper}>
        <input {...register("hour")} type="radio" name="hour" value="morning" />
        <label htmlFor="morning">Manhã</label>
        <span>06:00 ás 12h</span>
      </div>
      <div className={styles.radioWrapper}>
        <input
          {...register("hour")}
          type="radio"
          name="hour"
          value="afternoon"
        />
        <label htmlFor="afternoon">Tarde</label>
        <span>12:01 ás 18h</span>
      </div>
      <div className={styles.radioWrapper}>
        <input {...register("hour")} type="radio" name="hour" value="night" />
        <label htmlFor="night">Noite</label>
        <span>18:01 ás 23h</span>
      </div>
      <div className={styles.checkboxWrapper}>
        <div className={styles.checkbox}>
          <input
            {...register("showClosed")}
            type="checkbox"
            name="showClosed"
          />
          <label htmlFor="showClosed">Exibir unidades fechadas</label>
        </div>

        <span>Resultados encontrados: {results}</span>
      </div>

      <div className={styles.btnWrapper}>
        <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`}>
          Encontrar unidade
        </button>
        <button
          type="button"
          onClick={() => onClean()}
          className={`${styles.btn} ${styles.btnSecundary}`}
        >
          Limpar
        </button>
      </div>
    </form>
  );
}

export default Forms;
