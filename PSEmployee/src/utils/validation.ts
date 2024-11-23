import * as Yup from "yup";

const regx = {
  name: /^[А-ЯЁ][а-яё]{1,49}(?: [А-ЯЁ][а-яё]{1,49})*$/,
  phone: /^\+7\ \(\d{3}\)\ \d{3}-\d{4}$/,
  birthday: /^\d{2}\.\d{2}\.\d{4}$/,
};

const name = Yup.string()
  .matches(
    regx.name,
    "ФИО должно содержать только кириллицу и начинаться с заглавной буквы"
  )
  .min(4, "Минимальная длина ФИО — 4 символа")
  .max(50, "Максимальная длина ФИО — 50 символов");

const phone = Yup.string().matches(
  regx.phone,
  "Номер телефона должен быть в формате +7 (999) 999-9999"
);

const birthday = Yup.string()
  .matches(regx.birthday, "Дата должна быть в формате ДД.ММ.ГГГГ")
  .test("isValidDate", "Некорректная дата", (value) => {
    if (!value) return true;
    const [day, month, year] = value.split(".").map(Number);
    const date = new Date(year, month - 1, day);
    // Проверяем, что дата соответствует введенным значениям
    return (
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    );
  });

export const schema = {
  custom: Yup.object().shape({
    name,
    phone,
    birthday,
  }),
};
