import React from "react";
import styles from "./Search.module.scss";
import cn from "classnames";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchQuery,
  setSelectedOption,
  setSelectedDate,
  setIsArchived,
} from "../../Redux/slices/filter/filterSlice";
import { selectSort } from "../../Redux/slices/filter/selectors";

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const { searchQuery, selectedOption, selectedDate, isArchived } =
    useSelector(selectSort);

  const handleChangeDropdown = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(setSelectedOption(event.target.value));
  };

  const handleChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSelectedDate(event.target.value));
  };

  const handleChangeArchived = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setIsArchived(event.target.checked));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };

  const options = [
    { value: "cook", label: "Повар" },
    { value: "waiter", label: "Официант" },
    { value: "driver", label: "Водитель" },
  ];

  return (
    <form className={cn(styles.formArea)}>
      <div className={cn(styles.mainInputArea)}>
        <input
          type="text"
          placeholder="Поиск по имени..."
          className={styles.SearchInput}
          value={searchQuery}
          onChange={handleSearchChange} 
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
      </div>
    </form>
  );
};

export default Search;
