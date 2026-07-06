import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Meals.module.css";

const Meals = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    FetchApi(setData);
  }, []);

  const FetchApi = async (setter) => {
    try {
      const res = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood",
      );
      setter(res.data.meals);
    } catch (err) {
      console.err(err);
    }
  };

  return (
    <div className={styles.itemsContainer}>
      {data.map((key) => (
        <>
          <section className={styles.card}>
            <img src={key.strMealThumb} alt="img" />
            <section className={styles.content}>
              <p>{key.strMeal}</p>
              <p>{key.idMeal}</p>
            </section>
          </section>
        </>
      ))}
    </div>
  );
};

export default Meals;
