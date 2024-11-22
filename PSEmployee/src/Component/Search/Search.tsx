import React, { useState } from "react";
import styles from "./Search.module.scss";
import cn from "classnames";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchItems } from "../../Redux/slices/data/dataSlice";
import { AppDispatch } from "../../Redux/store";

const Search: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [search, setSearch] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [isArchived, setIsArchived] = useState(false);

  const handleChangeDropdown = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedOption(event.target.value);
  };

  const handleChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const handleChangeArchived = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsArchived(event.target.checked);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      fetchItems({
        name: search,
        role: selectedOption,
        birthday: selectedDate.split("-").reverse().join("."),
        isArchive: isArchived,
      })
    );
  };

  const handleReset = () => {
    setSearch("");
    setSelectedOption("");
    setSelectedDate("");
    setIsArchived(false);

    // Отправляем запрос с пустыми параметрами, чтобы получить все данные
    dispatch(
      fetchItems({
        name: "",
        role: "",
        birthday: "",
      })
    );
  };

  const options = [
    { value: "cook", label: "Повар" },
    { value: "waiter", label: "Официант" },
    { value: "driver", label: "Водитель" },
  ];

  return (
    <form className={cn(styles.formArea)} onSubmit={handleSubmit}>
      <div className={cn(styles.mainInputArea)}>
        <input
          type="text"
          placeholder="Поиск по имени..."
          className={styles.SearchInput}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button type="submit" className={cn(styles.bth, styles.bthSearch)}>
          Найти сотрудника
        </button>
      </div>

      <div className={cn(styles.secondInputArea)}>
        <select
          id="dropdown"
          value={selectedOption}
          onChange={handleChangeDropdown}
          style={{
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        >
          <option value="" disabled>
            должности
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <div>
          <input
            type="date"
            id="datePicker"
            value={selectedDate}
            onChange={handleChangeData}
            style={{
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <input
            type="checkbox"
            id="archived"
            checked={isArchived}
            onChange={handleChangeArchived}
            style={{ cursor: "pointer" }}
          />
          <label
            style={{
              cursor: "pointer",
              fontSize: "16px",
              color: "rgb(255, 251, 251)",
            }}
          >
            В архиве
          </label>
        </div>

        <Link to="/add" className={cn(styles.bth, styles.bthAdd)}>
          Добавить
        </Link>

        <button
          type="button"
          onClick={handleReset}
          className={cn(styles.bth, styles.bthAdd)}
        >
          Сбросить
        </button>
      </div>
    </form>
  );
};

export default Search;
