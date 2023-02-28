import React from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";
import { Container } from "./styles";

const customStyles = {
  container: (provided, state) => ({
    ...provided,
    width: "90%",
    fontSize: 13,
    backgroundColor: "var(--grey-2)",
    borderRadius: 3,
  }),

  option: (provided, state) => ({
    ...provided,
    color: state.isSelected && "var(--grey-0)",
    borderRadius: 3,
    cursor: "pointer",
    backgroundColor: "var(--grey-2)",
  }),

  control: (provided, state) => ({
    ...provided,
    color: "var(--grey-0)",
    backgroundColor: "var(--grey-2)",
    borderColor: `${
      state.selectProps.isErrored ? "var(--color-negative)" : "var(--grey-2)"
    }`,
    borderRadius: 3,
    cursor: "pointer",
    boxShadow: "none",
    "&:focus-within": {
      borderColor: state.selectProps.isErrored
        ? "var(--color-negative)"
        : "var(--grey-0)",
      boxShadow: state.selectProps.isErrored
        ? "0 0 0.2rem var(--color-negative)"
        : "0 0 0.2rem var(--grey-0)",
    },
  }),

  menu: (provided, state) => ({
    ...provided,
    backgroundColor: "var(--grey-2)",
    borderRadius: 3,
  }),

  singleValue: (provided, state) => ({
    ...provided,
    color: "var(--grey-0)",
  }),
};

const SelectComponent = ({
  label,
  control,
  options,
  error,
  placeholder,
  positionInput = "bottom",
}) => {
  console.log(!!placeholder);
  return (
    <Container isErrored={!!error}>
      <div id="errorContainer">
        {label}
        {!!error && <span>{error}</span>}
      </div>
      <Controller
        control={control}
        name="status"
        render={({ field }) => (
          <Select
            {...field}
            options={options}
            styles={customStyles}
            placeholder={placeholder}
            isErrored={!!error}
            menuPlacement={positionInput}
          />
        )}
      />
    </Container>
  );
};

export default SelectComponent;
