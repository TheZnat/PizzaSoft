import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./List.module.scss";
import cn from "classnames";

interface Employees {
  id: number;
  name: string;
  isArchive: boolean;
  role: "driver" | "waiter" | "cook"; // Перечисление ролей
  phone: string; // Телефон в виде строки
  birthday: string; // Дата в строковом формате
}

const List: React.FC = () => {
  const [data, setData] = useState<Employees[] | null>(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const { data } = await axios.get<Employees[]>(
          "https://673c921196b8dcd5f3fa990c.mockapi.io/employees"
        );
        setData(data);
      } catch (e) {
        if (axios.isAxiosError(e)) {
          if (e.response && e.response.status === 404) {
            console.error("Ресурс не найден");
            setData([]);
          }
        } else {
          const error = e as Error;
          console.error("Ошибка при выполнении запроса:", error.message);
        }
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className={styles.wrapper}>
      {data && data.length > 0 ? (
        <div className={styles.listArea}>
          {data.map((employee) => (
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
                onClick={() => console.log(`Редактировать сотрудника ${employee.id}`)}
              >
                Редактировать
              </button>
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
