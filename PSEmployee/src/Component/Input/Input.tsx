import { ErrorMessage, Field } from "formik";
import React from "react";
import styles from "./Input.module.scss";

interface InputProps {
  id: string;
  label: string;
  name: string;
  placeholder?: string;
  options?: { value: string; label: string }[];
}



const Input: React.FC<InputProps> = ({ id, label, name, placeholder, options }) => {
    return (
        <div className={styles.inputContainer}>
          <label htmlFor={id}>{label}</label>
          {options ? (
            <Field id={id} name={name} as="select">
              <option value="" disabled>
                {placeholder || "Выберите категорию"}
              </option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Field>
          ) : (
            <Field id={id} name={name} placeholder={placeholder} />
          )}
          <ErrorMessage name={name}>
            {(error) => <span>{error}</span>}
          </ErrorMessage>
        </div>
      );
};

export default Input;
