import React, { useEffect, useState } from "react";
import styles from "./From.module.scss";
import { Link, useParams } from "react-router-dom";
import Arrow from "../../assets/arrow.svg";
import { Form, Formik } from "formik";
import Input from "../Input/Input";
import { schema } from "../../utils/validation";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";

const From: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { items, isLoading } = useSelector((state: RootState) => state.data);
  const [initialValues, setInitialValues] = useState({
    name: "",
    phone: "",
    birthday: "",
    role: "",
  });

  useEffect(() => {
    const numId = Number(id);
    const employee = items.find((item: any) => item.id === numId);

    if (employee) {
      setInitialValues({
        name: employee.name || "",
        phone: employee.phone || "",
        birthday: employee.birthday || "",
        role: employee.role || "",
      });
    }
  }, [id, items]);

  const handleSubmit = async (
    values: typeof initialValues,
    employeeId: string
  ) => {
    try {
      const response = await axios.put(
        `https://673c921196b8dcd5f3fa990c.mockapi.io/employees/${employeeId}`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Ответ от Mock API:", response.data);
      alert("Данные успешно обновлены!");
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
      alert("Произошла ошибка при обновлении данных.");
    }
  };

  const options = [
    { value: "cook", label: "Повар" },
    { value: "waiter", label: "Официант" },
    { value: "driver", label: "Водитель" },
  ];

  if (isLoading) {
    return <p>Загрузка данных...</p>;
  }

  if (!initialValues.name) {
    return <p>Сотрудник с ID {id} не найден.</p>;
  }

  return (
    <div className={styles.bgWrapperForm}>
      <Link to={"/"}>
        <img className={styles.arrow} src={Arrow} alt="назад" />
      </Link>
      <Formik
        initialValues={initialValues}
        validationSchema={schema.custom}
        enableReinitialize
        onSubmit={(values) => {
          // Проверяем, что id не undefined, передаем его в handleSubmit
          if (id) {
            handleSubmit(values, id);
          } else {
            console.error("ID сотрудника отсутствует");
          }
        }}
      >
        <Form className={styles.from}>
          <Input label="Имя" name="name" id="name" placeholder="Имя" />
          <Input
            label="Телефон"
            name="phone"
            id="phone"
            placeholder="Введите Телефон"
          />
          <Input
            label="Дата рождения"
            name="birthday"
            id="birthday"
            placeholder="Введите дату рождения"
          />
          <Input
            label="Должность в компании"
            name="role"
            id="role"
            options={options}
          />
          <button type="submit" className={styles.bth}>
            Отправить
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default From;
