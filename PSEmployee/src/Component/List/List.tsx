import React from "react";
import styles from "./List.module.scss";
import { useSelector } from "react-redux";
import { RootState} from "../../Redux/store";
import { Status } from "../../types/common";
import { Link } from "react-router-dom";

const List: React.FC = () => {
  const { items, isLoading, status } = useSelector(
    (state: RootState) => state.data
  );

  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <p>Загрузка данных...</p>
      ) : status === Status.ERROR ? (
        <p>Ошибка загрузки данных</p>
      ) : items && items.length > 0 ? (
        <div className={styles.listArea}>
          {items.map((employee) => (
            <div className={styles.list} key={employee.id}>
              <div className={styles.statusArea}>
                <div className={styles.status}>
                  <span>Архив: {employee.isArchive ? "Да" : "Нет"}</span>
                  <span>{employee.role || "Не указана"}</span>
                </div>
                <span className={styles.formText}>
                  {employee.name || "Не указано"}
                </span>
              </div>
              <span className={styles.formText}>
                {employee.phone || "Не указан"}
              </span>
              <span className={styles.formText}>
                {employee.birthday || "Не указана"}
              </span>
              <Link to={`/edit/${employee.id}`} className={styles.bth}>
                Редактировать
              </Link>

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
