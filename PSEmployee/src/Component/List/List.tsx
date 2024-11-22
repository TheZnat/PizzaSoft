import React, { useEffect } from "react";
import styles from "./List.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../Redux/store";

const List: React.FC = () => {
  const { items, isLoading, status } = useSelector(
    (state: RootState) => state.data
  );
 
  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <p>Загрузка данных...</p>
      ) : status === "error" ? (
        <p>Ошибка загрузки данных</p>
      ) : items && items.length > 0 ? (
        <div className={styles.listArea}>
          {items.map((employee) => (
            <div className={styles.list} key={employee.id}>
              <div className={styles.statusArea}>
                <div className={styles.status}>
                  <span>Архив: {employee.isArchive ? "Да" : "Нет"}</span>
                  <span>{employee.role}</span>
                </div>
                <span className={styles.formText}>{employee.name}</span>
              </div>
              <span className={styles.formText}>{employee.phone}</span>
              <span className={styles.formText}>{employee.birthday}</span>
              <button
                className={styles.bth}
                onClick={() =>
                  console.log(`Редактировать сотрудника ${employee.id}`)
                }
              >
                Редактировать
              </button>
              <div className={styles.bgElement}></div>
            </div>
          ))}
        </div>
      ) : (
        <p>Данные не найдены</p>
      )}
    </div>
  );
};

export default List;
