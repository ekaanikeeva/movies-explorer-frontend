import React from "react";
import styles from "./MoviesCardList.module.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import img_01 from "../../images/movies/film 01.jpg";
import img_02 from "../../images/movies/film 02.jpg";
import img_03 from "../../images/movies/film 03.jpg";
import img_04 from "../../images/movies/film 04.jpg";
import img_05 from "../../images/movies/film 05.jpg";
import img_06 from "../../images/movies/film 06.jpg";
import img_07 from "../../images/movies/film 07.jpg";
import img_08 from "../../images/movies/film 08.jpg";
import img_09 from "../../images/movies/film 09.jpg";
import img_10 from "../../images/movies/film 10.jpg";
import img_11 from "../../images/movies/film 11.jpg";
import img_12 from "../../images/movies/film 12.jpg";

function MoviesCardList() {
  return (
    <section className={styles.movies}>
      <ul className={styles.moviesCards}>
        <MoviesCard
          src={img_01}
          caption="33 слова о дизайне"
          duration="1ч 17м"
        />
        <MoviesCard
          src={img_02}
          caption="Киноальманах «100 лет дизайна»"
          duration="1ч 17м"
        />
        <MoviesCard
          src={img_03}
          caption="В погоне за Бенкси"
          duration="1ч 17м"
        />
        <MoviesCard
          src={img_04}
          caption="Баския: Взрыв реальности"
          duration="1ч 17м"
        />
        <MoviesCard src={img_05} caption="Бег это свобода" duration="1ч 17м" />
        <MoviesCard src={img_06} caption="Книготорговцы" duration="1ч 17м" />
        <MoviesCard
          src={img_07}
          caption="Когда я думаю о Германии ночью"
          duration="1ч 17м"
        />
        <MoviesCard
          src={img_08}
          caption="Gimme Danger: История Игги и The Stooges"
          duration="1ч 17м"
        />
        <MoviesCard
          src={img_09}
          caption="Дженис: Маленькая девочка грустит"
          duration="1ч 17м"
        />
        <MoviesCard
          src={img_10}
          caption="Соберись перед прыжком"
          duration="1ч 17м"
        />
        <MoviesCard
          src={img_11}
          caption="Пи Джей Харви: A dog called money"
          duration="1ч 17м"
        />
        <MoviesCard
          src={img_12}
          caption="По волнам: Искусство звука в кино"
          duration="1ч 17м"
        />
      </ul>
      <button className={styles.moviesBtn}>Ещё</button>
    </section>
  );
}

export default MoviesCardList;
