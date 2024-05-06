import styles from "../styles/components/Forms.component.module.css";
import iconHour from "../assets/icon-hour.png";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { getAllUnits } from "../services/api";
import { Location } from "../utils/types/location.interface";

type FormProps = {
  hour: string;
  showClosed: boolean;
};

function Forms() {
  const { register, handleSubmit, reset } = useForm<FormProps>({
    defaultValues: {
      showClosed: true,
    },
  });

  const [results, setResults] = useState<Location[]>([]);
  const [filteredResults, setfilteredResults] = useState<Location[]>([]);

  const onSubmit = (data: FormProps) => {
    const { showClosed } = data;
    if (!showClosed) {
      const filteringClosedUnits = filteredResults.filter(
        (location) => location.opened === true
      );
      setfilteredResults(filteringClosedUnits);
    } else {
      setfilteredResults(results);
    }
    console.log(data);
  };

  const onClean = () => {
    reset();
  };

  useEffect(() => {
    const getAllLocations = async () => {
      const allUnits = await getAllUnits();

      if (allUnits) {
        setResults(allUnits.locations);
        setfilteredResults(allUnits.locations);
      }
    };

    getAllLocations();
  }, []);

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

        <span>Resultados encontrados: {filteredResults.length}</span>
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
