import { Card } from '../Card/Card'

import Styles from './CardsList.module.css'

export const CardList = (props) => {

  return (
    <section className={Styles["list-section"]}>
      <h2 className={Styles["list-section__title"]} id={props.id}>
        {props.title}
      </h2>
      <ul className={Styles["list"]}>
        {props.data.map((item) => {
          return (
            <li className={Styles["list__item"]} key={item.id}>
              <a href={item.link} target="_blank" className={Styles["list__link"]}>
                <Card {...item} />
              </a>
            </li>
          );
        })};
      </ul>
    </section>
  );
};
