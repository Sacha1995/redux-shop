import React from "react";

const FormElements = ({
  callback,
  type,
  id,
  options,
  name,
  label,
  value,
  question,
  inputs,
  className,
  error,
}) => {
  switch (type) {
    case "text":
    case "number":
    case "email":
    case "password":
    case "url":
    case "date":
      return (
        <>
          <label htmlFor={id}>{label}</label>
          <br />
          {error && <p className="error">{error}</p>}
          <input
            type={type}
            onInput={callback}
            id={id}
            value={value}
            className={className}
            name={name}
          />
          <br />
        </>
      );

    case "select":
      return (
        <>
          <label htmlFor={name}>{label} </label> <br />
          {error && <p className="error">{error}</p>}
          <select id={id} name={name} onChange={callback} className={className}>
            {options.map((option) => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </>
      );

    case "checkbox":
    case "radio":
      return (
        <>
          <p>{question}</p>
          {error && <p className="error">{error}</p>}
          {inputs.map((checkbox) => {
            return (
              <>
                <input
                  key={checkbox}
                  type={type}
                  onInput={callback}
                  id={checkbox}
                  value={checkbox}
                  name={name}
                />
                <label htmlFor={checkbox}>{checkbox}</label>
                <br />
              </>
            );
          })}
        </>
      );
    default:
      console.log("something went wrong with creating a form element");
      break;
  }
};

export default FormElements;
