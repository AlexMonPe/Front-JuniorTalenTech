import { Fragment } from "react";

const Select = (props) => {
    const { className, id, aria_label, name, options } = props
  return (
    <Fragment>
      <select className={className} id={id} aria-label={aria_label} name={name}>
        {options.map((op) => {
          return <option value={op}> {op} </option>;
        })}
      </select>
    </Fragment>
  );
};

export default Select;
