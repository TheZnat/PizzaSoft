import React, { useState } from "react";
import styles from "./Search.module.scss";
import cn from "classnames";

const Search: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [isArchived, setIsArchived] = useState<boolean>(false);

  const handleChangeDropdown = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedOption(event.target.value);
  };

  const handleChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const handleChangeArchived = () => {
    setIsArchived((prev) => !prev);
  };

  const options = [
    { value: "Повар", label: "Повар" },
    { value: "Официант", label: "Официант" },
    { value: "Водитель", label: "Водитель" },
  ];

  return (
    <form className={cn(styles.formArea)}>
      <div className={cn(styles.mainInputArea)}>
        <input
          type="text"
          placeholder="Поиск по имени..."
          className={styles.SearchInput}
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

        <button type="submit" className={cn(styles.bth, styles.bthAdd)}>
          Добавить
        </button>
      </div>
    </form>
  );
};

export default Search;
