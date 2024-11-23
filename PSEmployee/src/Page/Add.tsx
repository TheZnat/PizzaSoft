import React from "react";
import Header from "../Component/Header/Header";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import Input from "../Component/Input/Input";
import styles from "../Component/Form/From.module.scss";
import Arrow from "../assets/arrow.svg";
import { schema } from "../utils/validation";


const Add: React.FC = () => {
    const options = [
        { value: "cook", label: "Повар" },
        { value: "waiter", label: "Официант" },
        { value: "driver", label: "Водитель" },
      ];
  return (
    <>
      <Header>
        <p>Форма на добавление сотрудника</p>
      </Header>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
           <div className={styles.bgWrapperForm}>
      <Link to={"/"}>
        <img className={styles.arrow} src={Arrow} alt="назад" />
      </Link>
      <Formik
        initialValues={{
            name: "Макс Марк",
            phone: "+7 999",
            birthday: "2015",
            role: "",
        }}
        validationSchema={schema.custom}
        enableReinitialize
        onSubmit={()=> console.log("Submit")}
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
      </div>
    </>
  );
};

export default Add;
